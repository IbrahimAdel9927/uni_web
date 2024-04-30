import React from 'react'
import { useState , useEffect} from 'react';
import { useLocation } from 'react-router-dom';

import "./Dashbord.css";

const Dashbord = () => {

    const location = useLocation();
    const mydata = location.state;

    const[username,setName] = useState(" ");
    const[userpassword,setPassword] = useState(" ");
    const[useremail, setEmail] = useState(" ");
    const[userid, setId] = useState(" ");
    const[useryearofstudy, setYear] = useState(" ");
    const[usergpa, setGPA] = useState(" ");
    const[userdeptid, setDept_id] = useState(" ");
    const[userbirthdate, setDate] = useState(" ");
    const[usergender, setGender] = useState(" ");
    const[usercredits, setCredits] = useState(" ");


    console.log(username+' '+useremail+' '+userid+' '+useryearofstudy+' '+usergpa+' '+userdeptid+' '+userbirthdate+' '+usergender+' '+usercredits);

    const save = () => {
        var email = useremail;
        var password = userpassword;

        let item = {email, password}
        var url = "http://localhost:8000/api/userloginnn/";
        url=url+mydata.id;
        console.log(url);
        fetch(url,{
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
            if(data){
                // alert("success")
                setName(data[0].name);
                setEmail(data[0].email);
                setGender(data[0].gender);
                setGPA(data[0].GPA);
                setCredits(data[0].credits);
                setDate(data[0].birth_date);
                setDept_id(data[0].dept_id);
                setYear(data[0].years_of_study);
                setId(data[0].id);
                
            }
            else{
                alert("TRY AGAIN!");
            }
        })
    };

    useEffect(() => {
        save(); 
    }, []); 


  return (
    <div className="dashparent">
      <div className="formdashparent flx col-10">
        <form className="col-12 formdash">
            <div className='flx col-12'>
                <div className="col-4 pading">
                    <div className="mb-3">
                        <label className="form-label">Full Name</label>
                        <input type="text"
                        value={username}
                        onChange={(e) => setName(e.target.value)}
                        className="form-control inputnotbyttom"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Department ID</label>
                        <input type="text"
                        value={userdeptid}
                        onChange={(e) => setDept_id(e.target.value)}
                        className="form-control inputnotbyttom" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">GPA</label>
                        <input type="text" 
                        value={usergpa}
                        onChange={(e) => setGPA(e.target.value)}
                        className="form-control" 
                        id="exampleInputPassword1"/>
                    </div>
                </div>
                <div className="col-4 pading">
                    <div className="mb-3">
                        <label className="form-label">Student ID</label>
                        <input 
                        type="text" 
                        value={userid}
                        onChange={(e) => setId(e.target.value)}
                        className="form-control inputnotbyttom"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Birth Date</label>
                        <input 
                        type="text" 
                        value={userbirthdate}
                        onChange={(e) => setDate(e.target.value)}
                        className="form-control inputnotbyttom"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Gender</label>
                        <input type="text"
                        value={usergender}
                        onChange={(e) => setGender(e.target.value)}
                        className="form-control" id="exampleInputEmail1" 
                        aria-describedby="emailHelp"/>
                    </div>
                </div>
                <div className="col-4 pading">
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input 
                        type="email" 
                        value={useremail}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control inputnotbyttom"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Year of study</label>
                        <input type="text" 
                        value={useryearofstudy}
                        onChange={(e) => setYear(e.target.value)}
                        className="form-control inputnotbyttom"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Credits</label>
                        <input type="text" 
                        value={usercredits}
                        onChange={(e) => setCredits(e.target.value)}
                        className="form-control"/>
                    </div>
                </div>
            </div>
            <button 
                        type="submit" 
                        className="btn btn-primary">Save</button>
        </form>
      </div>
    </div>
  )
}

export default Dashbord
