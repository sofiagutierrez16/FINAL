import React from 'react';

const SearchInput = ({ searchTerm, setSearchTerm, handleKeyDown }) => {
  return (
    <input
      type="text"
      placeholder="Enter country name"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      onKeyDown={handleKeyDown}
      style={{ padding: '10px', width: '300px', marginBottom: '20px' }}
    />
  );
};

export default SearchInput;