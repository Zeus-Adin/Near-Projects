import logo from './logo.svg';
import './App.css';

import {authenticate} from './auth'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Click below to connect to the Near Blockchain
        </p>
        <button onClick={()=>authenticate()}>Connect to NEAR</button>
      </header>
    </div>
  );
}

export default App;
