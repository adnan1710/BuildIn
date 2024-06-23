import { Box, FormControl, Input, InputLabel, Button, Stack, Tabs, Tab, Typography, } from '@mui/material';

export default function HomePage() {
    return (
        <Box className="homeRoot">
            <Typography variant="h2">Home Page</Typography>
            <Typography variant="body1">
                Welcome to the home page! You can add your content here.
            </Typography>
        </Box>
    );
}