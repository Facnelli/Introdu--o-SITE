import { Cards, CardsStyle, H2 } from "./Style";
import software from "../../Images/DesenvolvimentoSoftware.jpg";
import Automacao from "../../Images/Automacao.jpg";
import Redes from "../../Images/Redes.jpg";
import AI from "../../Images/AI.jpg";
import IOT from "../../Images/IOT.jpg";

export function CampoAreas({ titulo, descricao, imagem }) {
  return (
    <CardsStyle>
      <Cards>
        <H2>{titulo}</H2>
        <img
          style={{ width: "200px", height: "150px" }}
          src={imagem}
          alt="imagem"
        ></img>
        <p>{descricao}</p>
      </Cards>
    </CardsStyle>
  );
}
