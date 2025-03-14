import React, { createContext, useState, useEffect } from "react";
import { fetchCurrencies } from "../api/front/currency";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, {
        ...product,
        quantity: 1,
        image: product.image || product.images?.[0]?.url || "https://via.placeholder.com/150"
      }];

    });
  };

  const updateQuantity = (id, amount) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + amount } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Функция для получения общего количества товаров
  const getCartCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const [currencies, setCurrencies] = useState([]);
  const [selectedCurrency, setSelectedCurrency] = useState(() => {
    const savedCurrency = localStorage.getItem("selectedCurrency");
    return savedCurrency ? JSON.parse(savedCurrency) : null;
  });

  useEffect(() => {
    if (selectedCurrency) {
      localStorage.setItem("selectedCurrency", JSON.stringify(selectedCurrency));
    }
  }, [selectedCurrency]);

  useEffect(() => {
    const loadCurrencies = async () => {
      const data = await fetchCurrencies();
      console.log(data);
      if (data.length > 0) {
        setCurrencies(Array.isArray(data) ? data : []);

        // Если в localStorage есть сохранённая валюта, используем её, иначе первую из списка
        const savedCurrency = localStorage.getItem("selectedCurrency");
        if (savedCurrency) {
          setSelectedCurrency(JSON.parse(savedCurrency));
        } else {
          setSelectedCurrency(data[0]); // По умолчанию первая валюта
        }
      }
    };
    loadCurrencies();
  }, []);

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQuantity, removeFromCart, getCartCount, currencies, selectedCurrency, setSelectedCurrency }}>
      {children}
    </CartContext.Provider>
  );
};
