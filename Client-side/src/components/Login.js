import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";
export default function Login(props) {
    const [creds, setCreds] = useState({email:"", password:""});
    const navigate = useNavigate();


    const handleSubmit = async(e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email: creds.email,password: creds.password})
        });
        const json = await response.json();
        if (json.success){
            localStorage.setItem('token', json.authToken);
            props.showAlert("LoggedIn successfully", 'success')
            navigate("/")
        } else {
            props.showAlert("Failed to LogIn", 'danger')
        }
    }

    const onchange = (e) => {
        setCreds({...creds, [e.target.name]: e.target.value})
    }

    return (
        <div>
            <h2 className='mt-2'>Login to continue to iNoteBook</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group my-3">
                    <label htmlFor="email">Email address</label>
                    <input onChange={(e)=>onchange(e)} value={creds.email} type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder="Enter email"/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group my-3">
                    <label htmlFor="password">Password</label>
                    <input onChange={(e)=>onchange(e)} value={creds.password} type="password" className="form-control" id="password" name="password" placeholder="Password"/>
                </div>
                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
        </div>
    )
}
