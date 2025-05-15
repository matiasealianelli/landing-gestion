import "/src/styles/styles Price/Price.css";
import CardPrice from "./CardsPrice.jsx"

export default function Price() {
    return (
      <>
        <article className="price" id="price">
          <h3 className="title-sections">Precios</h3>
          <p className="text-section-price">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus provident, error, odio cum, impedit pariatur rerum corrupti veritatis dolor perferendis delectus aperiam perspiciatis adipisci! Aut eligendi eaque voluptatem nulla facilis!</p>
          <CardPrice />
        </article>
      </>
  );
}