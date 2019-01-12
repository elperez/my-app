import React from 'react';
import Person from './Person/Person';

const persons = (props) => props.persons.map((person, index) => {
      return <Person
          click={() => props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={(event) => props.changed(event, person.id)}/>
    });

export default persons;

// return function body
// const persons = (props) => (
//     return ();
// );
