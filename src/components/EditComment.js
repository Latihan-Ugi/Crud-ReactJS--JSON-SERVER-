import React, { Component } from 'react'

class EditComment extends Component {
    constructor(props){
        super(props)
        this.state = {

        }

    }

    componentDidMount(){

    }

    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-10">
                        <h4>
                            <div className="row">
                                <div className="col-1">
                                    <i className="far fa-user"></i> 
                                </div>
                                <div className="col-11">
                                    <div className="form-group">
                                        <input type="text" name="nameedit" className="form-control" value={this.props.valueEdit.nameedit} placeholder="Name.." onChange={this.props.handleEdit}/>
                                    </div>
                                </div>
                            </div>
                        </h4>
                    </div>
                    <div className="col-2">
                        <span>
                            <i className="far fa-window-close btn" onClick={() => this.props.closeEdit()}  data-toggle="tooltip" data-placement="bottom" title="Close Edit Comment"  style={{color:'red'}}></i>
                        </span>
                    </div>
                </div>
                <span>
                    <div className="row">
                        <div className="col-1">
                            <i className="far fa-envelope"></i>
                        </div>
                        <div className="col-11">
                            <div className="form-group">
                                <input type="email" name="emailedit" className="form-control" value={this.props.valueEdit.emailedit} placeholder="Email.." onChange={this.props.handleEdit}/>
                            </div>
                        </div>
                    </div>
                </span>

                <hr/>
                <div className="form-group">
                    <textarea name="bodyedit" rows="4" className="form-control"  value={this.props.valueEdit.bodyedit} onChange={this.props.handleEdit}>
                    </textarea>
                </div>
                <div className="form-group">
                        <div className="row">
                            <div className="col-2">
                                <input type="button" onClick={() => this.props.editData()} className={this.props.status.loadEdit ? "btn btn-primary disabled" : "btn btn-primary"} value="Save"/>
                            </div>
                            <div className="col-10">
                                {
                                    this.props.status.loadEdit ?
                                        <i className="fa fa-spinner fa-pulse"></i>
                                    : null
                                }
                                {
                                    this.props.status.successEdit ?
                                        <div className="alert alert-primary" role="alert">
                                            Success your add comment
                                        </div>
                                    : null
                                }
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}

export default EditComment