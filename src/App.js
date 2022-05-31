import React from 'react';
import Header from './header/header';
import Calculator from './components/calculator';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render = () => (
    <>
      <Header />
      <Calculator />
    </>
  )
}

// const App = () => (
//   <div className="App">
//     <Calculator />
//   </div>
// );

export default App;
