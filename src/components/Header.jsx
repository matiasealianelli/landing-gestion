import React, { useState } from "react";
import "/src/styles/Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import SignUp from "./SignUp/SignUp.jsx";
import "../styles/styles SignUp/SignUp.css";

export default function Header() {
  const [isSignUpActive, setSignUpActive] = useState(false);

  const handleSignUpClick = () => {
    setSignUpActive(true);
  };

  const handleCloseSignUp = () => {
    setSignUpActive(false);
  };

  let top = 0;
  window.addEventListener("scroll", function () {
    let header = document.querySelector("header");
    let st = document.documentElement.scrollTop;
    if (st === 0) {
      header.style.backgroundColor = "transparent";
    } else if (st < top) {
      header.style.backgroundColor = "#222222";
    } else if (st > top) {
      header.style.backgroundColor = "#222222";
      header.style.transition = "all 0.3s ease";
    }
    top = st <= 0 ? 0 : st;
  });
  return (
    <>
      <header>
        <a href="#" title="Inicio" className="logo">
          GestionApp
        </a>
        <nav className="list-header">
          <a href="#" className="link-header">
            Utilidades
          </a>
          <a href="#" className="link-header">
            Precios
          </a>
          <a
            href="#"
            title="Contactanos completando el formulario"
            className="link-header">
            Contacto
          </a>
          <a href="#" className="link-header">
            Preguntas frecuentes
          </a>
          <div className="cont-btn-header">
            <button
              title="Registrate ahora"
              className="btn-user btn-user-signup"
              id="btn-user-signup"
              onClick={() => {
                let nav = document.querySelector(".list-header");
                nav.classList.remove("active");
                handleSignUpClick();
              }}>
              Registrarse
            </button>
            <button title="Inicia sesion ahora" className="btn-user">
              Iniciar sesion
            </button>
          </div>
        </nav>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          className="bi bi-list btn-menu"
          viewBox="0 0 16 16"
          onClick={() => {
            let nav = document.querySelector(".list-header");
            let btnMenu = document.querySelector(".btn-menu");
            let btnMenuExit = document.querySelector(".btn-menu-exit");

            if (window.matchMedia("(max-width: 1024px)").matches) {
              nav.classList.add("active");
              btnMenu.style.display = "none";
              btnMenuExit.style.display = "block";
            }
          }}>
          <path
            className="btn-menu"
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          className="bi bi-x-lg btn-menu-exit"
          viewBox="0 0 16 16"
          onClick={() => {
            let nav = document.querySelector(".list-header");
            let btnMenu = document.querySelector(".btn-menu");
            let btnMenuExit = document.querySelector(".btn-menu-exit");
            if (window.matchMedia("(max-width: 1024px)").matches) {
              nav.classList.remove("active");
              btnMenu.style.display = "block";
              btnMenuExit.style.display = "none";
              handleCloseSignUp();
            }
          }}>
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
        </svg>
      </header>
      <div className={`conteiner-signup ${isSignUpActive ? "active" : ""}`}>
        <div className="conteiner-card">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            onClick={handleCloseSignUp}
            className="bi bi-x-circle close-signup"
            viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
          </svg>
          <SignUp />
        </div>
      </div>
    </>
  );
}
