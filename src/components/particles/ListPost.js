import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ListPost extends Component {
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
                    <h2 style={{marginTop:15,textTransform:'capitalize'}}>List Posts { this.props.username ? this.props.username.replace('-', ' ') : null}</h2>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <td>No</td>
                                <td>Title</td>
                                <td>Action</td>
                            </tr>    
                        </thead>
                        <tbody>     
                    {
                        this.props.datapost.map((value,i) =>
                            <tr key={i}>
                                <td>{i+1}</td>
                                <td>{value.title}</td>
                                <td>
                                    <Link to={"/detail/"+value.id}>
                                        Detail
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

export default ListPost