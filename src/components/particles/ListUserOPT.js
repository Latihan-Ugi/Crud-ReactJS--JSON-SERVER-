import React, { Component } from 'react'

import Service from './../../services/Service'

class ListUserOPT extends Component {
    constructor(props){
        super(props)
        this.state = {
            loading:false,
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
        fetch(this.service.pointing()+'users')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    loading:false,
                    data:data
                })
            })
            .catch(error => console.log(error))
    }

    render(){
        return(
            <div className="form-group">
                <label>List Users</label>
                <select className="form-control" name="userId" onChange={this.props.userId}>
                    {
                        this.state.loading ?
                            <option>
                                Load List Users..
                            </option>
                        :
                            this.state.data.map((value,i) =>
                                <option key={i} value={value.id}>
                                    {value.name}
                                </option>
                            )
                    }
                </select>
            </div>
        )
    }
}

export default ListUserOPT