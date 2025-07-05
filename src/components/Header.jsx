import React from "react";
import Trollface from "../assets/troll-face.png";

const Header = () => {
  return (
    <header className="flex justify-center items-center gap-2 bg-blue-900 p-4">
      <img src={Trollface} alt="troll-face" className="w-12 h-12" />
      <h1 className="text-white text-lg">Générateur de memes</h1>
    </header>
  );
};

export default Header;
