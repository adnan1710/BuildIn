import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import firebaseConfig from './firebaseConfig';
import { Box, FormControl, Input, InputLabel, Button, Stack, Tabs, Tab, Typography, } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Navigate, useHistory } from 'react-router-dom';

import './../landing/home'

export default function LoginForm({loginStatus, handleLogout, handleLogin}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const auth = getAuth();

    const handleLoginClick = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log('User logged in successfully!');
            handleLogin();
            window.location.assign("/home");
        } catch (error) {
            console.error('Login error:', error.message);
            handleLogout();
            document.getElementById('loginFailureToast').style.display = 'block';
        }
    };

    return (
        <Box className="login-form">
            <Stack spacing={2} direction="column" alignItems="center" className="login-form-stack">
                <Typography
                    id="loginFailureToast"
                    sx={{backgroundColor:'#EF0000', color: 'white', borderRadius: '5px', padding: '5px', display: 'none'}}
                >Email or password incorrect!!</Typography>
                <img src="https://dynamic.design.com/preview/logodraft/a3991598-6499-4367-945b-4d79862246d0/image/large.png" alt="logo" height={'100em'}/>
                <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                    <InputLabel htmlFor="email-field">Email</InputLabel>
                    <Input
                        id="email-field"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </FormControl>
                <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                    <InputLabel htmlFor="password-field">Password</InputLabel>
                    <Input
                        id="password-field"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </FormControl>
                <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                    <Button variant="contained" className="login-button" onClick={handleLoginClick}>
                        Login
                    </Button>
                </FormControl>
                <Stack direction="row">
                    <Button startIcon={<GoogleIcon />} className="google-login"></Button>
                    <Button startIcon={<FacebookIcon />} className="facebook-login"></Button>
                </Stack>
            </Stack>
        </Box>
    );
}