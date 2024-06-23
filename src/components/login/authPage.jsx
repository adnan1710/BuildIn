import React, { useState } from 'react';
import { Box, Tabs, Tab, Typography, } from '@mui/material';
import PropTypes from 'prop-types';

import './../../styles/login.css';
import SignupForm from './signup';
import LoginForm from './login';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

export default function AuthPage() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    function a11yProps(index) {
        return {
            id: `vertical-tab-${index}`,
            'aria-controls': `vertical-tabpanel-${index}`,
        };
    }

    return (
        <Box className="login-container">
            <Box
                sx={{
                    flexGrow: 1,
                    bgcolor: 'background.paper',
                    display: 'flex',
                    height: '100vh',
                    width: '100%',
                    alignItems: 'center',
                }}
                className="tab-panel"
            >
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="Login and Sign Up tabs"
                    className="tabs"
                    sx={{ borderRight: 1, borderColor: 'divider', height: '100%', width: '40vw' }}
                >
                    <Tab id="loginTabButton" label="Login" {...a11yProps(0)} />
                    <Tab id="signUpTabButton" label="Sign Up" {...a11yProps(1)} />
                </Tabs>
                <TabPanel value={value} index={0}>
                    <LoginForm />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <SignupForm />
                </TabPanel>
            </Box>
        </Box>
    );
}
