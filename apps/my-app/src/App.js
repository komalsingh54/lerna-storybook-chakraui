import { Button } from 'mystorybook';
import 'mystorybook/dist/index.css';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button
          label="This is storybook"
          onClick={() => { }}
          primary
          size="medium"
        />
      </header>
    </div>
  );
}

export default App;
