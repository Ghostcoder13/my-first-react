import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PokemonCard from './components/PokemonCard/Pokemoncard'


function App() {
  const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      },
      {
        name: "charmander",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      },
      {
        name: "squirtle",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      },
      {
        name: "pikachu",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      },
      {
        name: "mew",
      },
    ];
    const [pokemonIndex, setPokemonIndex] = useState(0);

    const handleClickPrevious = () => {
      setPokemonIndex(pokemonIndex - 1) 
    } 
    const handleClickNext = () => {
      setPokemonIndex(pokemonIndex + 1)
    }
    
    const pokemon = pokemonList[pokemonIndex]
    return (
      <div className="App">
        <PokemonCard propsPokemon={pokemon}/>
        <p>{pokemonIndex}</p>
        { pokemonIndex > 0 ? <button onClick={handleClickPrevious}>Previous</button> : ""}
        { pokemonIndex < pokemonList.length - 1 ? <button onClick={handleClickNext}>Next</button> : ""}                    
      </div>
  )
}



export default App
