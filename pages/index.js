import Head from 'next/head'
import Image from 'next/image'
import Pokemon from '../components/Pokemon';
import get_pokemones from '../helpers/get_pokemones';
import styles from '../styles/Home.module.css'

export default function Home({ pokemones }) {

  const pokemones_data = JSON.parse(pokemones);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.pokemones}>
        {
          pokemones_data.map((pokemon) => (
            <Pokemon pokemon={pokemon} key={pokemon.name} />
          ))
        }
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const pokemones = await get_pokemones();

  return {
    props: {
      pokemones: JSON.stringify(pokemones)
    }
  }

}