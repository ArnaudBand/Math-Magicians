import React from 'react';
import {
  HashRouter as Router, Routes, Route, Link,
} from 'react-router-dom';
import Header from './components/Home';
import Calculator from './components/calculator';

const App = () => (
  <div className="calculator">
    <Router>
      <header className="header">
        <h2 className="logo">Math Magicians</h2>
        <Link to="/">Home</Link>
        <Link to="/calculator">Calculator</Link>
      </header>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
    </Router>
    <Calculator />
  </div>
);

export default App;
