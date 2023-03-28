function PokemonCard(props) {
   console.log(props.propsPokemon.name)
   return (
   <figure>
      {props.propsPokemon.imgSrc === undefined ? <p>???</p> : <img src={props.propsPokemon.imgSrc}
         alt={props.propsPokemon.name}/>}
    <figcaption>{props.propsPokemon.name}</figcaption>
    </figure>
   );
}

export default PokemonCard;
