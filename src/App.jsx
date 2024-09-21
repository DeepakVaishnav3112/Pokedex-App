// src/App.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonCard from './Components/PokemonCard';
import SearchBox from './Components/SearchBox';
import './App.css';

const App = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [searchField, setSearchField] = useState('');

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
        const pokemonData = await Promise.all(
          response.data.results.map(async (pokemon) => {
            const pokemonDetail = await axios.get(pokemon.url);
            return pokemonDetail.data;
          })
        );
        setPokemonList(pokemonData);
      } catch (error) {
        console.error('Error fetching Pokémon data:', error);
      }
    };
    fetchPokemon();
  }, []);

  const handleSearchChange = (e) => {
    setSearchField(e.target.value.toLowerCase());
  };

  const filteredPokemon = pokemonList.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchField)
  );

  return (
    <div className="app">
      <h1>Pokémon Search</h1>
      <SearchBox onSearchChange={handleSearchChange} />
      <div className="pokemon-list">
        {filteredPokemon.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default App;

