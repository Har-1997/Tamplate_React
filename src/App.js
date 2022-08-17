import Header from "./components/Header";
import Users from "./components/Users";
import AddUser from "./components/AddUser";
import React from "react";
import Carusel from "./components/Carusel";
import './App.css';
import Footer from "./components/Footer";

class App extends React.Component {
  
  constructor(props){
    super(props);

    this.state = {
        users: [
            {
                id: 1,
                firstname: "Bob",
                lastname: "Marley",
                bio: "Lorem asum enq lorem lsum enq",
                age: 40,
                isHappy: true
            },
            {
                id: 2,
                fitstname: "John",
                lastname: "Doe",
                bio: "Lorem asum enq lorem lsum enq",
                age: 22,
                isHappy: false
            },
            {
                id: 3,
                fitstname: "Jorj",
                lastname: "Vashington",
                bio: "Lorem asum enq lorem lsum enq",
                age: 700,
                isHappy: true
            }
        ]
    }
    this.addUser = this.addUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    this.editUser = this.editUser.bind(this);
  }

  render(){
    return (
      <div className="All">
        <div className="App">
          <Header title="EsimInch"  />
          <main>
            <Users onEdit={this.editUser} users={this.state.users} onDelete={this.deleteUser} />
          </main>
          <aside>
            <AddUser onAdd={this.addUser} />
          </aside>
        </div>
        <div className="App">
          <Carusel />
        </div>
        <div className="App">
          <Footer />
        </div>
        
      </div>

    );
  }

  deleteUser(id){
      this.setState({
        users: this.state.users.filter((el)=> el.id !== id)
      })
  }

  editUser(user){
    let allUsers = this.state.users;
    allUsers[user.id - 1] = user;
    this.setState({users: []}, ()=> {
      this.setState({users: [...allUsers]})
    })
  }

  addUser(user){
    const id = this.state.users.length + 1;
    this.setState({users: [...this.state.users, {id, ...user}]})
  }
}

export default App;
