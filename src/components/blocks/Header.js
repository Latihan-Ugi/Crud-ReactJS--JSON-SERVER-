import React, { Component } from 'react'
import { Link } from 'react-router-dom'

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
                                <Link to="/" className="nav-link">User <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Album <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Post <span className="sr-only">(current)</span></Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            // </div>
        )
    }
}

export default Header;