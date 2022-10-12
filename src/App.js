import './App.css';
import {Routes, Route, Link } from 'react-router-dom'

import Home from './pages/Home'
import Menu from './pages/Menu'
import About from './pages/About'

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
