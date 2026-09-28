import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Login from "./pages/Login";

import Services from "./pages/Services";
import Men from "./pages/Men";
import Women from "./pages/Women";

function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Routes>

          {/* Main Routes */}

          <Route path="/" element={<Home />} />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/products"
            element={<Products />}
          />

          {/* Dynamic Route */}

          <Route
            path="/products/:id"
            element={<ProductDetails />}
          />

          <Route
            path="/cart"
            element={<Cart />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

          <Route
            path="/login"
            element={<Login />}
          />

          {/* Nested Routes */}

          <Route
            path="/services"
            element={<Services />}
          >
            <Route
              path="men"
              element={<Men />}
            />

            <Route
              path="women"
              element={<Women />}
            />
          </Route>

          {/* 404 */}

          <Route
            path="*"
            element={
              <div className="page">
                <h1>404</h1>
                <p>Page Not Found</p>
              </div>
            }
          />

        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;