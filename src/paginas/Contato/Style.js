import styled from "styled-components";

export const Container = styled.div``;

export const Name = styled.h3``;

export const Section = styled.div`
  padding: 50px 0;
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const CardContentText = styled.div`
  background: #fff;
  max-width: 70%;
  background-color: white;
  margin: 1%;
  padding: 20px; // Adicione espaçamento interno
  border-radius: 8px; // Ajuste o valor para controlar o arredondamento
  text-align: justify;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); // Adicione uma sombra suave
`;

export const H2 = styled.h2`
  text-align: center;
  @media (max-width: 500px) {
    font-size: 22px;
  }
`;

export const P = styled.p`
  @media (max-width: 500px) {
    font-size: 15px;
  }
`;

export const Li = styled.li`
  @media (max-width: 500px) {
    font-size: 15px;
  }
`;
