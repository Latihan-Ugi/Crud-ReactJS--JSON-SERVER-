import React, { Component } from 'react'

import Header from './blocks/Header'
import Service from './../services/Service'
import ListAlbum from './particles/ListAlbum'

class Album extends Component {
    constructor(props){
        super(props)
        const { match: { params } } = this.props;
        this.state = {
            id:params.id,
            name:params.user,
            loading:false,
            album:[],
        }
        this.service = new Service()
    }

    componentDidMount(){
        this.getData()
    }

    getData(){
        this.setState({
            loading:true
        })
        var endpoint = "";
        if(this.state.id === undefined){
            endpoint = "albums?_sort=id&_order=desc";
        } else {
            endpoint = 'albums?userId='+this.state.id+"&_sort=id&_order=desc";
        }

        fetch(this.service.pointing()+endpoint)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState({
                    loading:false,
                    album:data
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
                        <ListAlbum dataalbum={this.state.album} username={this.state.name}/>
                }
            </div>
        )
    }
}

export default Album