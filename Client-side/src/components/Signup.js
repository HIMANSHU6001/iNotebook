import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function Signup(props) {
  const navigate = useNavigate();

  const [creds, setCreds] = useState({ name: '', email: '', password: '', ConfirmPassword: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (creds.password !== creds.ConfirmPassword) {
      alert("Password did not match");
    }
    else {
      const response = await fetch("http://localhost:5000/api/auth/createuser", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: creds.name,
          email: creds.email,
          password: creds.password
        })
      });
      const json = await response.json();
      if (json.success) {
        localStorage.setItem('token', json.authToken);
        props.showAlert("Signedup successfully", 'success')
        navigate("/")
      } else {
        props.showAlert("Failed to Signup", 'danger')
      }
    }

  }
  const onChange = (e) => {
    setCreds({ ...creds, [e.target.name]: e.target.value })
  }

  return (
    <div className="container ">
      <h2 className='mt-2'>Create an account to use iNotebook</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input onChange={onChange} type="text" value={creds.name} name='name' className="form-control" id="name" required minLength={3} />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input onChange={onChange} type="email" value={creds.email} name='email' className="form-control" id="email" aria-describedby="emailHelp" required />
          <div id="emailMsg" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input onChange={onChange} type="password" value={creds.password} name='password' className="form-control" id="password" required minLength={6} />
        </div>
        <div className="mb-3">
          <label htmlFor="ConfirmPassword" className="form-label">Confirm Password</label>
          <input onChange={onChange} type="password" value={creds.ConfirmPassword} name='ConfirmPassword' className="form-control" id="ConfirmPassword" required minLength={6} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}
