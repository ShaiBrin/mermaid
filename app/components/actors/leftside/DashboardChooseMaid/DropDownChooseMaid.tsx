import React, { useState, useEffect } from 'react';
import {
    Grid, Card, CardHeader, Avatar, Typography, Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Rating
} from '@mui/material';
import Link from 'next/link';


interface MaidDetails {
    firstname: string;
    lastname: string;
    rating: number;
    price: number;
    experience: string;
}

const DropDownChooseMaid: React.FC = () => {
    const [maids, setMaids] = useState<MaidDetails[]>([]);
    const [selectedMaid, setSelectedMaid] = useState<MaidDetails | null>(null);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const fetchMaids = async () => {
            try {
                const res = await fetch(`http://localhost:3000/api/maids/get-maids`);
                if (!res.ok) {
                    throw new Error('Failed to fetch maids');
                }
                const data = await res.json();
                if (data && data.maids && Array.isArray(data.maids.rows)) {
                    const maidDetails = data.maids.rows.map((maid: any) => ({
                        firstname: maid.first_name,
                        lastname: maid.last_name,
                        rating: maid.rating || 0,
                        price: maid.price || 0,
                        experience: maid.experience_level || '',
                    }));
                    setMaids(maidDetails);
                } else {
                    throw new Error('Invalid maids data structure');
                }
            } catch (error) {
                console.error('Error fetching maids:', error);
            }
        };

        fetchMaids();
    }, []);

    const handleCardClick = (maid: MaidDetails) => {
        setSelectedMaid(maid);
    };

    const handleReserveClick = () => {
        if (selectedMaid) {
            setOpen(true);
        }
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
                padding: 2, // Optional padding to prevent edge collision
            }}
        >
            <Grid container spacing={1} sx={{ flexGrow: 1 }}>
                {maids.map((maid, index) => (
                    <Grid item key={index} xs={12}>
                        <Card
                            sx={{
                                cursor: 'pointer',
                                border: selectedMaid === maid ? '2px solid blue' : 'none',
                                marginBottom: 0, // Minimal space between cards
                                boxShadow: 'none', // Optional: remove card shadow if it contributes to the space
                            }}
                            onClick={() => handleCardClick(maid)}
                        >
                            <CardHeader
                                avatar={
                                    <Avatar
                                        src="https://nextui.org/avatars/avatar-1.png"
                                        alt={`${maid.firstname} ${maid.lastname}`}
                                        sx={{ width: 56, height: 56 }}
                                    />
                                }
                                title={
                                    <Box display="flex" justifyContent="space-between" alignItems="center">
                                        <Typography variant="h6">{`${maid.firstname} ${maid.lastname}`}</Typography>
                                        <Typography variant="h6">{`$${maid.price}`}</Typography>
                                    </Box>
                                }
                                subheader={
                                    <Box display="flex" alignItems="center">
                                        <Typography variant="body2" color="textSecondary" sx={{ marginRight: 1 }}>
                                            Rating:
                                        </Typography>
                                        <Rating value={maid.rating} precision={0.5} readOnly />
                                    </Box>
                                }
                                sx={{ padding: 1 }} // Adjust padding inside CardHeader if needed
                            />
                        </Card>
                    </Grid>
                ))}
            </Grid>

            <Box
                sx={{
                    marginTop: 'auto',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    paddingTop: 2, // Add space if necessary
                }}
            >
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{ width: '100%', maxWidth: '500px' }}
                        onClick={handleReserveClick}
                        disabled={!selectedMaid}
                    >
                        Reserve
                    </Button>

            </Box>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Maid Reservation</DialogTitle>
                <DialogContent>
                    {selectedMaid && (
                        <Box>
                            <Typography variant="h6">
                                {`${selectedMaid.firstname} ${selectedMaid.lastname}`}
                            </Typography>
                            <Typography variant="body1">{`Price: $${selectedMaid.price}`}</Typography>
                            <Typography variant="body1">
                                Rating:
                                <Rating value={selectedMaid.rating} precision={0.5} readOnly sx={{ marginLeft: 1 }} />
                            </Typography>
                        </Box>
                    )}
                </DialogContent>
                <DialogActions
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between', // Align buttons on the left and right
                    }}
                >
                    <Button onClick={handleClose} color="primary">
                        Close
                    </Button>
                    <Link href="/maid/book" passHref>
                        <Button color="primary">
                            Confirm
                        </Button>
                    </Link>
                </DialogActions>    
            </Dialog>
        </Box>
    );
};

export default DropDownChooseMaid;
