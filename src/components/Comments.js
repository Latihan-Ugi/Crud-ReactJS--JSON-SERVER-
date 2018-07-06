import React, { Component } from 'react'

import Service from './../services/Service'

class Comments extends Component{
    constructor(props){
        super(props)
        this.state = {
            loadcomments:false,
            datacomments:[]
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
        fetch(this.service.pointing()+"comments?postId="+this.props.idpost)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    loadcomments:false,
                    datacomments:data
                })
                // console.log(data)
            })
            .catch(error => console.log("Error: "+ error))
    }
    render(){
        return(
            <div className="col-12" style={{marginBottom:10}}>
                <div className="card">
                    <div className="card-body">
                        <div className="row" style={{marginBottom:15}}>
                            <div className="col-6">
                                <h5 className="left" style={{width:120}}>Comments: </h5>
                            </div>
                            <div className="col-6">
                                <button type="button" class="btn btn-outline-primary" style={{float:'right'}}>Add</button>
                            </div>
                        </div>
                        <div className="row">
                            
                        </div>
                        {
                            this.state.loadcomments ?
                                <div>
                                    <span>Load Comments..</span>
                                </div>    
                            :
                                this.state.datacomments.map((value,i) =>
                                    <div key={i} style={{borderBottom:'1px solid #333',marginBottom:15}}>
                                        <h4><i className="far fa-user"></i> {value.name}</h4>
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