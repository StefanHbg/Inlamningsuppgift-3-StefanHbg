import './App.css';
import Register from './components/Register';
import Account from './components/Account';
import { useState } from 'react';

function App() {

  const [registered, setRegistered] = useState(true);

  function updateState() {
    setRegistered(false);
  }

  return (
    <div className="App">
      { registered ? <Register updateState={updateState} /> : <Account updateState={updateState}/>}
    </div>
  );
}

export default App;
