import "../styles/Utilities.css";

export default function Utilities() {
    return (
        <>
            <article id="utilities" className="utilities">
                <div className="conteiner-utilities">
                    <div className="conteiner-list-utilities">
                        <h5 className="title-list">Utilidades</h5>
                        <ul className="list-utilities">
                            <li className="utility">Gestión de tareas</li>
                            <li className="utility">Organización del tiempo</li>
                            <li className="utility">Configuración del Perfil de usuario</li>
                            <li className="utility">Eleva tu productividad</li>
                            <li className="utility">Preguntas frecuentes</li>
                        </ul>
                    </div>
                    <div className="conteiner-description-utilities">
                        <div className="contiener-description">
                            <h6 className="subtitle-utility">Gestión de tareas</h6>
                            <p className="text-utility">La gestión de tareas es esencial para la productividad. Con nuestra aplicación, podrás organizar tu tiempo de manera eficiente y efectiva</p>
                            </div>
                        <div className="contiener-description">
                            <h6 className="subtitle-utility">Organización del tiempo</h6>
                            <p className="text-utility">Ofrecemos un calendario integrado y un reloj pomodoro para maximizar tu enfoque y minimizar distracciones. ¡Descubre como puedes mejorar tu rutina diaria!</p>
                            </div>
                        <div className="contiener-description">
                            <h6 className="subtitle-utility">Configuración del Perfil de Usuario</h6>
                            <p className="text-utility">La personalización de tu perfil te permite adaptar la aplicación a tus necesidades. Cambia tu contraseña y ajusta tus preferencias con facilidad.</p>
                            </div>
                        <div className="contiener-description">
                            <h6 className="subtitle-utility">Eleva tu productividad</h6>
                            <p className="text-utility">"La clave del éxito es la organización y la planificación. Con nuestra herramienta, llevaras tu productividad al siguiente nivel."</p>
                            </div>
                        <div className="contiener-description">
                            <h6 className="subtitle-utility">Preguntas frecuentes</h6>
                            <p className="text-utility">No olvides revisar nuestras <a className="link-faq" href="#">preguntas frecuentes</a> para resolver cualquier duda que puedas tener. Estamos aqui para ayudarte a aprovechar al maximo nuestra aplicación.</p>
                            </div>
                    </div>
                </div>
            </article>
        </>
    );
}