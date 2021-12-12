import styles from '../styles/Home.module.css'
import Pokemon from '../components/Pokemon';
import { useCallback, useRef, useState } from 'react';

function ListOfPokemones({ pokemones_data }) {
  const [more, setMore] = useState(false);

  const [pokemones, setPokemones] = useState(pokemones_data);

  const observer = useRef();

  const lastPokemonRef = useCallback(node => {

    if (observer.current) observer.current.disconnect()

    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        console.log('Visible')
      }
    })
    if (node) observer.current.observe(node)
  }, []);

  return (
    <div className={styles.pokemones}>
      {
        pokemones.map((pokemon, index) => {
          if (index + 1 === pokemones.length) {
            console.log(pokemon.name)
            return <div key={pokemon.name} ref={lastPokemonRef}><Pokemon pokemon={pokemon} /></div>
          }
          return <Pokemon pokemon={pokemon} key={pokemon.name} />
        })
      }
    </div>
  )
}

export default ListOfPokemones
