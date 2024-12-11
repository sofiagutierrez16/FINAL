import React, { useState, useEffect } from 'react';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [countries, setCountries] = useState([]);
  const [searchHistory, setSearchHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  //hadleSearch indica 
  const handleSearch = () => {
    if (searchTerm) {
      setIsLoading(true);
      fetch(`https://restcountries.com/v3.1/name/${searchTerm}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('No results found');
          }
          return response.json();
        })
        .then((data) => {
          if (data.length > 0) {
            setCountries(data);
            const countryName = data[0]?.name.common;
            if (countryName) {
              setSearchHistory((prevHistory) => {
                const newHistory = prevHistory.filter((name) => name !== countryName);
                return [countryName, ...newHistory].slice(0, 5);
              });
            }
          } else {
            setCountries([]);
          }
        })
        .catch(() => setCountries([]))
        .finally(() => setIsLoading(false));
    } else {
      setCountries([]);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Country Search</h1>
      <input
        type="text"
        placeholder="Enter country name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyDown}
        style={{ padding: '10px', width: '300px', marginBottom: '20px' }}
      />
      <div>
        {isLoading ? (
          <p>Loading...</p>
        ) : countries.length > 0 ? (
          <ul>
            {countries.map((country) => (
              <li key={country.cca3} style={{ marginBottom: '15px' }}>
                <strong>{country.name.common}</strong>
                <p>Capital: {country.capital ? country.capital[0] : 'N/A'}</p>
                <p>Population: {country.population.toLocaleString()}</p>
                <img
                  src={country.flags.svg}
                  alt={`Flag of ${country.name.common}`}
                  style={{ width: '100px', border: '1px solid #ccc' }}
                />
              </li>
            ))}
          </ul>
        ) : (
          searchTerm && !isLoading && <p>No results found.</p>
        )}
      </div>
      <div style={{ marginTop: '20px' }}>
        <h2>Search History</h2>
        <ul>
          {searchHistory.map((country, index) => (
            <li key={index}>{country}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
