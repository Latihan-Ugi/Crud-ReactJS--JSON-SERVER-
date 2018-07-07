import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class ListAlbum extends Component {
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
                        <h2 style={{textTransform:'capitalize'}}>{ this.props.username ? null : "All"} List Albums { this.props.username ? this.props.username.replace('-', ' ') : null}</h2>
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
                                this.props.dataalbum.map((value,i) =>
                                    <tr key={i}>
                                        <td>{i+1}</td>
                                        <td>{value.title}</td>
                                        <td>
                                            <Link to={"/albums/"+value.id+"/photos"} title="Detail Post">
                                                See photos
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

export default ListAlbum