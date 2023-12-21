import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';

function Login() {
    const [account, setAccount] = useState('');
    const [password, setPassword] = useState('');
    function handleSubmit(event) {
        event.preventDefault();
        axios.post('auth/login', {email: account, password})
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
  return (
    <div className='d-flex vh-100 justify-content-center align-items-center bg-primary'>
        <div className='p-3 bg-white w-25'>
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor='account'>Account</label>
                    <input type='account' placeholder='Account' className='form-control' 
                    onChange={a => setAccount(a.target.value)}/>
                </div>
                <div className='mb-3'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' placeholder='Password' className='form-control' 
                    onChange={a => setPassword(a.target.value)}/>
                </div>
                <button className='btn btn-success'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login