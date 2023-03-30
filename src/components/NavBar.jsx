function NavBar ({pokemonIndex, pokemonList, setPokemonIndex}) {
    const handleClickPrevious = () => {
        setPokemonIndex(pokemonIndex - 1) 
      } 
      const handleClickNext = () => {
        setPokemonIndex(pokemonIndex + 1)
      }
    
      return(
        <div className="NavBar">
            { pokemonIndex > 0 ? <button onClick={handleClickPrevious}>Previous</button> : ""}
            { pokemonIndex < pokemonList.length - 1 ? <button onClick={handleClickNext}>Next</button> : ""} 
        </div> 
    )
}

export default NavBar