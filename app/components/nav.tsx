"use client";

import { FaHome, FaPizzaSlice, FaShoppingCart } from "react-icons/fa";
import { GiFullPizza } from "react-icons/gi";
import { IoMdMail } from "react-icons/io";

import { useRouter } from "next/navigation";

interface NavProps {
  cartQuantity: number;
}

const Nav: React.FC<NavProps> = ({ cartQuantity }) => {
  const router = useRouter();

  const menu = [
    { name: "Acceuil", icon: <FaHome /> },
    { name: "Nos pizzas", icon: <FaPizzaSlice /> },
    { name: "Contact", icon: <IoMdMail /> },
  ];

  return (
    <nav className="fixed z-100 shadow-md w-full bg-white h-50 flex justify-between items-center p-5 text-col-700">
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => router.push("/")}
      >
        <GiFullPizza className="text-3xl text-orange-700" />
        <span className="font-black">GO Pizza</span>
      </div>
      <ul className="hidden md:flex items-center gap-4">
        {menu.map((item, index) => (
          <li
            className="flex items-center gap-2 cursor-pointer hover:text-orange-700 hover:underline"
            key={index}
          >
            <span>{item.icon}</span>
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
      <button className="bg-orange-700 text-white px-4 py-2 rounded-md hover:bg-orange-800 flex items-center gap-2">
        <FaShoppingCart />
        <span>{cartQuantity}</span>
      </button>
    </nav>
  );
};

export default Nav;
