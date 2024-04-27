import React from 'react'
import { Link } from 'react-router-dom'

import "./Log.css";

const LogNavbar = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg mynav">
            <div className="container-fluid container">
                <div className='col-2'>
                    <Link className="navbar-brand" to="/">Navbar</Link>
                </div>
                <div className="col-4 collapse navbar-collapse" id="navbarSupportedContent">
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
                <div className='col-6'>
                    <div className='row'>
                        <div className='col-8'></div>
                        <div className="col-2">
                            <Link className="nav-link" to="/login">Login</Link>
                        </div>
                        <div className="col-2">
                            <Link className="nav-link" to="/signup">Sign Up</Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default LogNavbar
