import React, { useState } from 'react';
import * as firebase from 'firebase';
import config from '../firebase/firebase'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    async function handleSubmit(event) {
        event.preventDefault();

        if (!firebase.apps.length) {
            firebase.initializeApp(config);
          }
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
            alert('Login Success')
            setEmail('')
            setPassword('')
          } catch (error) {
            alert(error);
          }
    }

    return (
        <>
        <div>Log in</div>
            <form onSubmit={handleSubmit}>
                <input
                    name="email"
                    value={email}
                    type="text"
                    placeholder="email"
                    onChange={e => setEmail(e.target.value)}
                /><br />
                <input
                    name="password"
                    value={password}
                    type="password"
                    placeholder="Password"
                    onChange={e => setPassword(e.target.value)}
                /><br />
                <button type="submit" disabled={!validateForm()} >
                    Log In
                </button>
            </form>
        </>
    )
}

export default Login