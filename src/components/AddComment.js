import React, { Component } from 'react'

class AddComment extends Component {
    constructor(props){
        super(props)
        this.state = {

        }

    }

    componentDidMount(){

    }

    render(){
        return(
            <div className="card" style={{marginBottom:15}}>
                <div className="card-body">
                    <div className="row">
                        <div className="col-10">
                            <h5 className="card-title">Add Comment</h5>
                        </div>
                        <div className="col-2">
                            <span>
                                <i className="far fa-window-close btn" onClick={() => this.props.closeAdd()} data-toggle="tooltip" data-placement="bottom" title="Cancel"  style={{color:'red'}}></i>
                            </span>
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="text" name="name" className="form-control" value={this.props.valueInput.name} placeholder="Name.." onChange={this.props.handleInput}/>
                    </div>
                    <div className="form-group">
                        <input type="email" name="email" className="form-control" value={this.props.valueInput.email} placeholder="Email.." onChange={this.props.handleInput}/>
                    </div>
                    <div className="form-group">
                        <textarea name="body" rows="4" className="form-control"  value={this.props.valueInput.body} onChange={this.props.handleInput}>
                        </textarea>
                    </div>
                    <div className="form-group">
                        <div className="row">
                            <div className="col-2">
                                <input type="button" onClick={() => this.props.addData()} className={this.state.loadAdd ? "btn btn-primary disabled" : "btn btn-primary"} value="Save"/>
                            </div>
                            <div className="col-10">
                                {
                                    this.props.valueInput.loadAdd ?
                                        <i className="fa fa-spinner fa-pulse"></i>
                                    : null
                                }
                                {
                                    this.props.valueInput.successAdd ?
                                        <div className="alert alert-primary" role="alert">
                                            Success your add comment
                                        </div>
                                    : null
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddComment