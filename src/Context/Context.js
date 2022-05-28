import { createContext, useEffect, useState } from "react";
import { commerce } from "../components/lib/commerce";

export const AppContex = createContext();
function ContextProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [wishList, setWishList] = useState({});

  // fetching products
  const fetchProduct = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };
  //fetching cart
  const fetchCart = async () => {
    const fetchedCart = await commerce.cart.retrieve();
    setCart(fetchedCart);
  };
  // fetchWishList
  const addToCart = async (productId, quanity) => {
    const addCart = await commerce.cart.add(productId, quanity);
    setCart(addCart.cart);
  };

  const clearCart = async () => {
    const { cart } = await commerce.cart.empty();
    setCart(cart);
  };
  const removeItem = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);
    setCart(cart);
  };
  const updateQuantity = async (productId, quantity) => {
    const response = await commerce.cart.update(productId, { quantity });
    setCart(response.cart);
  };

  useEffect(() => {
    fetchProduct();
    fetchCart();
  }, []);
  return (
    <AppContex.Provider
      value={{
        products,
        addToCart,
        cart,
        clearCart,
        removeItem,
        updateQuantity,
      }}>
      {children}
    </AppContex.Provider>
  );
}

export default ContextProvider;
