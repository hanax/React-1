import React from 'react';
import { Link } from 'react-router';

const NavBar = () => {
    return (
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <Link to="/" className ="navbar-brand">
                    Truckxi Project
                    </Link>
                </div>
                <div className="collapse navbar-collapse"  id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav">
                        <li >
                           <Link to="/users">Users</Link>
                        </li>
                        <li >
                           <Link to="/posts">Posts</Link>
                        </li >
                    </ul >
                </div >
            </div >
        </nav >
    )
}

export default NavBar;