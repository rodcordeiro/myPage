import React, { useState } from 'react';

import api from '../../utils/api'

import './style.css'

export default function LoginPage(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    async function handleLogin(e){
        e.preventDefault();
        let userObj = {
            username,
            password
        }
        if(!username || !password){
            alert("You must provide the username and Password")
        }
        await api.post('/users/auth',userObj)
        .then(response=>{
            console.log(response.data)
        })
        .catch(err=>{
            throw new Error(err)
        })
    }

    return (
        <div className="loginContainer">
            <form method="post" onSubmit={(e)=>handleLogin(e)}>
                <input 
                    type='text'
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}
                    placeholder="Username"
                />
                <input 
                    type='password'
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    placeholder="Password"
                />
                <button>Login</button>

            </form>
        </div>
    )
}