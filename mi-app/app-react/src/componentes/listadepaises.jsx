import React from 'react';

const CountryList = ({ countries }) => {
  return (
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
  );
};

export default CountryList;