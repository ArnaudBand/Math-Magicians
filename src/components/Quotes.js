import React from 'react';

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
      <div className="container pt-5">
        <div className="jumbotron">
          <div className="card">
            <div className="card-header border-bottom border-white text-center">Inspiration Quotes</div>
            <div className="card-body">
              {randomQuote ? (
                <>
                  <h5 className="card-title">
                    -
                    {' '}
                    {randomQuote.author || 'No Author'}
                  </h5>
                  <p className="card-text">
                    &quot;
                    {randomQuote.text}
                    &quot;
                  </p>
                </>
              ) : (
                <h2>Loading</h2>
              )}

              <div className="d-flex justify-content-evenly">
                <button type="button" onClick={getNewQuote} className="g-col-4 btn btn-primary ml-3">New Quote</button>
              </div>
            </div>
          </div>
        </div>

      </div>
      <p className="text-center">By Arnaud</p>
    </div>

  );
};

export default Quotes;
