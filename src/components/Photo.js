import React, { Component } from 'react'

import Header from './blocks/Header'
import Service from './../services/Service'
import ListPhoto from './particles/ListPhoto'

class Photo extends Component {
    constructor(props){
        super(props)
        const { match: { params } } = this.props;
        this.state = {
            id:params.id,
            loading:false,
            photo:[],
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
        fetch(this.service.pointing()+"albums/"+this.state.id+"/photos")
            .then(response => response.json())
            .then(data => {
                // console.log(data)
                this.setState({
                    loading:false,
                    photo:data
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
                        <ListPhoto dataphoto={this.state.photo}/>
                }
            </div>
        )
    }
}

export default Photo