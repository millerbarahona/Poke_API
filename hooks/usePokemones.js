import { useEffect, useState } from "react"
import get_pokemones from "../helpers/get_pokemones";

const usePokemones = (initialPokemones, pageNumber) => {

  const [pokemones, setPokemones] = useState(initialPokemones);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    get_pokemones(pageNumber * 50)
      .then(res => {

        if (pageNumber > 0) setPokemones(prevPokemones => [...prevPokemones, ...res]);
        setHasMore(res.length > 0);
        setLoading(false);
      })
      .catch(e => {
        setError(true)
      })
  }, [pageNumber]);

  return [loading, error, hasMore, pokemones]
}

export default usePokemones