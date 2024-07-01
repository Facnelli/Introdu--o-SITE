import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Titulo = styled.h1`
  @media (max-width: 500px) {
    font-size: 20px;
  }
`;

export const Subtitulo = styled.h3``;

export const QuestionsStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 10px;
  width: 50%;
  background-color: #dfdfdf;
  border-radius: 10px;
  color: #272727;
`;

export const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 5px;
`;

export const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  font-weight: bold;
  height: 50px;
  width: 120px;
  border-radius: 15px;

  &:hover {
    background-color: #fff;
    color: #007bff;
    cursor: pointer;
  }
`;

export const CampoQuizStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  margin-top: 10%;
  background-color: white;
  text-align: center;
`;
