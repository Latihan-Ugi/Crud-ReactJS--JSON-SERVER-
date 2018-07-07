import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import Header from './blocks/Header'
import Service from './../services/Service'
import ListUserOPT from './particles/ListUserOPT'

class AddPost extends Component{
    constructor(props){
        super(props)
        this.state = {
            loading:false,
            title:'',
            body:'',
            userId:0,
            success:false,
        }
        this.service = new Service();
    }

    componentDidMount(){

    }

    handleInput = event => {
        this.setState({ 
            [event.target.name]: event.target.value
        });
    }

    pushData(){
        this.setState({
            loading:true
        })
        fetch(this.service.pointing()+'posts', {
                method: 'POST',
                body: JSON.stringify({
                    title: this.state.title,
                    body: this.state.body,
                    userId: parseInt(this.state.userId)
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
            .then(response => response.json())
            .then(data => {
                this.setState({
                    loading:false,
                    success:true
                })
                window.location.replace("/allpost")
            })
            .catch(error => console.log(error))
    }

    getData(){
        this.setState({
            loading:true
        })
        var endpoint = "posts";

        fetch(this.service.pointing()+endpoint)
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => console.log("Error: "+error))
    }

    render() {
        return(
            <div className="container">
                <Header/>
                <div className="row" style={{marginTop:15}}>
                    <div className="col-6">
                        <h3>Add Post</h3>
                        <div className="form-group">
                            <input type="text" name="title" className="form-control" onChange={this.handleInput} placeholder="Title.."/>
                        </div>
                        <ListUserOPT userId={this.handleInput}/>
                        <div className="form-group">
                            <textarea className="form-control" rows="5" name="body" onChange={this.handleInput} ></textarea>
                        </div>
                        <div className="form-group">
                            <div className="row">
                                <div className="col-2">
                                    <input type="button" onClick={() => this.pushData()} className={this.state.loading ? "btn btn-primary disabled" : "btn btn-primary"} value="Save"/>
                                </div>
                                <div className="col-10">
                                    {
                                        this.state.loading ?
                                            <i className="fa fa-spinner fa-pulse"></i>
                                        : null
                                    }
                                    {
                                        this.state.success ?
                                            <div className="alert alert-primary" role="alert">
                                                Success your add post
                                            </div>
                                        : null
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddPost