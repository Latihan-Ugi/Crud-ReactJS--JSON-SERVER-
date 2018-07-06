import React, { Component } from 'react'

import Header from './blocks/Header'
import Service from './../services/Service'

import ListPost from './particles/ListPost'

class Post extends Component {
    constructor(props){
        super(props)
        const { match: { params } } = this.props;
        this.state = {
            id:params.id,
            name:params.user,
            loading:false,
            update:true,
            data:[]
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
        var endpoint = "";
        if(this.state.id === undefined){
            endpoint = "posts";
        } else {
            endpoint = 'posts?userId='+this.state.id;
        }

        fetch(this.service.pointing()+endpoint)
            .then(response => response.json())
            .then(data => {
                // console.log(data)
                this.setState({
                    loading:false,
                    data:data
                })
            })
            .catch(error => console.log("Error: "+error))
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
                        <ListPost datapost={this.state.data} username={this.state.name}/>
                }
            </div>
        )
    }
}

export default Post