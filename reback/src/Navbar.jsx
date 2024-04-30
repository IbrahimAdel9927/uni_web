import React from 'react'
import { Link } from 'react-router-dom'
import logo from './images/logo_uni.png';


import "./LogNavbar.css";

const LogNavbar = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg mynav">
            <div className="container-fluid container">
                <div className='flx col-3'>
                    <Link className="navbar-brand" to="/">
                        <div className="flx nlogo">
                            <img className='logo' src={logo} alt="uni" width={50} />
                            <div className='nav-me-text' to="/">Port Said<br/>University</div>
                        </div>
                    </Link>
                </div>
                <div className="col-4 row " id="navbarSupportedContent">
                    <div className="col-4">
                        <Link className="nav-link" to="/">Home</Link>
                    </div>
                    <div className="col-4">
                        <Link className="nav-link" to="/">Link</Link>
                    </div>
                    <div className="col-4">
                        <Link className="nav-link" to="/">Disabled</Link>
                    </div>
                </div>
                <div className='col-5'>
                    <div className='row'>
                        <div className='col-8'></div>
                        <div className="col-2">
                            <Link className="nav-link" to="/signup">Logout</Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default LogNavbar
