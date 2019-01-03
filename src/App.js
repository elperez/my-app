import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons : [
      {name:"Kit", age:34},
      {name:"Stanley", age:33},
      {name:"Edina", age:26}
    ],
    otherState:'some other value'
  }

  switchNameHandler = (newName) => {

    this.setState({
      persons : [
        {name: newName, age:34},
        {name: "Stanley", age:33},
        {name: "Edina", age:29}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons : [
        {name: 'Enrique', age:34},
        {name: event.target.value, age:33},
        {name: "Edina", age:29}
      ]
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    return (
      <div className="App">
        <h1>Hello World!</h1>
        <button 
          style={style}
          onClick={this.switchNameHandler.bind(this, 'Enrique')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Luis')}
          changed={this.nameChangedHandler}>My hobbies: Volleyball</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
