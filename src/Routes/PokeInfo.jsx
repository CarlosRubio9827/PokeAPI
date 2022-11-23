import React from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import '../Styles/PokeInfo.css';

const PokeInfo = () => {
  const location = useLocation();
  let poke = location.state;
  // let togglethemechange = location.toggleThemeChange;
  console.log(poke);

  return (
    <>
      <Header />
      <section className="pokeinfo-container">
      <Link className='pokeinfo-back' to={'/'}>Volver</Link>
        <article className="pokeinfo">
          <img
            className="pokeinfo-img"
            src={poke.sprites.other.dream_world.front_default}
            alt="img-poke"
          />
          <div className='pokeinfo-cont'>
            <p className='pokeinfo-name'>{poke.name}</p>
            <p className='pokeinfo-cont-h'>Height <span>{(poke.height / 3.281).toFixed(2)} m ({poke.height} ft)</span></p>
            <p className='pokeinfo-cont-a'>Abilities <span>  </span>
              {poke.abilities.map((i) => {
                return <span>{i.ability.name} </span>;
              })}
            </p>
            <p className='pokeinfo-cont-f'>Forms<span>  </span>
              {poke.forms.map((i) => {
                return <span>{i.name} </span>;
              })}
            </p>
            <p className='pokeinfo-cont-t'>Types<span>  </span>
              {poke.types.map((i) => {
                return <span>{i.type.name}</span>;
              })}
            </p>
            {/* <p>ability: {poke.abilities[0].ability.name}</p>
                <p>ability: {poke.abilities[1].ability.name}</p> */}
          </div>
        </article>
      </section>
      <Footer />
    </>
  );
};

export default PokeInfo;
