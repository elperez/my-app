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

  nameChangedHandler = (event) => {
    this.setState({
      persons : [
        {name: 'Enrique', age:34},
        {name: event.target.value, age:33},
        {name: "Edina", age:29}
      ]
    })
  }

  deletePersonHandler = (personIndex) => {
    // slice creates a new object copy
    // const persons = this.state.persons.slice();

    // or use new ES6 feature -- spread operator
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({persons: persons});

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
          {this.state.persons.map((person, index) => {
            return <Person 
            click={() => this.deletePersonHandler(index)}
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
