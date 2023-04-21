import { useContext } from "react";
import { CartContext } from "../../context/Cart-context";
import "./Item.css";

const Item = ({ item }) => {
  const { addCartData } = useContext(CartContext);
  return (
    <div>
      <div className="card">
        <img
          className="card-image"
          src={`http://localhost:1337${item?.image?.data?.attributes?.url}`}
          alt="game"
        />

        <article className="card-title"><h3>{item.title}</h3></article>
        <article className="card-description">{item.description}</article>

        <section className="card-footer">
          <article className="price"><h3>₹ {item.price}</h3></article>

          <button
            className="cart-button"
            onClick={() => {
              addCartData(item);
            }}
          >
            Add to Cart
          </button>
        </section>
      </div>
    </div>
  );
};

export default Item;
