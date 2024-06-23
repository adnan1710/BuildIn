// SignupForm.jsx

import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'; // Import Firebase auth functions
import firebaseConfig from './firebaseConfig'; // Adjust the path as needed

const SignupForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const auth = getAuth(); // Initialize Firebase auth

    const handleSignup = async () => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            // You can add additional logic here (e.g., storing user data in Firestore)
            console.log('User created successfully!');
        } catch (error) {
            console.error('Signup error:', error.message);
        }
    };

    return (
        <div className="signup-form">
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleSignup}>Sign Up</button>
        </div>
    );
};

export default SignupForm;
