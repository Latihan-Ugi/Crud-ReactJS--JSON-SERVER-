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
                <div  className="row" style={{marginTop:15}}>
                    <div className="col-8" style={{padding:0}}>                    
                        <h2 style={{textTransform:'capitalize'}}>{ this.props.username ? null : "All"} List Posts { this.props.username ? this.props.username.replace('-', ' ') : null}</h2>
                    </div>
                    <div className="col-4" style={{padding:0}}>
                        <Link to="/post/add" className="btn btn-outline-primary" style={{float:'right'}}>Add</Link>
                    </div>
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
                                    <Link to={"/detail/"+value.id} title="Detail Post">
                                        <i className="fas fa-external-link-alt"></i>
                                    </Link>
                                    <span>
                                        <i className="far fa-window-close btn" onClick={() => this.props.delete(value.id)} data-toggle="tooltip" data-placement="bottom" title="Delete Post"  style={{color:'red'}}></i>
                                    </span>
                                    <span>
                                        <Link to={"/edit/post/"+value.id} title="Edit Post">
                                            <i className="fas fa-edit" style={{color:'orange'}}></i>
                                        </Link>
                                    </span>
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