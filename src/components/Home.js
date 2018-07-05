import React, { Component } from 'react'
// import axios from 'axios'

import Header from './blocks/Header'

import ListUser from './particles/ListUser'

import Service from './../services/Service';

class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
            loading:false,
            user:[],
        }
        this.service = new Service();
    }

    componentDidMount(){
        this.getUsers();
    }

    getUsers() {
        this.setState({
            loading:true
        });
        fetch(this.service.pointing()+'users')
            .then(response => response.json())
            .then(value => {
                // console.log(value);
                this.setState({
                    user: value,
                    loading:false
                })
            })
            .catch(error => console.log('Error: '+ error))
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
                    <ListUser datauser={this.state.user} />
                }
            </div>
        )
    }
}

export default Home;