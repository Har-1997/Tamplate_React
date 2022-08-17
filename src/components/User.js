import React, { Component } from 'react';
import {IoCloseCircleSharp, IoHammerSharp} from "react-icons/io5";
import AddUser from './AddUser';

export default class User extends Component {
    constructor(props){
        super(props);
        this.state = {
            editForm: false
        }
    }

    user = this.props.user;
    render() {
        return (
            <div className="user">
                <IoCloseCircleSharp onClick={()=> this.props.onDelete(this.user.id)} className="delete-icon" />
                <IoHammerSharp onClick={()=> {
                    this.setState({
                        editForm: !this.state.editForm
                    })
                }} className="edit-icon" />
                <h3>{this.user.firstname} {this.user.lastname}</h3>
                <p>{this.user.bio}</p>
                <b>{this.user.isHappy ? "Ուրախ մարդ :)" : "Տխուր մարդ :(   "}</b>

                {this.state.editForm && <AddUser user={this.user} onAdd={this.props.onEdit} />}
            </div>
        ) 
    }
}
