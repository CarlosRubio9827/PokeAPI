import React from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import "./../Styles/Login.css";

const Registro = () => {
  const loginFunc = () => {
    const form = document.querySelector("#registro-pokeapi");
    const formData = new FormData(form);

    console.log(formData);
  };

  return (
    <>
      <section className="login">
        <article className="login-container">
          <form id="registro-pokeapi" className="login-container-form">
            <label>Poke API</label>
            <input
              className="login-container-form-input"
              id="name"
              placeholder="Nombre"
              type="text"
              required
            />
            <input
              className="login-container-form-input"
              id="email"
              placeholder="Email"
              type="email"
              required
            />
            <input
              className="login-container-form-input"
              id="password"
              placeholder="Password"
              type="password"
              required
            />
            <button className='login-container-form-submit' onClick={loginFunc}>
              Registrarse
            </button>
          </form>
          <p>¿Ya tienes cuenta?, <Link className='login-container-redirect' to={'/login'}>Inicia Sesión Aquí.</Link> </p>
          <Link className="login-container-home" to={'/'}>Página principal</Link>
          
        </article>
        <Footer />
      </section>
    </>
  );
};

export default Registro;
