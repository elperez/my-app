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
      ],
      showPersons: false
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

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map(person => {
            return <Person 
            name={person.name}
            age={person.age}/>
          })}
        </div>
      );

    }

    return (
      <div className="App">
        <h1>Hello World!</h1>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
        
        
      </div>
    );
  }
}

export default App;
