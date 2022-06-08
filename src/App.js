import React from 'react';
import {
  Routes, Route, Link,
} from 'react-router-dom';
import Home from './components/Home';
import Calculator from './components/calculator';
import Quotes from './components/Quotes';

const App = () => (
  <div className="calculator">
    <header className="header">
      <h1 className="logo">Math Magicians</h1>
      <div className="right_side">
        <Link className="menu_link" to="/">Home</Link>
        <Link className="menu_link" to="/calculator">Calculator</Link>
        <Link className="menu_link" to="/Quotes">Quotes</Link>
      </div>
    </header>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/Quotes" element={<Quotes />} />
    </Routes>
  </div>
);

export default App;
