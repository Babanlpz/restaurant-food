"use client";

import { useState } from "react";
import { Pizza } from "./Type/Type";
import Nav from "./components/Nav";
import Header from "./components/Header";

export default function Home() {
  const [cardQuantity, setCardQuantity] = useState(0);

  const addToCart = (pizza: Pizza) => {
    setCardQuantity(cardQuantity + 1);
  };

  return (
    <>
      <Nav cartQuantity={cardQuantity} />
      <Header />
    </>
  );
}
