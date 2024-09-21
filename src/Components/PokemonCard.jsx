// src/PokemonCard.jsx
import React from 'react';

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="card">
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <h3>{pokemon.name}</h3>
    </div>
  );
};

export default PokemonCard;
