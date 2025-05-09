import "../styles/Logo.css";
import "/src/styles/Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Logo() {
    return (
        <>
            <a href="#" title="Inicio" className="link-logo-header">
              <div className="conteiner-logo-header">
                <i className="bi bi-boxes icon-logo-header"></i>
                <p className="logo">GestionApp</p>
              </div>
            </a>
        </>
    );
}