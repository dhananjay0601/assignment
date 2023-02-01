import React from 'react';
import logo from './logo.svg';
import './App.css';
import Pets from './pets'

function App() {
  const user=[{Name:'chris',pets:[{name:'bella',type:'dog'},{name:'cocoa',type:'dog'}]},{Name:'nick',pets:[{name:'hilo',type:'cat'},{name:'polly',type:'cat'}]}];

  return (
   <Pets values={user}/>
    
  );
}

export default App;
