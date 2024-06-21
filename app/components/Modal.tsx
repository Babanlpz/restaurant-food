import { Pizza } from "../Type/Type";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  pizza: Pizza | null;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, pizza }) => {
  if (!isOpen || !pizza) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-3 rounded-md shadow-md max-w-[400px] relative">
        <span
          className="bg-orange-600 hover:bg-orange-700 cursor-pointer p-2 absolute top-2 right-2 text-white rounded-md"
          onClick={onClose}
        >
          &times;
        </span>
        <img
          src={pizza.image}
          alt={pizza.name}
          className="w-full h-auto object-contain mb-4"
        />
        <h2 className="text-xl font-semibold mb-2 text-stone-700">
          {pizza.name}
        </h2>
        <p className="text-stone-700 mb-2">
          <b>Ingrédients:</b> {pizza.ingredients}
        </p>
        <p className="text-stone-700 mb-2">
          <b>Tailles:</b> L / XL / XXL
        </p>
        <p className="text-orange-700 font-black text-xl">{pizza.price}</p>
      </div>
    </div>
  );
};

export default Modal;
