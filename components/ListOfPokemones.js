import styles from '../styles/Home.module.css'
import Pokemon from '../components/Pokemon';
import { useCallback, useRef, useState } from 'react';
import usePokemones from '../hooks/usePokemones';

function ListOfPokemones({ pokemones_data }) {  
  
  const [pageNumber, setpageNumber] = useState(0);

  const [loading, error, hasMore, pokemones] = usePokemones(pokemones_data, pageNumber);
  const observer = useRef();

  const lastPokemonRef = useCallback(node => {    
    if (observer.current) observer.current.disconnect()

    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {                
        setpageNumber(prevPageNumber => prevPageNumber + 1);
      }
    })
    if (node) observer.current.observe(node)
  }, []);

  return (
    <div className={styles.pokemones}>
      {
        pokemones.map((pokemon, index) => {
          if (index + 1 === pokemones.length) {            
            return <div key={pokemon.name} ref={lastPokemonRef}><Pokemon pokemon={pokemon} /></div>
          }
          return <Pokemon pokemon={pokemon} key={pokemon.name} />
        })
      }
    </div>
  )
}

export default ListOfPokemones
