"use client";

import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Pizza } from "./Type/Type";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ListPizza from "./components/ListPizza";
import Nav from "./components/Nav";
import { db } from "./db/firebaseConfig";

export default function Home() {
  const [cardQuantity, setCardQuantity] = useState(0);
  const [pizzas, setPizzas] = useState<Pizza[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const pizzaCollection = collection(db, "pizza");
      const pizzaSnapshot = await getDocs(pizzaCollection);
      const pizzaData = pizzaSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Pizza[];
      setPizzas(pizzaData);
    };
    fetchData();
  }, []);

  const addToCart = (pizza: Pizza) => {
    setCardQuantity(cardQuantity + 1);
  };

  return (
    <>
      <Nav cartQuantity={cardQuantity} />
      <Header />
      <ListPizza pizzas={pizzas} addToCart={addToCart} />
      <ToastContainer />
      <Footer />
    </>
  );
}
