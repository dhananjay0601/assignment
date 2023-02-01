import React from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './person'

function App() {
  const persons=[{id:1,usname:'Ansh',age:22,skill:'React'},{id:2,usname:'Jay',age:25,skill:'Java'},{id:3,usname:'Sara',age:23,skill:'Angular'},
{id:4,usname:'Aravind',age:21,skill:'Python'}];
  return (
    <Person values={persons}/>
    
  );
}

export default App;
