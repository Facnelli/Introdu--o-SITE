import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style";
import { Imagem, SlideBox } from "./style";

import Escola1 from "../Images/EscolaDeEngenharia.jpg";
import mapa from "../Images/mapa.jpg";
import FrenteEngenharia from "../Images/Frente engenharia.jpeg";

const Carrossel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplayspeed: 4000,
  };

  return (
    <SlideBox>
      <div className="slideBox">
        <Slider {...settings}>
          <div>
            <Imagem src={Escola1} alt="Imagem"></Imagem>
          </div>
          <div>
            <Imagem src={mapa} alt="Imagem"></Imagem>
          </div>
          <div>
            <Imagem src={FrenteEngenharia} alt="Imagem"></Imagem>
          </div>
        </Slider>
      </div>
    </SlideBox>
  );
};

export default Carrossel;
