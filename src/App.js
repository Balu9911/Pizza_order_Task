import logo from './logo.svg';
import './App.css';
import './Components/Header'
import Home from './Components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Orderpizza from './Components/Orderpizza';
import Buildpizza from './Components/Buildpizza';
import Header from './Components/Header';
import Footer from './Components/Footer';
// import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Orderpizza' element={<Orderpizza />}></Route>
            <Route path='/BuildUrPizza' element={<Buildpizza />} ></Route>
        </Routes>
        
        <Footer />
      </Router>
    </div>
  );
}

export default App;




























{/*       
      <header className="App-header">
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