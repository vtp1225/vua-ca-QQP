import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export default function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("access_token"));

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    if (token) {
      syncLocalCartToBackend(token).then(() => {
        fetchCartItems(token);
      });
    }
  }, [token]);

  const updateToken = (newToken) => {
    setToken(newToken);
  }

  const logOut = () => {
    setCartItems([]);
    localStorage.removeItem("access_token");
    localStorage.removeItem("cart");
  };

  const fetchCartItems = async (currentToken) => {
    const authToken = currentToken || token;
    if (!authToken) return;

    try {
      const res = await fetch("http://10.17.26.168:8080/VuaCaQPQ/cart/items", {
        headers: {
          Authorization: `Bearer ${authToken}`,
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) throw new Error("Thất bại");

      const data = await res.json();
      setCartItems(data.result || []);
    } catch (err) {
      setCartItems([]);
    }
  };

  const syncLocalCartToBackend = async (authToken) => {
    if (!authToken) return;

    const localCart = localStorage.getItem("cart");
    if (!localCart) return;

    const cartData = JSON.parse(localCart);
    for (const item of cartData) {
      await addToCartAPI(item, item.quantity, authToken);
    }
    localStorage.removeItem("cart");
  };

  const addToCartAPI = async (product, quantity, authToken) => {
    try {
      await fetch("http://10.17.26.168:8080/VuaCaQPQ/cart/items", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify({
          productId: product.productId,
          quantity,
          added_at: new Date().toISOString()
        }),
      });
    } catch (err) {
      console.error(err);
    }
  }

  const addToCart = async (product, quantity) => {
    if (!token) {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      const existingItem = cart.find(i => i.productId === product.productId);
      if (existingItem) existingItem.quantity += quantity;
      else
        cart.push({
          productId: product.productId,
          name: product.name,
          description: product.description,
          imageUrl: product.imageUrl,
          price: product.price,
          quantity,
        });
      localStorage.setItem("cart", JSON.stringify(cart));
      setCartItems(cart);
      return;
    }

    await addToCartAPI(product, quantity, token);
    await fetchCartItems(token);
  };

  const removeFromCart = async (productId, id) => {
    if (!token) {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart = cart.filter(item => item.productId !== productId);
      localStorage.setItem("cart", JSON.stringify(cart));
      setCartItems(cart);
      return;
    }

    try {
      const res = await fetch(`http://10.17.26.168:8080/VuaCaQPQ/cart/items/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error("Không thể xóa sản phẩm");

      setCartItems(prev => prev.filter(item => item.product.productId !== productId));
    } catch (err) {
      fetchCartItems(token);
    }
  };

  const updateQuantity = async (productId, quantity, id) => {
    if (!token) {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      const existingItem = cart.find(item => item.productId === productId);
      if (existingItem) existingItem.quantity = quantity;
      localStorage.setItem("cart", JSON.stringify(cart));
      setCartItems(cart);
      return;
    }

    try {
      const res = await fetch(`http://10.17.26.168:8080/VuaCaQPQ/cart/items/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({ quantity }),
      });
      if (!res.ok) throw new Error("Không thể cập nhật");

      setCartItems(prev =>
        prev.map(item => (item.product.productId === productId ? { ...item, quantity } : item))
      );
    } catch (err) {
      fetchCartItems(token);
    }
  };

  const increase = (productId, id) => {
    const item = cartItems.find(p => {
      const pId = p.product ? p.product.productId : p.productId;
      return pId === productId;
    });
    if (item) updateQuantity(productId, item.quantity + 1, id);
  };

  const decrease = (productId, id) => {
    const item = cartItems.find(p => {
      const pId = p.product ? p.product.productId : p.productId;
      return pId === productId;
    });
    if (item && item.quantity > 1) updateQuantity(productId, item.quantity - 1, id);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        logOut,
        updateToken,
        fetchCartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        increase,
        decrease,
        setCartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}