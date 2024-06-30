import { Cards, CardsStyle } from "./Style";
import ufmg from "../../Images/ufmg.jpeg";

export function CampoAreas({ titulo, descricao, imagem }) {
  return (
    <CardsStyle>
      <Cards>
        <h2>{titulo}</h2>
        <img
          style={{ width: "150px", height: "auto" }}
          src={ufmg}
          alt="imagem"
        ></img>
        <p>{descricao}</p>
      </Cards>
    </CardsStyle>
  );
}