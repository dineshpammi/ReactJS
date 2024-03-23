// Login.js

import React, { useState } from 'react';
import './Login.css';
import { postRequest } from '../../services/axios';
import { urls } from '../../services/urls';
import { useNavigate } from "react-router";

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Perform login authentication here (e.g., API call, validation)
        if (username && password) {
            // Successful login
            setError('');
            try {
                let payload = { email: username, password: password }
                let response = await postRequest(urls.auth.login, payload)
                localStorage.setItem('authToken', response.data.token)
                alert('Login success');
                navigate("/dashboard")
            }
            catch (err) {
                console.log(err);
                alert(err.response?.data?.message);
            }
        } else {
            // Invalid credentials
            setError('Invalid username or password');
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <h2>Login</h2>
                {error && <div className="error-message">{error}</div>}
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="email"
                        id="username"
                        name="username"
                        value={username}
                        onChange={handleUsernameChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
