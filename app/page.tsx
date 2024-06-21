"use client";

import { useState, useEffect } from "react";
import { Pizza } from "./Type/Type";
import Nav from "./components/Nav";
import Header from "./components/Header";
import {db } from "./db/firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ListPizza from "./components/ListPizza";


export default function Home() {
  const [cardQuantity, setCardQuantity] = useState(0);
  const [pizzas, setPizzas] = useState<Pizza[]>([]);


  useEffect(() => {
   const fetchData = async () => {
    const pizzaCollection = collection(db, "pizza");
    const pizzaSnapshot = await getDoc(pizzaCollection);
    const pizzaData = pizzaSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Pizza[];
    setPizzas(pizzaData);
   }
    fetchData();
  }, []);

  const addToCart = (pizza: Pizza) => {
    setCardQuantity(cardQuantity + 1);
  };

  return (
    <>
      <Nav cartQuantity={cardQuantity} />
      <Header />
      <ListPizza />
      <ToastContainer />
    </>
  );
}
