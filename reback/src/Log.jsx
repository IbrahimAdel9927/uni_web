import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// import { Route, Redirect } from "react-router-dom";

import "./Log.css";

const Log = () => {

    const[useremail, setEmail] = useState("");
    const[userpassword, setPassword] = useState("");
    const navigate = useNavigate();


    const login = (event) => {
        event.preventDefault();
        // console.warn(useremail+' '+userpassword);

        var email = useremail;
        var password = userpassword;

        let item = {email, password}

        fetch("http://localhost:8000/api/userloginn",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body: JSON.stringify(item)
        })
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            // console.log(data.token.id);
            // console.log(data.token.name);
            // console.log(data.token.email);
            if(data){
                // this.history.push("/dashbord");
                navigate('/dashbord', { state: data});
            }
            else{
                alert("TRY AGAIN!");
                console.log("1");
            }
            
        })
    }

    return (
        <>
            <div className='col-12 row formrow'>
                <div className="col-3"></div>
                <div className="formparent col-6">
            <form onSubmit={login}>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input 
                        type="email" 
                        value={useremail}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        required/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input 
                        type="password" 
                        value={userpassword}
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-control" id="exampleInputPassword1"
                        required/>
                </div>
                <div className="buton">
                    <button 
                        type="submit" 
                        className="btn btn-primary">Login</button>
                </div>
            </form>
        </div>
        <div className="col-3"></div>
            </div>
    </>
  )
}

export default Log

