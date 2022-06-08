import React from 'react';
import './css/quotes.css';

const Quotes = () => {
  const [quotes, setQuotes] = React.useState([]);
  const [randomQuote, setRandomQuote] = React.useState('');

  React.useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://type.fit/api/quotes');
      const data = await response.json();

      setQuotes(data);
      const randIndex = Math.floor(Math.random() * data.length);
      setRandomQuote(data[randIndex]);
    }
    fetchData();
  }, []);

  const getNewQuote = () => {
    const randIndex = Math.floor(Math.random() * quotes.length);
    setRandomQuote(quotes[randIndex]);
  };

  return (
    <div style={{ backgroundColor: 'transparent', minHeight: '100vh' }}>
      <div className="jumbotron">
        <div className="card">
          <div className="card-body">
            {randomQuote ? (
              <>
                <p className="card-text">
                  &quot;
                  {randomQuote.text}
                  &quot;
                </p>
                <span className="card-title">
                  - Author:
                  {' '}
                  {randomQuote.author || 'No Author'}
                </span>
              </>
            ) : (
              <h2>Loading</h2>
            )}
          </div>
          <div className="div_btn">
            <button type="button" onClick={getNewQuote} className="btn_quotes">New Quote</button>
          </div>
        </div>

      </div>
      <p className="text-center">By Arnaud</p>
    </div>

  );
};

export default Quotes;
