import React, { Component } from 'react'

import Header from './blocks/Header'
import Comments from './Comments'
import Service from './../services/Service'

class Detail extends Component{
    constructor(props){
        super(props)
        const { match: { params }} = this.props;
        this.state = {
            id:params.id,
            loading:false,
            loaduser:false,
            username:'',
            data:{}
        }
        this.service = new Service();
    }

    componentDidMount(){
        this.getData();
    }

    getData(){
        this.setState({
            loading:true
        })
        fetch(this.service.pointing()+"posts/"+this.state.id)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    loading:false,
                    data:{
                        id:data.id,
                        userId:data.userId,
                        title:data.title,
                        body:data.body
                    }
                })
                this.getDataUser();
            })
            .catch(error => console.log("Error: "+ error))
    }

    getDataUser(){
        this.setState({
            loaduser:true
        })
        fetch(this.service.pointing()+"users/"+this.state.data.userId)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    loaduser:false,
                    username:data.name
                })
                // console.log(data)
            })
            .catch(error => console.log("Error: "+ error))
    }

    render() {
        const { data } = this.state;
        return(
            <div className="container">
                <Header/>
                <h4 style={{marginTop:15}}>Detail Posts</h4>
                {
                    this.state.loading ?
                        <div>
                            <span>Loading..</span>
                        </div>    
                    :
                        <div  className="container">
                            <div className="row">
                                <div className="col-7" style={{padding:0}}>
                                    <div className="card">
                                        <div className="card-body">
                                            <h3>{data.title}</h3>
                                            <span>
                                                <div className="row" style={{marginBottom:15}}>
                                                    <div className="col-1" style={{paddingRight:0}}>
                                                        <i className="far fa-user"></i>
                                                    </div>
                                                    <div className="col-10" style={{paddingLeft:0}}>
                                                        {
                                                            this.state.loaduser ?
                                                                <span>Loading..</span>
                                                            : 
                                                                <div>
                                                                    {this.state.username}
                                                                </div>
                                                        }
                                                    </div>
                                                </div>
                                            </span>
                                            <p>{data.body}</p>
                                        </div>
                                        <Comments idpost={data.id}/>  
                                    </div>  
                                </div>
                            </div>
                        </div>
                }
            </div>
        )
    }
}

export default Detail