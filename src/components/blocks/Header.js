import React, { Component } from 'react'
// import { Link } from 'react-router-dom'

class Header extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return(
            // <div className="">
                <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: '#e3f2fd'}}>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a href="/" className="nav-link">User </a>
                            </li>
                            <li className="nav-item">
                                <a href="/album" className="nav-link">Album </a>
                            </li>
                            <li className="nav-item">
                                <a href="/allpost" className="nav-link">Post </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            // </div>
        )
    }
}

export default Header;