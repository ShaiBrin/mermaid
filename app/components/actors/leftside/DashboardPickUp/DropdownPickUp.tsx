import React, { useState, useEffect, SyntheticEvent } from 'react';
import { Box, Grid, TextField, Chip, useTheme } from '@mui/material';
import Autocomplete from '@mui/lab/Autocomplete';


const DropdownPickUp: React.FC = () => {
    const [autocompleteOptions, setAutocompleteOptions] = useState<string[]>([]);
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
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
                // Handle error state or alert the user
            }
        };

        fetchMaids();
    }, []);

    const handleAutocompleteChange = (event: SyntheticEvent, newValue: string[]) => {
        setSelectedOptions(newValue);
    };

    const handleDeleteOption = (optionToDelete: string) => () => {
        setSelectedOptions(options => options.filter(option => option !== optionToDelete));
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Box p={2} sx={{ border: '1px solid #ccc', borderRadius: '4px' }}>
                    <Autocomplete
                        multiple
                        options={autocompleteOptions}
                        getOptionLabel={option => option}
                        filterSelectedOptions
                        onChange={handleAutocompleteChange}
                        value={selectedOptions}
                        renderInput={params => (
                            <TextField
                                {...params}
                                variant="outlined"
                                label="Suggestions"
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
                                    label={option}
                                    onDelete={handleDeleteOption(option)}
                                    color="primary"
                                    sx={{ bgcolor: theme.palette.primary.light, margin: '2px' }}
                                />
                            ))
                        }
                    />
                </Box>
            </Grid>
        </Grid>
    );
};

export default DropdownPickUp;
