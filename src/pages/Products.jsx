import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";
import useFetch from "../hooks/useFetch";

function Products() {
  const { data, loading, error } =
    useFetch("https://fakestoreapi.com/products");

  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get("search") || "";

  const category = searchParams.get("category") || "all";

  const filteredProducts = data.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "all" ||
      product.category === category;

    return matchesSearch && matchesCategory;
  });

  const handleSearch = (e) => {
    setSearchParams({
      search: e.target.value,
      category,
    });
  };

  const handleCategory = (e) => {
    setSearchParams({
      search,
      category: e.target.value,
    });
  };

  if (loading) return <Loader />;

  if (error) {
    return <h2 className="error">{error}</h2>;
  }

  return (
    <section className="page">
      <h1>Our Products</h1>

      <div className="filters">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={handleSearch}
        />

        <select
          value={category}
          onChange={handleCategory}
        >
          <option value="all">All Categories</option>
          <option value="men's clothing">
            Men's Clothing
          </option>
          <option value="women's clothing">
            Women's Clothing
          </option>
          <option value="jewelery">
            Jewellery
          </option>
          <option value="electronics">
            Electronics
          </option>
        </select>
      </div>

      <p>
        Showing {filteredProducts.length} products
      </p>

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
}

export default Products;