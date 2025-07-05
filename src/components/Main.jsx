import React, { useState, useEffect } from "react";
import imgMeme from "../assets/kevin_hart.jpg";
const Main = () => {
  const [meme, setMeme] = useState({
    topText: "Dev front-end",
    bottomText: "Dev back-end",
    imageUrl: "https://i.imgflip.com/98qr33.jpg",
  });

  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes)) // objet en tableau de données
      .catch((err) => console.error(err));
  }, []);

  function handleNewMeme(e) {
    e.preventDefault();
    const randomIndex = Math.floor(Math.random() * allMemes.length); // obtenir un index aléatoire dans notre memesarray
    const randomMeme = allMemes[randomIndex]; // correspond à un objet aléatoire dans notre tableau

    if (randomMeme) {
      // obtenir l'image de notre randommeme et l'attibuer à imageUrl
      setMeme((prev) => ({
        ...prev,
        imageUrl: randomMeme.url,
      }));
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setMeme((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <main className="p-10">
      <form onSubmit={handleNewMeme}>
        <div className="flex justify-center items-center gap-8 mb-6">
          <div className="flex flex-col">
            <label
              htmlFor="topText"
              className="text-sm font-medium text-gray-700 mb-2 text-center"
            >
              Texte du haut
            </label>
            <input
              id="topText"
              type="text"
              name="topText"
              placeholder="WTF"
              className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2"
              value={meme.topText}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="bottomText"
              className="text-sm font-medium text-gray-700 mb-2 text-center"
            >
              Texte du bas
            </label>
            <input
              id="bottomText"
              type="text"
              name="bottomText"
              placeholder="An alien ?"
              className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2"
              value={meme.bottomText}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="flex justify-center">
          <button className="px-8 py-2 bg-blue-700 text-white rounded-lg">
            🖼️ Obtenir une nouvelle image
          </button>
        </div>
      </form>
      <div className="mt-8 relative w-full h-80">
        <img
          src={meme.imageUrl}
          alt="image du même"
          className="w-full h-full object-contain"
        />
        <span className="absolute top-2 left-1/2 transform -translate-x-1/2 text-white text-2xl font-extrabold uppercase drop-shadow-[2px_2px_0_rgba(0,0,0,1)]">
          {meme.topText}
        </span>
        <span className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white text-2xl font-extrabold uppercase drop-shadow-[2px_2px_0_rgba(0,0,0,1)]">
          {meme.bottomText}
        </span>
      </div>
    </main>
  );
};

export default Main;
