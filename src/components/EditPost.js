import React, { Component } from 'react'

import Header from './blocks/Header'
import Service from './../services/Service'

class EditPost extends Component {
    constructor(props){
        super(props)
        const { match : { params }} = this.props;
        this.state = {
            loading:false,
            success:false,
            id:params.id,
            title:'',
            body:'',
            userId:0,
        }
        this.service = new Service()
    }

    componentDidMount(){
        this.getData();
    }

    handleInput = event => {
        this.setState({ 
            [event.target.name]: event.target.value
        });
    }

    getData(){
        this.setState({
            loading:true
        })
        fetch(this.service.pointing()+"posts/"+this.state.id)
            .then(response => response.json())
            .then(data => {
                // console.log(data)
                this.setState({
                    loading:false,
                    title:data.title,
                    body:data.body,
                    userId:data.userId
                })
            })
            .catch(error => console.log("Error: "+error))
    }

    editData(){
        this.setState({
            loading:true
        })
        fetch(this.service.pointing()+'posts/'+this.state.id, {
                method: 'PUT',
                body: JSON.stringify({
                    id:this.state.id,
                    title: this.state.title,
                    body: this.state.body,
                    userId: this.state.userId
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

    render(){
        return(
            <div className="container">
                <Header/>
                {
                    this.state.loading ?
                        <div>
                            <span>Loading..</span>
                        </div>    
                    :
                        <div className="row" style={{marginTop:15}}>
                            <div className="col-6">
                                <h3>Edit Post</h3>
                                <div className="form-group">
                                    <input type="text" className="form-control" name="title" value={this.state.title} onChange={this.handleInput}/>
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control" rows="5" name="body" defaultValue=
                                        {this.state.body} onChange={this.handleInput} >
                                    </textarea>
                                </div>
                                <div className="form-group">
                                    <div className="row">
                                        <div className="col-2">
                                            <input type="button" onClick={() => this.editData()} className={this.state.loading ? "btn btn-primary disabled" : "btn btn-primary"} value="Save"/>
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
                                                        Success your edit post
                                                    </div>
                                                : null
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                }
            </div>
        )
    }
}

export default EditPost