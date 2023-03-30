import PropTypes from "prop-types";

function PokemonCard(props) {
   
   return (
   <figure>
      {props.propsPokemon.imgSrc === undefined ? <p>???</p> : <img src={props.propsPokemon.imgSrc}
         alt={props.propsPokemon.name}/>}
    <figcaption>{props.propsPokemon.name}</figcaption>
    </figure>
   );
}
PokemonCard.propTypes = {
   propsPokemon: PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgSrc: PropTypes.string,
   }).isRequired,

}


export default PokemonCard;
