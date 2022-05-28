import { Routes, Route, Link } from "react-router-dom";
import {
  Nav,
  Shop,
  Home,
  Cart,
  About,
  Contact,
  Wishlist,
  CheckoutMain,
} from "./components";
import Footer from "./components/footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NewsLeter from "./components/NewsLeter";
function App() {
  return (
    <div className="App ">
      <Nav />

      <div className="main">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/shop" element={<Shop />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/wishlist" element={<Wishlist />} />
          <Route exact path="/checkoutMain" element={<CheckoutMain />} />
        </Routes>
      </div>
      <NewsLeter />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
