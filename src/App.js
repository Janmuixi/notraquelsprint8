import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import { useState, useEffect } from 'react';
import Home from './Home'
import Ship from './Ship'
import Ships from './Ships'

function App() {
  const [ships, setShips] = useState([])
  
  useEffect(() => {
    fetch('https://swapi.dev/api/starships')
    .then(res => res.json())
    .then(
      (data) => {
        setShips(data.results)
      }
    )
  }, [])
  
  return (
    <div className="App">
      <Router>
        <Link to="/">Home</Link>
        <Link to="/ships">Ships</Link>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/ships" element={ <Ships ships={ships} /> } />
          <Route path="/ships/:shipId" element={<Ship />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
