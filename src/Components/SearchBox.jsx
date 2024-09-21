// src/SearchBox.jsx
import React from 'react';

const SearchBox = ({ onSearchChange }) => {
  return (
    <input 
      type="text" 
      placeholder="Search Pokémon..." 
      onChange={onSearchChange} 
    />
  );
};

export default SearchBox;
