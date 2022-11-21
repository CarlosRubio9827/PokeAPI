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
  const [next, setNext] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=10"
  );

  const getDataAPI = async () => {
    const res = await fetch(next);
    const data = await res.json();
    setNext(data.next);
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
      <Footer />
    </div>
  );
}

export default App;
