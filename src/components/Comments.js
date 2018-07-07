import React, { Component } from 'react'

import Service from './../services/Service'

// import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'

// const MySwal = withReactContent(Swal)

class Comments extends Component{
    constructor(props){
        super(props)
        this.state = {
            loadcomments:false,
            datacomments:[],
            error:false,
        }
        this.service = new Service();
    }

    componentDidMount(){
        this.getData();
    }

    getData(){
        this.setState({
            loadcomments:true
        })
        fetch(this.service.pointing()+"posts/"+this.props.idpost+"/comments")
            .then(response => response.json())
            .then(data => {
                if(data.lenght !== 0){
                    this.setState({
                        loadcomments:false,
                        datacomments:data
                    })
                } else {
                    this.setState({
                        loadcomments:false,
                        error:true
                    })
                }
                // console.log(data)
            })
            .catch(error => console.log("Error: "+ error))
    }

    // detele(id){
    //     console.log(id);
    //     fetch(this.service.pointing()+'comments/'+id, {
    //         method: 'DELETE'
    //         })
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data)
    //         })
    //         .catch(error => console.log(error))
    // }
    render(){
        return(
            <div className="col-12" style={{marginBottom:10}}>
                <div className="card">
                    <div className="card-body">
                        <div className="row" style={{marginBottom:15}}>
                            <div className="col-6">
                                <h5 className="left" style={{width:120}}>Comments: </h5>
                            </div>
                            {/* <div className="col-6">
                                <button type="button" className="btn btn-outline-primary" style={{float:'right'}}>Add</button>
                            </div> */}
                        </div>
                        <div className="row">

                        </div>
                        {
                            this.state.loadcomments ?
                                <div>
                                    <span>Load Comments..</span>
                                </div>    
                            :
                                this.state.error ?
                                    <div>           
                                        <h5>No Comment</h5>
                                    </div>    
                                :
                                    this.state.datacomments.map((value,i) =>
                                        <div key={i} style={{borderBottom:'1px solid #333',marginBottom:15}}>
                                            <div className="row">
                                                <div className="col-9">
                                                    <h4><i className="far fa-user"></i> {value.name}</h4>
                                                </div>
                                                {/* <div className="col-3">
                                                    <span>
                                                        <i className="far fa-edit btn" data-toggle="tooltip" data-placement="bottom" title="Edit Comment" style={{color:'orange'}}></i>
                                                    </span>
                                                    <span>
                                                        <i className="far fa-window-close btn" onClick={() => this.detele(value.id)}  data-toggle="tooltip" data-placement="bottom" title="Delete Comment"  style={{color:'red'}}></i>
                                                    </span>
                                                </div> */}
                                            </div>
                                            <span><i className="far fa-envelope"></i> {value.email}</span>
                                            <hr/>
                                            <p>{value.body}</p>
                                        </div>    
                                    )
                        }
                    </div>
                </div>  
            </div>    
        )
    }
}

export default Comments