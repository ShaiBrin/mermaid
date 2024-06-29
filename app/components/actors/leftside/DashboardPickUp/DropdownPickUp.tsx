import React, { useState, useEffect, SyntheticEvent } from 'react';
import { Box, Grid, TextField, Chip, useTheme, Button } from '@mui/material';
import Autocomplete from '@mui/lab/Autocomplete';
import MaidModal from '../MaidModal/MaidModal';
import Link from 'next/link';
interface MaidModal {
    firstname: string;
    lastname: string;
    rating: number;
    price: number;
    experience: string;
}

const DropdownPickUp: React.FC = () => {
    const [autocompleteOptions, setAutocompleteOptions] = useState<MaidModal[]>([]);
    const [selectedOption, setSelectedOption] = useState<MaidModal | null>(null);
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
                        rating: maid.rating || 0, // Assuming rating is a number
                        price: maid.price || 0, // Assuming price is a number
                        experience: maid.experience || '', // Assuming experience is a string
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

    const handleAutocompleteChange = (event: SyntheticEvent, newValue: MaidModal | null) => {
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
                                    // key={option} // Add a unique key prop
                                    {...getTagProps({ index })}
                                    label={`${option.firstname} ${option.lastname}`}
                                    color="primary"
                                    sx={{ bgcolor: theme.palette.primary.light, margin: '2px' }}
                                />
                            ))
                        }
                    />
                        <Link href="/maid/pickup" passHref>
                            <Button
                                variant="outlined"
                                fullWidth sx={{ marginBottom: 2, marginTop: 2}}
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

export default DropdownPickUp;
