import "/src/styles/styles Price/Price.css";
import CardPriceMonth from "./CardsPriceMonth.jsx";

export default function Price() {
  return (
    <>
      <article className="price" id="price">
        <h3 className="title-sections">Planes</h3>
        <p className="text-section-price">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
          provident, error, odio cum, impedit pariatur rerum corrupti veritatis
          dolor perferendis delectus aperiam perspiciatis adipisci! Aut eligendi
          eaque voluptatem nulla facilis!
        </p>
        <div className="conteiner-width">
          <div className="conteiner-btns-date">
            <button
              onClick={() => {
                document.querySelector(".btn-month").addEventListener("click", () => {
                  console.log("Button month clicked");
                  document.querySelector(".btn-month").classList.add("btn-date-active");
                  document.querySelector(".btn-year").classList.remove("btn-date-active");
                });
              }}
              className="btn btn-press-date btn-month btn-date-active">
              Mensual
            </button>
            <button
              onClick={() => {
                document.querySelector(".btn-year").addEventListener("click", (event) => {
                  console.log("Button Year clicked");
                  document.querySelector(".btn-year").classList.add("btn-date-active");
                  document.querySelector(".btn-month").classList.remove("btn-date-active");
                  event.preventDefault;
                });
              }}
              className="btn btn-press-date btn-year">
              Anual
            </button>
          </div>
        </div>
        <CardPriceMonth />
        <div className="conteiner-width conteiner-info-pay">
          <div className="conteiner-pay-mp">
            <p className="text-pay-mp">Paga en el momento con:</p>
            <img src="/assets/svg-mp/MP_RGB_HANDSHAKE_color-azul_hori-izq.svg" className="icon-mp-azul" alt="" />
          </div>

          <p className="medios-pago-disponible">Todos los medios de pago disponibles</p>
        </div>
      </article>
    </>
  );
}