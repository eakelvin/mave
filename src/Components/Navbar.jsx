import React from 'react'
import { BiFootball } from "react-icons/bi";
import { IoMail } from "react-icons/io5";
import { BsInstagram } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { Link } from 'react-router-dom';
import Searchbar from './Searchbar';

export default function Navbar() {
  return (
    <div>
        <div className="container-fluid bg-dark px-5">
            <div className="row gx-0">
                <div className="col-10 text-center text-lg-start mb-2 mb-lg-0">
                    <div className="d-inline-flex align-items-center" style={{height: "45px"}}>
                        <small className="me-3 text-light"><BiFootball size={25} />Mave Sports</small>
                        <small className="me-3 text-light"><IoMail size={20} />mavesports007@gmail.com</small>
                    </div>
                </div>
                <div className="col-2 text-center text-lg-end">
                    <div className="d-inline-flex align-items-center p-2" style={{height: '45px'}}>
                        <a href="https://twitter.com/mave_sports007?s=11&t=E31z5H1buzazahfcsKwzJg" 
                            className="btn btn-sm btn-outline-light btn-sm-square rounded-circle p-1">
                            <AiFillTwitterCircle size={25} />
                        </a>
                        {/* <a href="" className="btn btn-sm btn-outline-light btn-sm-square rounded-circle"><BsInstagram size={20} /></a> */}
                        <a href="" className="btn btn-sm btn-outline-light btn-sm-square rounded-circle p-1"><BsYoutube size={25} /></a>
                    </div>
                </div>
            </div>
        </div>

        <nav className="navbar bg-primary navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div className="container">
                <Link to='/' className="navbar-brand">
                    <img src='./logo/finallogo.jpg' width={60} height={60} />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                    <li className="nav-item">
                        <Link to='/' className="nav-link active" aria-current="page">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/football' className="nav-link">Football</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/basketball' className="nav-link">Basketball</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/livestream' className="nav-link">Live Stream</Link>
                    </li>
                    {/* <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                         Dropdown
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item">Action</a></li>
                            <li><a className="dropdown-item">Another action</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item">Something else here</a></li>
                        </ul>
                    </li> */}
                </ul>
                <Searchbar />
                <br />
                    <div className="btn-group ms-auto">
                        <a href="#" className="btn btn-primary active" aria-current="page">Sign Up</a>
                        <a href="#" className="btn btn-secondary">Login</a>
                    </div>
                </div>
            </div>
         </nav>
    </div>
  )
}
