import { useState, useEffect } from "react";

import slider1 from "../assets/images/slider1.jpg";
import slider2 from "../assets/images/slider2.jpg";
import slider3 from "../assets/images/slider3.jpg";

function Slider() {

  const images = [slider1, slider2, slider3];

  const [current, setCurrent] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrent((prev) => (prev + 1) % images.length);

    }, 3500);

    return () => clearInterval(interval);

  }, []);

  return (

    <div className="slider-container">

      <img
        src={images[current]}
        alt="Slider"
        style={{
          width: "100%",
          height: "550px",
          objectFit: "cover",
          borderRadius: "18px"
        }}
      />

      <div className="slider-overlay">

        <h1>Tomb Raider</h1>

        <h3 className="subtitle">
          La aplicación Companion de la saga Tomb Raider
        </h3>

        <p>
          Descubre personajes, juegos, productos y participa
          en la comunidad desde una única plataforma.
        </p>

        <a
          href="/characters"
          className="home-button"
        >
          Explorar ahora
        </a>

      </div>

    </div>

  );

}

export default Slider;