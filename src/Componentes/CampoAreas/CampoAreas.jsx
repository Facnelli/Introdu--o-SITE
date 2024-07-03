import { Cards, CardsStyle, H2 } from "./Style";

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

export function CampoContatos({ nome, email }) {
  return (
    <CardsStyle>
      <Cards>
        <H2>{nome}</H2>
        <p>{email}</p>
      </Cards>
    </CardsStyle>
  );
}
