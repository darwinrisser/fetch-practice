import React, { Component } from 'react';
import UserCard from './components/UserCard';
import SearchBar from './components/SearchBar';
import Nav from './components/Nav';
import './App.css';

class App extends Component {
  state = {
    users: []
  }

  componentDidMount(){
    fetch('http://teacherfinder-server.herokuapp.com/api/users')
    .then(response => response.json())
    .then(json => this.setState({users:json}))
  }
  
  render() {

    const cards = this.state.users.map((u,i)=>{
      return <UserCard key={i} user={u} />
    });

     return (
      <div className="App">
        <header>
          <Nav/>
          <SearchBar/>
        </header>
        <main className="main">
          {cards}
        </main>
      </div>
    );
  }
}

export default App;
