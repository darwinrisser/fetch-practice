import React, { Component } from 'react';
import UserCard from './components/UserCard'
import './App.css';

class App extends Component {
  state = {
    users: []
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => this.setState({users:json}))
  }
  
  render() {

    const cards = this.state.users.map((u,i)=>{
      return <UserCard key={i} user={u} />
    });

     return (
      <div className="App">
        {cards}
      </div>
    );
  }
}

export default App;
