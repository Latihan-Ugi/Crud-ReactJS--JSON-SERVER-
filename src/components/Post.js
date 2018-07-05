import React, { Component } from 'react'

import Header from './blocks/Header'

class Post extends Component {
    constructor(props){
        super(props)
        const { match: { params } } = this.props;
        this.state = {
            id:params.id
        }
    }
    componentDidMount(){
        console.log(this.state.id);
    }
    render(){
        return(
            <div className="container">
                <Header/>
            </div>
        )
    }
}

export default Post