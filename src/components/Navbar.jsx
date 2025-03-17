import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import React Icons

const navigation = [
  { id: 1, nav: "Home", href: "#" },
  { id: 2, nav: "About", href: "#about" },
  { id: 3, nav: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="z-50 fixed w-full bg-black text-white font-bold shadow-md">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-xl">Brand Name</div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8">
          {navigation.map((navbar) => (
            <li
              key={navbar.id}
              className="hover:scale-110 hover:text-white/50 transition-all duration-300 ease-in-out"
            >
              <a href={navbar.href}>{navbar.nav}</a>
            </li>
          ))}
        </ul>

        {/* Burger Button (Mobile) */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>
      </div>

      {/* Mobile Navigation (Sliding Menu) */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black text-white transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out shadow-lg md:hidden`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button onClick={() => setIsOpen(false)}>
            <FaTimes size={28} />
          </button>
        </div>

        {/* Mobile Navigation Links */}
        <ul className="flex flex-col space-y-4 p-6">
          {navigation.map((navbar) => (
            <li
              key={navbar.id}
              className="hover:text-white/50 transition-all duration-300 ease-in-out text-lg"
            >
              <a href={navbar.href} onClick={() => setIsOpen(false)}>
                {navbar.nav}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
