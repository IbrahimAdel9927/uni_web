import React from 'react'
import { Link } from 'react-router-dom'
import logo from './images/logo_uni.png';


import "./LogNavbar.css";

const LogNavbar = () => {
  return (
    <>
        <nav className="col-12 navbar navbar-expand-lg mynav">
            <div className="container-fluid container navparent">
                <div className='nlogo '>
                {/* col-4 */}
                    <Link className="navbar-brand" to="/">
                        <div className="nlogo">
                            <img className='logo' src={logo} alt="uni" width={50} />
                            <div className='nav-me-text' to="/">Port Said<br/>University</div>
                        </div>
                    </Link>
                </div>
                <div className="col-4 row " id="navbarSupportedContent">
                {/* col-4 */}
                    <div className="col-4">
                        <Link className="nav-link link" to="/">Home</Link>
                    </div>
                    <div className="col-4">
                        <Link className="nav-link link" to="/">Link</Link>
                    </div>
                    <div className="col-4">
                        <Link className="nav-link link" to="/">Disabled</Link>
                    </div>
                </div>
                <div className=''>
                {/* col-4 */}
                    <div className=''>
                            <Link className="nav-link link" to="/signup">Logout</Link>
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default LogNavbar
