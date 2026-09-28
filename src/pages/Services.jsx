import { Link, Outlet } from "react-router-dom";

function Services() {
  return (
    <section className="page">
      <h1>Our Services</h1>

      <p>
        Explore the services provided by SG Dress Shop.
      </p>

      <div className="service-links">
        <Link to="men">Men's Collection</Link>

        <Link to="women">Women's Collection</Link>
      </div>

      <div className="nested-content">
        <Outlet />
      </div>
    </section>
  );
}

export default Services;