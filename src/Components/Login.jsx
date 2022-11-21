import React from "react";
import { redirect, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import "./../Styles/Login.css";

const Login = () => {

  const navigate = useNavigate();
  const loginFunc = () => {
    const form = document.querySelector("#login-pokeapi");
    let email = document.querySelector("#email");
    let password = document.querySelector("#password");
    console.log(email.value);

    if (email.value === "ejemplo@ejemplo.com") {
      console.log(email.value + "dssssssss");
      navigate('/')
    } else {
        email.value = '';
        password.value = '';
       alert('No tienes cuenta, crea una');
        // return redirect("/registro");
    }
    // const formData = new FormData(form);
    // console.log(formData);
  };

  return (
    <>
      <section className="login">
        <article className="login-container">
          <form id="login-pokeapi" className="login-container-form">
            <label>Poke API</label>
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
            <button
              className="login-container-form-submit"
              type="button"
              onClick={loginFunc}
            >
              Iniciar Sesión
            </button>
          </form>
          <p>
            ¿No tienes cuenta?,{" "}
            <Link className="login-container-redirect" to={"/registro"}>
              Registrate Aquí.
            </Link>{" "}
          </p>
          <Link className="login-container-home" to={"/"}>
            Página principal
          </Link>
        </article>
        <Footer />
      </section>
    </>
  );
};

export default Login;
