import "/src/styles/Contact.css";

export default function Contact() {
  return (
    <>
      <article id="contact" className="contact">
        <h2 className="title-section-contact title-sections">Contáctanos</h2>
        <p className="text-section-contact">
          Estamos aquí para ayudardarte con cualquier consulta, contactanos a través de este formulario sin tener que salir de nuestra web
        </p>
        <div className="conteiner-cols-contact">
          <form className="col1-contact">
            <label className="label-form-contact" >Nombre:</label>
            <input className="input-contact" type="text" required />
            <label className="label-form-contact" >Correo Electronico:</label>
            <input className="input-contact" type="email" required />
            <label className="label-form-contact" >Celular:</label>
            <input className="input-contact" type="number" required />
            <label className="label-form-contact" >Mensaje:</label>
            <textarea placeholder="Escribe tu mensaje aquí" className="input-contact" required name="" id=""></textarea>
            <input className="btn-form-contact" type="submit" value="Enviar Mensaje" />
          </form>
          <div className="col2-contact">
            <img
              className="image-contact"
              src="assets/img/imgSendEmail.jpg"
              alt="Imagen de una persona enviando un correo electronico"
            />
          </div>
        </div>
      </article>
    </>
  );
}