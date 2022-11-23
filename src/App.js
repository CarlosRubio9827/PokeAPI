import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import CardPoke from "./Components/CardPoke";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Link } from "react-router-dom";

function App() {
  // const [counter, setCounter] = useState(0);
  const [pokemones, setPokemones] = useState([]);
  const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20');
  

  const getDataAPI = async () => {
    const res = await fetch(loadMore);
    const data = await res.json();

    setLoadMore(data.next);

    function createPokemonObject(result) {
      result.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();
        setPokemones((currentList) => [...currentList, data]);
      });
    }
    createPokemonObject(data.results);
    await console.log(pokemones);
  };

  useEffect(() => {
    getDataAPI();
  }, []);

  const funcLoadMore = ()=>{
    getDataAPI();
    console.log('load More');
  }

  return (
    <div className="App">
      <Header />
      <section className="pokes">
        {pokemones.map((i, j) => {
          return (
            <Link state={i} className='link' to={`poke/${i.name}`} key={j}>
              <CardPoke key={j} pokeElement={i} />;
            </Link>
          );
        })}
      </section>
      <button className="load-more" onClick={funcLoadMore}>Cargar más!</button>
      <Footer />
    </div>
  );
}

export default App;
