import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style";
import { Imagem, SlideBox } from "./style";

import Escola1 from "../Images/EscolaDeEngenharia.jpg";
import Escola2 from "../Images/EscolaDeEngenharia2.jpg";
import Teste from "../Images/carrossel teste.webp";

import TextoSobreImagem from "../TextoAnimado/TextoAnimado";

const Carrossel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplayspeed: 4000,
  };

  return (
    <SlideBox>
      <div className="slideBox">
        <Slider {...settings}>
          <div>
            <Imagem src={Escola1} alt="Imagem"></Imagem>
            <TextoSobreImagem text="Texto sobre a imagem 1" />
          </div>
          <div>
            <Imagem src={Escola2} alt="Imagem"></Imagem>
            <TextoSobreImagem text="Texto sobre a imagem 1" />
          </div>
          <div>
            <Imagem src={Teste} alt="Imagem"></Imagem>
            <TextoSobreImagem text="Texto sobre a imagem 1" />
          </div>
        </Slider>
      </div>
    </SlideBox>
  );
};

export default Carrossel;
