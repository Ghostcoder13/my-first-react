import { useState } from "react";

function NavBar ({pokemonIndex, pokemonList, setPokemonIndex}) {
   
 return <div>
  
  {pokemonList.map((pokemon, pokemonIndex) => (
        <button key={pokemon.name} onClick={() => { setPokemonIndex(pokemonIndex) }}>{pokemon.name}</button>
    ))}
    
    </div>
}




export default NavBar