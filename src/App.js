import React, { Component } from 'react';
import UserCard from './components/UserCard';
import SearchBar from './components/SearchBar';
import Nav from './components/Nav';
import './App.css';

class App extends Component {
  state = {
    users: [],
    search: ""
  }

  componentDidMount(){
    fetch('http://teacherfinder-server.herokuapp.com/api/users')
    .then(response => response.json())
    .then(json => this.setState({users:json}))
  }
  
  onchange = e => {
    this.setState({ search : e.target.value });
  }

  render() {
    const {search} = this.state;
    const filteredUsers = this.state.users.filter(user=>{
      return user.instrument.toLowerCase().indexOf( search.toLowerCase() ) !== -1
    })
    const cards = filteredUsers.map((u,i)=>{
      return <UserCard key={i} user={u} />
    });

     return (
      <div className="App">
        <header>
          
            <input type="text" label="narrow down your search" onChange={this.onchange}/>
          
        </header>
        <main className="main">
          {cards}
        </main>
      </div>
    );
  }
}

export default App;
