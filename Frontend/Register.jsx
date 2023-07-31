import React, { useState } from "react";

export const Register = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');

    const handleSubmit = (info) => {
        info.preventDefault();
        console.log(username);
    }

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">First Name</label>
            <input value={name} name="name" onChange={(info) => setName(info.target.value)} id="name" placeholder="John" />
            <label htmlFor="lastname">Last Name</label>
            <input value={lastname} name="lastname" onChange={(info) => setLastname(info.target.value)} id="lastname" placeholder="Doe" />
            <label htmlFor="username">Username</label>
            <input value={username} onChange={(info) => setUsername(info.target.value)}type="username" placeholder="Username" id="username" name="username" />
            <label htmlFor="password">Password</label>
            <input value={password} onChange={(info) => setPassword(info.target.value)} type="password" placeholder="Password" id="password" name="password" />
            <button type="submit">Create Account</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
    )
}