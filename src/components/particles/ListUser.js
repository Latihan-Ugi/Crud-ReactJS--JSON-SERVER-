import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ListUser extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    componentDidMount(){

    }
    
    render(){
        return(
            <div  className="container">
                <div  className="row">
                    <h3 style={{marginTop:15}}>List Of User</h3>
                    <table className="table table-bordered">
                        <thead>
                        <tr>
                            <td>No</td>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Phone</td>
                            <td>Website</td>
                            <td>Address</td>
                            <td>Action</td>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.props.datauser.map((value,i) =>
                                <tr key={i}>
                                    <td>{i+1}</td>
                                    <td>{value.name}</td>
                                    <td>{value.email}</td>
                                    <td>{value.phone}</td>
                                    <td>{value.website}</td>
                                    <td>{value.address.street}</td>
                                    <td>
                                        <Link to={"/post/user/"+value.id}>
                                            Post
                                        </Link>
                                        &nbsp;|&nbsp;
                                        <Link to={"/album/user/"+value.id}>
                                            Album
                                        </Link>
                                    </td>
                                </tr>    
                            )
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListUser