import styles from '../styles/Home.module.css';

function Pokemon({ pokemon }) {
  return (
    <div key={pokemon.name} className={styles.pokemon}>
      <h1 className={styles.pokemon_name}>{pokemon.name}</h1>
      <img src={pokemon.photo_url} alt="" style={{ width: '150px' }} />
    </div>
  )
}

export default Pokemon
