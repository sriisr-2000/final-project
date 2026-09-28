import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="small-title"><h2>WELCOME TO</h2></p>

        <h1>
          SG
          <span> Dress Shop</span>
        </h1>

        <p>
          Discover modern fashion, elegant styles and
          premium collections for every occasion.</p>
          <p>
          "Fashion is part of the daily air and it changes all the time, with all the events. You can even see the approaching of a revolution in clothes. You can see and feel everything in clothes." 
        </p>

        <Link to="/products" className="primary-btn">
          Shop Now
        </Link>
      </div>
    </section>
  );
}

export default Home;