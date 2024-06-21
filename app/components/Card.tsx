import React, { useState } from "react";
import { toast } from "react-toastify";
import { Pizza } from "../Type/Type";

interface CardProps {
  pizza: Pizza;
  addToCart: (pizza: Pizza) => void;
  onCardClick: (pizza: Pizza) => void;
}

const Card: React.FC<CardProps> = ({ pizza, addToCart, onCardClick }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart(pizza);
    setQuantity(quantity + 1);
    toast.success(`${pizza.name} added to cart`);
  };

  return (
    <div className="border border-gray-200 rounded-md p-4 shadow-md relative cursor-pointer hover:mt-[-10px] transition-all">
      <img
        src={pizza.image}
        alt={pizza.name}
        className="w-auto h-auto object-content mb-4"
      />
      <div className="bg-orange-700 text-white py-2 px-3 rounded-md font-bold absolute top-5 right-5">
        {pizza.price} €
      </div>

      <div className="flex items-center justify-center gap-2">
        <button
          onClick={() => onCardClick(pizza)}
          className="bg-orange-600 text-white px-4 py-2 mt-4 rounded-md hover:bg-orange-700"
        >
          Voir Pizza
        </button>
        <button
          onClick={handleAddToCart}
          className="bg-orange-600 text-white px-4 py-2 mt-4 rounded-md hover:bg-orange-700"
        >
          Commander
        </button>
      </div>
    </div>
  );
};

export default Card;
