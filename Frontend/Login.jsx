import React, { useState } from "react";

export const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (name) => {
        name.preventDefault();
        console.log(username);
    }

    return (
        <div className="auth-form-container">
            <h1>WELCOME TO JOHNSLIST</h1>
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input value={username} onChange={(name) => setUsername(name.target.value)}type="username" placeholder="Username" id="username" name="username" />
                <label htmlFor="password">Password</label>
                <input value={password} onChange={(name) => setPassword(name.target.value)} type="password" placeholder="Password" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    )
}