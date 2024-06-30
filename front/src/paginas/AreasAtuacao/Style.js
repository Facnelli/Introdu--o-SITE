import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  margin-top:10%;
`;

export const CardsStyle = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: min-content;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 1%;
  padding-left: 1%;
  padding-right: 1%;
  margin-top: 30px;
`;

export const Cards = styled.div`
  height: 700px;
  width: 1000px;
  background-color: #f7f7f7;
  padding: 30px;
  border-radius: 1%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: fit-content;
`;

export const CampoAreasStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  margin-top:10%;
  background-color: white;
  text-align: center;
`;



export const Titulo = styled.h1`
  margin-top: 4%; 
`;
export const Subtitulo = styled.h3``;
