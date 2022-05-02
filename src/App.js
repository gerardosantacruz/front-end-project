import logo from './logo.svg';
import './App.css';
import Profile from './components/profile/profile.js';
import Login from './components/login/login.js';

function App() {
  return (
    
    <div className="App">
      <Login></Login>
      <span>Otro componente</span>
      <Profile user={
          {
            name: 'Juan',
            username: 'juanito',
            email: 'adad@gmail.com',
            photo: 'https://picsum.photos/200/300',
        }} />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
