import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../styles/styles Price/CardsPrice.css";
import InfoCardsPrice from "./InfoCardsPriceMonth.json";
import "../../index.css";

export default function CardPrice() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          360: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          500: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3, spaceBetween:0, },
        }}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper">
        {InfoCardsPrice.map((info, index) => (
          <SwiperSlide className="card-price" key={info.id}>
            <div className="conteiner-title-icon">
              <h4 className="title-card-price">
                {InfoCardsPrice[index].titulo}
              </h4>
              <i className="bi bi-boxes icon-box icon-card-price"></i>
            </div>
            <div className="utilidades-price">
              {InfoCardsPrice[index].utilidades.map((utilidad, i) => (
                <p key={i} className="utilidades-cards-price">
                  <i className="bi bi-check2"></i>{utilidad}
                </p>
              ))}
            </div>
            <div className="conteiner-descuento">
              <p className="priceOld-card-price">
                <span className="line-cross-out-price"></span>
                Antes ${InfoCardsPrice[index].precioAntiguo}
              </p>
              <p className="percent-card-price">
                Ahorra un {InfoCardsPrice[index].descuento}%
              </p>
            </div>
            <p className="newPrice-card">
              ${InfoCardsPrice[index].precioNuevo}
            </p>
            <button className="btn btn-press-price">Elegir plan</button>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}