export default async function get_pokemones() {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=50'

  const res = await fetch(url);
  const body = await res.json()
  const pokemones = await Promise.all(body.results.map(async (pokemon) => {
    const res_pokemon = await fetch(pokemon.url);
    const body_pokemon = await res_pokemon.json();
    const photo_url = body_pokemon.sprites.other.dream_world.front_default;
    return {
      name: pokemon.name,
      photo_url
    }
  }))
  return pokemones;
}