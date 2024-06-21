import { useState } from "react";
import { Pizza } from "../Type/Type";
import { set } from "firebase/database";
import Card from "./Card";
import Modal from "./Modal";

interface ListProps {
pizzas: Pizza[];
addToCart: (pizza: Pizza) => void;
}



const ListPizza: React.FC<ListProps> = ({ pizzas, addToCart }) => {

  const [selectedPizza, setSelectedPizza] = useState<Pizza | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCartClick = (pizza: Pizza) => {
    setSelectedPizza(pizza);
    setIsModalOpen(true);
  }
  const handleCloseModal = (pizza: Pizza) => {
    setSelectedPizza(null);
    setIsModalOpen(false);
  }


  return (
    <div id="pizzaList" className="max-w-[1000px] w-full mx-auto p-5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {pizzas.map((pizza) => (
          <Card key={pizza.name} pizza={pizza} addToCart={addToCart} onCardClick={handleCartClick} />
        ))}
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} pizza={selectedPizza} />
    </div>
  )
}

export default ListPizza;