import styled from "styled-components";

export const HeaderStyle = styled.header`
  margin: 0;
  padding: 10px;
  color: #333;
  width: 100%;
  border-bottom: 2px solid #007bff;
  display: flex;
  justify-content: center;
  align-items: center;
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
  align-items: center;
  text-align: center;
`;

export const Nav = styled.nav`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const Li = styled.li`
  margin: 0 10px;
`;

export const A = styled.a`
  color: #333;
  font-weight: bold;
  transition: color 0.2s ease;

  &:hover {
    color: #007bff;
  }
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: row;
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
`;
