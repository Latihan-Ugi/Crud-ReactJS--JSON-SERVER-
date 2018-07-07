import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class ListPhoto extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    componentDidMount(){
        
    }

    render(){
        return(
            <div className="container">
                <div className="row" style={{marginTop:15}}>
                    <div className="col-8" style={{padding:0}}>                    
                        <h2 style={{textTransform:'capitalize'}}>List Photos</h2>
                    </div> 
                    <div className="clearfix"></div>
                    <div className="row">
                        {
                            this.state.loading ?
                                <div>
                                    <span>Loading..</span>
                                </div>    
                            :
                                this.props.dataphoto.map((value,i) =>
                                    <div className="col-3" key={i} style={{marginTop:10}}>
                                        <div className="card">
                                            <img className="card-img-top" src={value.thumbnailUrl} alt="Card image cap"/>
                                            <div className="card-body">
                                                <h5 className="card-title">{value.title}</h5>
                                            </div>
                                        </div>
                                    </div>   
                                )
                        }
                    </div>    
                </div>        
            </div>    
        )
    }
}

export default ListPhoto