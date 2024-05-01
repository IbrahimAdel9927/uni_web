import React from 'react'
import { useState , useEffect} from 'react';
import { useLocation } from 'react-router-dom';

import Navbar from './Navbar';
import "./Dashbord.css";

const Dashbord = () => {

    const location = useLocation();
    const mydata = location.state;

    const[username,setName] = useState(" ");
    // const[userpassword,setPassword] = useState(" ");
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

        // let item = {email}
        var url = "http://localhost:8000/api/userloginnn/";
        url=url+mydata.id;
        // console.log(url);
        fetch(url,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body: JSON.stringify()
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

    const update = (event) => {
        event.preventDefault();

        var email = useremail;
        var id = userid;
        var credits = usercredits;
        var gender = usergender;
        var dept_id = userdeptid;
        var years_of_study = useryearofstudy;
        var birth_date = userbirthdate;
        var name = username;
        var GPA = usergpa;

        var url = "http://localhost:8000/api/userupdate/";
        url=url+mydata.id;


        let item = {email, id, credits, gender, dept_id, years_of_study, birth_date, name, GPA}

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
            console.log(data);
            if(data){
                alert("succ apdate");
            }
            else{
                alert("error");
            }
            
        })
    }


  return (
    <>
        <Navbar/>
        <div className="dashparent">
        <div className="formdashparent flx col-10">
            <form className="col-12 formdash" onSubmit={update}>
                <div className='flx col-12 row'>
                    <div className="col-lg-4 col-md-6 col-sm-12 pading">
                        <div className="mb-3">
                            <label className="form-label">Student ID</label>
                            <input type="text"
                            value={userid}
                            onChange={(e) => setId(e.target.value)}
                            className="form-control inputnotbyttom" readOnly required/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Department ID</label>
                            <input type="text"
                            value={userdeptid}
                            onChange={(e) => setDept_id(e.target.value)}
                            className="form-control inputnotbyttom" required/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">GPA</label>
                            <input type="text" 
                            value={usergpa}
                            onChange={(e) => setGPA(e.target.value)}
                            className="form-control" 
                            id="exampleInputPassword1" required/>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 pading">
                        <div className="mb-3">
                            <label className="form-label">Full Name</label>
                            <input 
                            type="text" 
                            value={username}
                            onChange={(e) => setName(e.target.value)}
                            className="form-control inputnotbyttom" required/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Birth Date</label>
                            <input 
                            type="date" 
                            value={userbirthdate}
                            onChange={(e) => setDate(e.target.value)}
                            className="form-control inputnotbyttom" required/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Gender</label>
                            <input 
                            type="text"
                            value={usergender}
                            onChange={(e) => setGender(e.target.value)}
                            className="form-control" id="exampleInputEmail1" 
                            aria-describedby="emailHelp" required/>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 pading">
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input 
                            type="email" 
                            value={useremail}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control inputnotbyttom" readOnly required/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Year of study</label>
                            <input type="text" 
                            value={useryearofstudy}
                            onChange={(e) => setYear(e.target.value)}
                            className="form-control inputnotbyttom" required/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Credits</label>
                            <input 
                            type="text" 
                            value={usercredits}
                            onChange={(e) => setCredits(e.target.value)}
                            className="form-control" required/>
                        </div>
                    </div>
                </div>
                <button 
                            type="submit" 
                            className="btn btn-primary">Save</button>
            </form>
        </div>
        </div>
    </>
  )
}

export default Dashbord
