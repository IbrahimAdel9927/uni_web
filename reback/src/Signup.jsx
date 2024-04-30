import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


import "./Log.css";


const Signup = () => {

    // const[firstName, setFirstName] = useState("");
    const[fullname, setName] = useState("");
    const[useremail, setEmail] = useState("");
    const[userpassword, setPassword] = useState("");
    const navigate = useNavigate();



    const saveForm = (event) => {
        event.preventDefault();

        console.warn(fullname+' '+useremail+' '+userpassword);

        var email = useremail;
        var name = fullname;
        var password = userpassword;

        let item = {name, email, password}

        fetch("http://localhost:8000/api/usersignupp",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body: JSON.stringify(item)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if(data){
                // alert("succseeful");
                navigate('/dashbord', { state: data});
            }
            else{
                alert("TRY AGAIN!");
            }
        })
    }

  return (
    <div className="row formrow">
        <div className="col-3"></div>
        <div className="formparent col-6">
            <form onSubmit={saveForm}>
                <div className="mb-3">
                    <label  className="form-label">Name</label>
                    <input 
                        type="text" 
                        value={fullname}
                        className="form-control" id="fullname" aria-describedby="emailHelp"
                        onChange={(e) => setName(e.target.value)} 
                         />
                </div>
                {/* <div className="mb-3">
                    <label  className="form-label">Last Name</label>
                    <input 
                        type="text" 
                        className="form-control" id="lastname" aria-describedby="emailHelp"
                        onChange={(e) => setLastName(e.target.value)} required />
                </div> */}
                <div className="mb-3">
                    <label  className="form-label">Email address</label>
                    <input 
                        type="useremail" 
                        value={useremail}
                        className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        onChange={(e) => setEmail(e.target.value)} 
                        required />
                </div>
                <div className="mb-3">
                    <label  className="form-label">Password</label>
                    <input 
                        type="password" 
                        value={userpassword}
                        className="form-control" id="exampleInputPassword1"
                        onChange={(e) => setPassword(e.target.value)} 
                        required />
                </div>
                <div className="buton">
                    <button 
                        type="submit" 
                        className="btn btn-primary">Sign Up</button>
                </div>
            </form>
        </div>
        <div className="col-3"></div>
    </div>
  )
}

export default Signup
