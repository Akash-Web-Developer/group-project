import React from 'react';
import logo from '../Images/logo.png'
import './Navbar.css'
const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg">
                <a class="navbar-brand" href="#">
                    <img class="img-fluid logo" src={logo} alt="" />
                </a>
                
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse menu" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a style={{color: 'white'}} class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item active">
                            <a style={{color: 'white'}} class="nav-link" href="#">Service <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item active">
                            <a style={{color: 'white'}} class="nav-link" href="#">Contact <span class="sr-only">(current)</span></a>
                        </li>
                        <button type="button" class="btn btn login-btn">Log In</button>

                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-dark login-btn my-2 my-sm-0" type="submit"><h6>Search</h6></button>
                    </form>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;