import "/src/styles/Characteristics.css";

export default function Characteristics() {
  return (
    <>
      <article id="caracteristicas" className="caracteristicas">
        <div className="conteiner-contents-caracteristicas">
          <div className="conteiner-img-caracteristicas">
            <img className="img-reunion-caracteristicas" src="assets/img/imgReunion.jpg" alt="" />
          </div>
          <div className="conteiner-info-caracteristicas">
            <i className="bi bi-boxes icon-box"></i>
            <h3 className="subtitle-caracteristicas">Descubre las caracteristicas claves de nuestra aplicación de gestión de tareas.</h3>
            <p className="text-caracteristicas">Nuestra aplicación te ayuda a organizar tu tiempo de manera eficente. Con herramientas como el reloj Pomodoro y un calendario integrado, podrás gestionar tus tareas de forma efectiva.</p>
            <button title="Conoce mas información" className="btn-caracteristicas" href="#">Mas información</button>
          </div>
        </div>
      </article>
    </>
  );
}