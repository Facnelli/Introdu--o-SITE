import styled from "styled-components";

export const HeaderStyle = styled.header`
  margin: 0;
  padding: 10px;
  color: #333;
  background-color: #ffffff;
  width: 100%;
  border-bottom: 2px solid #007bff;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 700px) {
  }
`;

export const Navigation = styled.div`
  display: flex;
  flex-direction: column;
  width: max-content;
  justify-content: center;
  align-items: center;
`;

export const Titulo = styled.h1`
  margin: 0;
  padding: 2%;
  font-size: 32px;
  font-weight: bold;

  @media (max-width: 700px) {
    font-size: 20px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  list-style-type: none;
  margin: 5px;
  padding: 0;
`;

export const Li = styled.li`
  margin: 0 10px;

  @media (max-width: 700px) {
    padding: 0px;
    margin: 0px;
    font-size: 10px;
    display: grid;
  }
`;

export const A = styled.a`
  color: #333;
  font-weight: bold;
  margin: 10px;
  transition: color 1s ease;

  &:hover {
    color: #007bff;
  }
`;

export const Ul = styled.ul`
  display: flex;

  @media (max-width: 700px) {
    display: flex;
    padding: 0px;
  }
`;

export const TopStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 0px;
`;

export const Imagem = styled.img`
  display: flex;
  justify-content: start;
  width: 150px;
  height: auto;
  float: left;

  @media (max-width: 700px) {
    width: 75px;
  }
`;
