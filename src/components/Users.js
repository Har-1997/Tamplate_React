import React, { Component } from 'react';
import User from './User';

export default class Users extends Component {
  
    render() {
        if (this.props.users.length > 0) {
            return (
            <div>
                {this.props.users.map((el)=> {
                    return <User onEdit={this.props.onEdit} onDelete={this.props.onDelete} key={el.id} user={el} />   
                })}
            </div>
            )
        }
        else{
            return(
                <div className='user'>Not founded</div>
            )
        }    
    }
}
