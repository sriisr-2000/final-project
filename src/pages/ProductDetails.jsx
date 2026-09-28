import { useParams, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import useFetch from "../hooks/useFetch";
import Loader from "../components/Loader";

function ProductDetails() {
  const { id } = useParams();

  const dispatch = useDispatch();

  const { data, loading, error } =
    useFetch(`https://fakestoreapi.com/products/${id}`);

  if (loading) return <Loader />;

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <section className="details">
      <img src={data.image} alt={data.title} />

      <div>
        <h1>{data.title}</h1>

        <h2>${data.price}</h2>

        <p>{data.description}</p>

        <p>
          Category: <strong>{data.category}</strong>
        </p>

        <p>
          Rating: ⭐ {data.rating?.rate}
        </p>

        <button
          className="primary-btn"
          onClick={() => dispatch(addToCart(data))}
        >
          Add to Cart
        </button>

        <br />

        <Link to="/products">
          ← Back to Products
        </Link>
      </div>
    </section>
  );
}

export default ProductDetails;