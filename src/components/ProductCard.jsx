import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />

      <div className="product-content">
        <h3>{product.title}</h3>

        <p>${product.price}</p>

        <div className="card-buttons">
          <Link to={`/products/${product.id}`}>
            View
          </Link>

          <button onClick={() => dispatch(addToCart(product))}>
            Add Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;