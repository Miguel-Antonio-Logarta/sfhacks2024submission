"use client"
import React, { useState } from 'react';
import Navbar from '../component/navbar';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Link from 'next/link';

// Custom styling for image preview
const ImagePreview = styled('div')({
    display: 'flex',
    flexWrap: 'wrap',
    '& img': {
        width: 100,
        height: 100,
        objectFit: 'cover',
        marginRight: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
});

export default function Offering() {
    const [images, setImages] = useState([]);
    const [price, setPrice] = useState('');

    // Function to generate a random image URL
    const getRandomImageUrl = () => {
        return `https://www.parking.net/upload/about-parking/iStock-519196006.jpg`; // Add a random query parameter to force image reload
    };

    const handleFileChange = (event) => {
        const files = Array.from(event.target.files);
        setImages([...images, ...files.map((file) => URL.createObjectURL(file))]);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Process form submission here
        console.log('Form submitted!');
    };

    return (
        <div>
            <Navbar />
            <Grid container component="main" sx={{ height: '100vh' }}>
            <Grid
    item
    xs={false}
    sm={4}
    md={7}
    sx={{
        backgroundImage: `url(${getRandomImageUrl()})`, // Use a function to generate a random image URL
        backgroundRepeat: 'no-repeat',
        backgroundColor: (t) =>
            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }}
/>
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Typography component="h1" variant="h5">
                            Fill out some info!
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1, width: '100%' }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="numberOfParkingSpots"
                                label="Number of Parking Spots"
                                name="numberOfParkingSpots"
                                type="number"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="price"
                                label="Price per Hour"
                                name="price"
                                type="number"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            />
                            <Box sx={{ mt: 3 }}>
                                <Typography variant="subtitle1">Upload Images</Typography>
                                <input
                                    accept="image/*"
                                    style={{ display: 'none' }}
                                    id="contained-button-file"
                                    multiple
                                    type="file"
                                    onChange={handleFileChange}
                                />
                                <label htmlFor="contained-button-file">
                                    <Button variant="contained" component="span">
                                        Choose Files
                                    </Button>
                                </label>
                                <ImagePreview>
                                    {images.map((image, index) => (
                                        <img key={index} src={image} alt={`Image ${index}`} />
                                    ))}
                                    </ImagePreview>
                                </Box>
                                <Link href="/">
                                <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Submit
                            </Button>
                        </Link>
                            </Box>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
}
