import React, { useState, useEffect, SyntheticEvent } from 'react';
import { Box, Grid, TextField, Chip, useTheme, Modal, Typography, Button } from '@mui/material';
import Autocomplete from '@mui/lab/Autocomplete';

const DropdownPickUp: React.FC = () => {
    const [autocompleteOptions, setAutocompleteOptions] = useState<string[]>([]);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
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
                    const maidNames = data.maids.rows.map((maid: any) => `${maid.firstname} ${maid.lastname}`);
                    setAutocompleteOptions(maidNames);
                } else {
                    throw new Error('Invalid maids data structure');
                }
            } catch (error) {
                console.error('Error fetching maids:', error);
            }
        };

        fetchMaids();
    }, []);

    const handleAutocompleteChange = (event: SyntheticEvent, newValue: string | null) => {
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
                        getOptionLabel={option => option}
                        onChange={handleAutocompleteChange}
                        value={selectedOption}
                        renderInput={params => (
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
                                    // key={option} // Add a unique key prop
                                    label={option}
                                    color="primary"
                                    sx={{ bgcolor: theme.palette.primary.light, margin: '2px' }}
                                />
                            ))
                        }
                    />
                </Box>
            </Grid>
            {/* Modal for displaying maid details */}
            <Modal
                open={isModalOpen}
                onClose={handleCloseModal}
                aria-labelledby="maid-details-modal-title"
                aria-describedby="maid-details-modal-description"
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Box sx={{ bgcolor: 'background.paper', boxShadow: 24, p: 4, borderRadius: '8px' }}>
                    <Typography variant="h6" id="maid-details-modal-title" gutterBottom>
                        Maid Details
                    </Typography>
                    <Typography id="maid-details-modal-description" gutterBottom>
                        Display maid details here based on the selected option: {selectedOption}
                    </Typography>
                    <Button onClick={handleCloseModal} variant="contained" color="primary">
                        Close
                    </Button>
                </Box>
            </Modal>
        </Grid>
    );
};

export default DropdownPickUp;
