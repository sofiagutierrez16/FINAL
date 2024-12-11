import React from 'react';

const SearchHistory = ({ searchHistory }) => {
  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Search History</h2>
      <ul>
        {searchHistory.map((country, index) => (
          <li key={index}>{country}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchHistory;
