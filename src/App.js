import bg from './landingimg.jpg';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <img className="App-bg" src={bg} id="bg" alt=""/>
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
      <Footer />
    </div>
  );
}

export default App;
