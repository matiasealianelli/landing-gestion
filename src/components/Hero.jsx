import "/src/styles/Hero.css";

export default function Hero() {
    return (
      <>
        <article id="hero" className="hero">
          <div className="cont-info-hero">
            <h1 className="title-hero">Organiza tu tiempo de manera eficiente</h1>
            <p className="text-hero">Nuestra aplicacion te ayuda a gestionar tus tareas y optimizar tu tiempo con herramientas innovadoras como el reloj pomodoro y un calendario integrado. Simplifica tu vida diaria y alcanza tus metas con facilidad.</p>
            <div className="cont-btn-hero">
              <button title="Registrate ahora" className="btn-hero">Registrate</button>
              <button title="Inicia sesion ahora" className="btn-hero">Iniciar sesion</button>
            </div>          
          </div>
        </article>
        </>
  );
}