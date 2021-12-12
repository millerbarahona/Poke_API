import styles from '../styles/Home.module.css';

function Pokemon({ pokemon }) {
  let className;

  switch (pokemon.type) {
    case 'fire':
      className = styles.fire
      break
    case 'water':
      className = styles.water
      break
    case 'grass':
      className = styles.grass
      break;
    case 'poison':
      className = styles.poison
      break;
    default:
      break;
  }
  return (
    <div key={pokemon.name} className={`${styles.pokemon} ${className}`} >
      <h1 className={styles.pokemon_name} >{pokemon.name}</h1>
      <img  src={pokemon.photo_url} alt="" style={{ width: '150px' }} />
    </div>
  )
}
Pokemon.displayName = 'Pokemon'

export default Pokemon
