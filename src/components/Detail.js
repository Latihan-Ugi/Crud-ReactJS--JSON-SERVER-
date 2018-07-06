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
                        title:data.title,
                        body:data.body
                    }
                })
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