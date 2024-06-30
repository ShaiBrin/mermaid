import React, { useState, useEffect, SyntheticEvent } from 'react';
import { Box, Grid, TextField, Chip, useTheme, Button } from '@mui/material';
import Autocomplete from '@mui/lab/Autocomplete';
import MaidModal from '../MaidModal/MaidModal';
import Link from 'next/link';

interface MaidDetails {
    firstname: string;
    lastname: string;
    rating: number;
    price: number;
    experience: string;
}

const DropDownChooseMaid: React.FC = () => {
    const [autocompleteOptions, setAutocompleteOptions] = useState<MaidDetails[]>([]);
    const [selectedOption, setSelectedOption] = useState<MaidDetails | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const theme = useTheme();

    useEffect(() => {
        const fetchMaids = async () => {
            try {
                const res = await fetch(`http://localhost:3000/api/get-maids`);
                if (!res.ok) {
                    throw new Error('Failed to fetch maids');
                }
                const data = await res.json();
                if (data && data.maids && Array.isArray(data.maids.rows)) {
                    const maidDetails = data.maids.rows.map((maid: any) => ({
                        firstname: maid.firstname,
                        lastname: maid.lastname,
                        rating: maid.rating || 0,
                        price: maid.price || 0,
                        experience: maid.experience || '',
                    }));
                    setAutocompleteOptions(maidDetails);
                } else {
                    throw new Error('Invalid maids data structure');
                }
            } catch (error) {
                console.error('Error fetching maids:', error);
            }
        };

        fetchMaids();
    }, []);

    const handleAutocompleteChange = (event: SyntheticEvent, newValue: MaidDetails | null) => {
        setSelectedOption(newValue);
        if (newValue) {
            setIsModalOpen(true); // Open modal when a maid is selected
        }
    };

    const handleCloseModal = () => {
        setIsModalOpen(false); // Close modal
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Box p={2} sx={{ border: '1px solid #ccc', borderRadius: '4px' }}>
                    <Autocomplete
                        options={autocompleteOptions}
                        getOptionLabel={(option) => `${option.firstname} ${option.lastname}`}
                        onChange={handleAutocompleteChange}
                        value={selectedOption}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                variant="outlined"
                                label="Choose Maid"
                                placeholder="Type..."
                                margin="normal"
                            />
                        )}
                        renderTags={(value, getTagProps) =>
                            value.map((option, index) => (
                                // eslint-disable-next-line react/jsx-key
                                <Chip
                                    {...getTagProps({ index })}
                                    label={`${option.firstname} ${option.lastname}`}
                                    color="primary"
                                    sx={{ bgcolor: theme.palette.primary.light, margin: '2px' }}
                                />
                            ))
                        }
                    />
                    <Link href="/maid/book" passHref>
                        <Button
                            variant="outlined"
                            fullWidth
                            sx={{ marginBottom: 2, marginTop: 2 }}
                        >
                            Reserve Maid
                        </Button>
                    </Link>
                </Box>
            </Grid>
            {/* MaidDetailsModal component */}
            <MaidModal
                firstname={selectedOption?.firstname || ''}
                lastname={selectedOption?.lastname || ''}
                rating={selectedOption?.rating || 0}
                price={selectedOption?.price || 0}
                experience={selectedOption?.experience || ''}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
        </Grid>
    );
};

export default DropDownChooseMaid;
