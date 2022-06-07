import React from 'react';
import {
  Routes, Route, Link,
} from 'react-router-dom';
import Home from './components/Home';
import Calculator from './components/calculator';

const App = () => (
  <div className="calculator">
    <header className="header">
      <h2 className="logo">Math Magicians</h2>
      <Link to="/">Home</Link>
      <Link to="/calculator">Calculator</Link>
    </header>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<Calculator />} />
    </Routes>
  </div>
);

export default App;
