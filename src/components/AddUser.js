import React, { Component } from 'react'

export default class AddUser extends Component {

    userAdd = {};
    constructor(props){
        super(props);

        this.state = {
            firstname: "",
            lastname: "",
            bio: "",
            age: 0,
            isHappy: false
        }
    }

    render() {
        return (
            <form ref={(el)=> this.myForm = el}>
                <input type="text" placeholder='Անուն' onChange={(e)=> this.setState({firstname: e.target.value})} />
                <input type="text" placeholder='Ազգանուն' onChange={(e)=> this.setState({lastname: e.target.value})}  />
                <textarea placeholder='Նկարագիր' onChange={(e)=> this.setState({bio: e.target.value})}  ></textarea>
                <input type="number" placeholder='Տարիք' onChange={(e)=> this.setState({age: e.target.value})}  />
                <label htmlFor='isHappy '>Ու՞րախ ես</label>
                <input type="checkbox" placeholder='' id='isHappy' onChange={(e)=> this.setState({isHappy: e.target.checked})}  />
                <button type='button' onClick={()=> { 
                        this.myForm.reset()
                        this.userAdd = {
                            firstname: this.state.firstname,
                            lastname: this.state.lastname,
                            bio: this.state.bio,
                            age: this.state.age,
                            isHappy: this.state.isHappy
                        }
                        if (this.props.user) {
                            this.userAdd.id = this.props.user.id;
                        }
                        this.props.onAdd(this.userAdd);
                    }
                }>Ավելացնել</button>
            </form>
        )
    }
}
