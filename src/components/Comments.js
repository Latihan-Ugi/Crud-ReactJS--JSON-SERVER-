import React, { Component } from 'react'

import Service from './../services/Service'

// import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'

// const MySwal = withReactContent(Swal)

import AddComment from './AddComment';
import EditComment from './EditComment';

class Comments extends Component{
    constructor(props){
        super(props)
        this.state = {
            id:this.props.idpost,
            loadcomments:false,
            datacomments:[],
            displayadd:false,
            error:false,
            name:'',
            email:'',
            body:'',
            nameedit:'',
            emailedit:'',
            bodyedit:'',
            loadAdd:false,
            successAdd:false,
            isEdit:false,
            idEdit:'',
            loadEdit:false,
            successEdit:false,
        }
        this.service = new Service();


        this.addComment = this.addComment.bind(this);
        this.closeAdd = this.closeAdd.bind(this);
        this.addData = this.addData.bind(this);
        this.closeEdit = this.closeEdit.bind(this);
        this.editData = this.editData.bind(this);
    }

    componentDidMount(){
        this.getData();
    }

    getData(){
        this.setState({
            loadcomments:true
        })
        fetch(this.service.pointing()+"posts/"+this.state.id+"/comments?_sort=id&_order=desc")
            .then(response => response.json())
            .then(data => {
                if(data.lenght !== 0){
                    this.setState({
                        loadcomments:false,
                        datacomments:data
                    })
                } else {
                    this.setState({
                        loadcomments:false,
                        error:true
                    })
                }
                // console.log(data)
            })
            .catch(error => console.log("Error: "+ error))
    }

    addData(){
        this.setState({
            loadAdd:true
        })
        fetch(this.service.pointing()+"posts/"+this.state.id+"/comments", {
                method: 'POST',
                body: JSON.stringify({
                    postId:this.state.id,
                    name:this.state.name,
                    email:this.state.email,
                    body:this.state.body
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
            .then(response => response.json())
            .then(json => {
                this.setState({
                    loadAdd:false,
                    successAdd:true
                })
                setTimeout(() => {
                    this.setState({
                    successAdd: false
                  })
                }, 2000);
                this.deleteValue();
                this.getData();
                // console.log(json)
            })
            .catch(error => console.log(error))
    }

    editData(){
        this.setState({
            loadEdit:true
        })
        fetch(this.service.pointing()+"comments/"+this.state.idEdit, {
                method: 'PUT',
                body: JSON.stringify({
                    postId:this.state.id,
                    name:this.state.nameedit,
                    email:this.state.emailedit,
                    body:this.state.bodyedit
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
            .then(response => response.json())
            .then(json => {
                this.setState({
                    loadEdit:false,
                    successEdit:true
                })
                setTimeout(() => {
                    this.setState({
                    successEdit: false
                  })
                }, 2000);
                this.deleteValue();
                this.getData();
                this.closeEdit();
                // console.log(json)
            })
            .catch(error => console.log(error))
    }

    detele(id){
        // console.log(id);
        fetch(this.service.pointing()+'comments/'+id, {
            method: 'DELETE'
            })
            .then(response => {
                if(response.status === 200){
                    this.getData();
                }
            })
            .catch(error => console.log(error))
    }

    edit(id){
        fetch(this.service.pointing()+"comments/"+id)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    emailedit:data.email,
                    nameedit:data.name,
                    bodyedit:data.body
                })
                // console.log(data)
            })
            .catch(error => console.log("Error: "+ error))
        this.setState({
            isEdit:true,
            idEdit:id
        })
    }

    closeEdit(){
        this.setState({
            isEdit:false,
            idEdit:0
        })
    }
    addComment(){
        this.setState({
            displayadd:true
        })
    }

    closeAdd() {
        this.setState({
            displayadd:false
        })
        this.deleteValue();
    }

    handleInput = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
        // console.log(event.target.name)
    }

    handleEdit = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    deleteValue(){
        this.setState({
            name:'',
            email:'',
            body:'',
            nameedit:'',
            emailedit:'',
            bodyedit:'',
        })
    }

    render(){
        return(
            <div className="col-12" style={{marginBottom:10}}>
                <div className="card">
                    <div className="card-body">
                        <div className="row" style={{marginBottom:15}}>
                            <div className="col-6">
                                <h5 className="left" style={{width:120}}>Comments: </h5>
                            </div>
                            <div className="col-6">
                                <button type="button" className={this.state.displayadd ? "btn btn-outline-primary disabled" : "btn btn-outline-primary" } onClick={this.addComment} style={{float:'right'}}>Add</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className={this.state.displayadd ? null : "d-none"}>
                                    <AddComment addData={this.addData} valueInput={this.state} handleInput={this.handleInput} closeAdd={this.closeAdd}/>
                                </div>
                            </div>
                        </div>
                        {
                            this.state.loadcomments ?
                                <div>
                                    <span>Load Comments..</span>
                                </div>    
                            :
                                this.state.error ?
                                    <div>           
                                        <h5>No Comment</h5>
                                    </div>    
                                :
                                    this.state.datacomments.map((value,i) =>
                                        <div key={i} style={{borderBottom:'1px solid #333',marginBottom:15}}>

                                            { 
                                                this.state.isEdit && this.state.idEdit === value.id ?
                                                    <div>
                                                        <EditComment closeEdit={this.closeEdit} editData={this.editData} status={this.state} handleEdit={this.handleEdit} valueEdit={this.state} />
                                                    </div>     
                                                :
                                                    <div>
                                                        <div className="row">
                                                        <div className="col-9">
                                                            <h4><i className="far fa-user"></i> {value.name}</h4>
                                                        </div>
                                                        <div className="col-3">
                                                            <span>
                                                                <i className={this.state.isEdit ? "far fa-edit btn d-none" : "far fa-edit btn"} data-toggle="tooltip" onClick={() => this.edit(value.id)} data-placement="bottom" title="Edit Comment" style={{color:'orange'}}></i>
                                                            </span>
                                                            <span>
                                                                <i className="far fa-window-close btn" onClick={() => this.detele(value.id)}  data-toggle="tooltip" data-placement="bottom" title="Delete Comment"  style={{color:'red'}}></i>
                                                            </span>
                                                        </div>
                                                        </div>
                                                        <span><i className="far fa-envelope"></i> {value.email}</span>
                                                        <hr/>
                                                        <p>{value.body}</p>
                                                    </div>
                                            }
                                        </div>    
                                    )
                        }
                    </div>
                </div>  
            </div>    
        )
    }
}

export default Comments