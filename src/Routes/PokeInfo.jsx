import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const PokeInfo = () => {
  const location = useLocation();
  let poke = location.state;
  // let togglethemechange = location.toggleThemeChange;
  console.log(poke);

  return (
    <>
        <Header/>
        <article className='pokeinfo'>
            <img className='pokeinfo-img' src={poke.sprites.other.dream_world.front_default} alt='img-poke'/>
            <div>
                <p>Name: {poke.name}</p>
                <p>Height: {poke.height}</p>
                <ul>
                {poke.abilities.map((i)=>{
                     return (

                        <li>{i.ability.name}</li>
                     )
                    
                })}
                </ul>
                {/* <p>ability: {poke.abilities[0].ability.name}</p>
                <p>ability: {poke.abilities[1].ability.name}</p> */}
            </div>
        </article>
        <Footer/>
    </>
  )
};

export default PokeInfo;
