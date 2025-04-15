import "../../styles/styles SignUp/SignUp.css";
import Header from "../Header.jsx";

export default function SignUp() {
  return (
    <>
      <div className="card-signup">
        <h2 className="title-signup">Registrarse</h2>
        <form>
          <div className="conteiner-data-signup">
            <label className="title-lbl" htmlFor="">
              Nombre*
            </label>
            <input
              required
              type="text"
              placeholder="Nombre"
              name="name"
              id="name"
            />
          </div>
          <div className="conteiner-data-signup">
            <label className="title-lbl" htmlFor="">
              Correo*
            </label>
            <input
              required
              type="email"
              placeholder="Correo electronico"
              name="email"
              id="email"
            />
          </div>
          <div className="conteiner-data-signup">
            <label className="title-lbl" htmlFor="">
              Contraseña*
            </label>
            <div className="conteiner-input-eye-fill">
              <input
                required
                className="input-password"
                type="password"
                placeholder="Contraseña"
                name="password-signup"
                id="password-signup"
              />

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-eye-fill btn-visible-password"
                viewBox="0 0 16 16"
                onClick={() => {
                  let btnVisiblePassword = document.querySelector(
                    ".btn-visible-password"
                  );
                  let btnInvisiblePassword = document.querySelector(
                    ".btn-invisible-password"
                  );

                  btnInvisiblePassword.style.display = "flex";
                  btnVisiblePassword.style.display = "none";
                  let inputPassword = document.querySelector(".input-password");
                  let valuePassword = inputPassword.value;
                  inputPassword.addEventListener("key");
                  console.log(valuePassword);
                }}>
                <path
                  d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
                  className="btn-visible-password"
                />
                <path
                  d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"
                  className="btn-visible-password"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-eye-slash-fill btn-invisible-password"
                viewBox="0 0 16 16"
                onClick={() => {
                  //let passwordSignUp = document.querySelector(".password-signup");
                  let btnVisiblePassword = document.querySelector(
                    ".btn-visible-password"
                  );
                  let btnInvisiblePassword = document.querySelector(
                    ".btn-invisible-password"
                  );

                  btnInvisiblePassword.addEventListener("click", () => {
                    btnInvisiblePassword.style.display = "none";
                    btnVisiblePassword.style.display = "flex";
                  });
                }}>
                <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7 7 0 0 0 2.79-.588M5.21 3.088A7 7 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474z" />
                <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12z" />
              </svg>
            </div>
          </div>
          <input className="btn-signup" type="submit" value="Registrarme" />
          <div className="conteiner-btn-login">
            <p className="ask-login">¿Ya tienes una cuenta?</p>
            <button className="btn-login">Iniciar sesión</button>
          </div>
        </form>
      </div>
    </>
  );
}