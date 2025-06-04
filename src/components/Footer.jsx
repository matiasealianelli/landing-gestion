import "/src/styles/Footer.css";
import Logo from "./Logo.jsx";
export default function Footer() {
  return (
    <>
      <footer>
        <div className="conteiner-row1-footer">
          <div className="col1-newsletter">
            <h4 className="subtitle-newsletter">Únete a nuestro Newsletter</h4>
            <p className="text-newsletter">Recibe actualizaciones y noticias sobre nuestra aplicación.</p>
          </div>
          <div className="col2-newsletter">
            <form className="conteiner-input-newsletter">
              <input className="input-newsletter" type="email"  id="email-newsletter" placeholder="Introduce tu email" required/>
              <button className="btn-newsletter" name="email">Suscribirse</button>
            </form>
            <p className="text-newsletter">Al suscribirse, aceptas nuestra Politica de Privacidad</p>
          </div>
        </div>
        <div className="conteiner-row2-footer">
          <ul className="conteiner-links-footer">
            <li className="link-footer"><a className="link-footer" href="#">Inicio</a></li>
            <li className="link-footer"><a className="link-footer" href="#">Utilidades</a></li>
            <li className="link-footer"><a className="link-footer" href="#">Planes</a></li>
            <li className="link-footer"><a className="link-footer" href="#">Contacto</a></li>
          </ul>
          < Logo />
        </div>
        <p className="link-portfolio-dev">© Copyright 2025 GestionApp. Desarrollado por<a className="link-portfolio-dev link-dev" href="https://matiasealianelli.github.io/portafolio-web/" target="_blank"> Matias Alianelli</a></p>
      </footer>
    </>
  );
}