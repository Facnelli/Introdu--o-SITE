import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const ResultadoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  text-align: center;
`;

const Pontuacao = styled.h2`
  font-size: 2em;
  margin-bottom: 20px;
`;

const Feedback = styled.p`
  font-size: 1.2em;
`;

export function Resultado() {
  const location = useLocation();
  const pontuacao = location.state?.pontuacao || 0;

  let feedback = "";
  if (pontuacao >= 12) {
    feedback =
      "Parabéns! Você mandou bem no quiz! Mostra que você já conhece bastante sobre Engenharia de Sistemas! 🚀";
  } else if (pontuacao >= 7) {
    feedback =
      "Você foi bem! Continue estudando e explorando o mundo da Engenharia de Sistemas para se aprofundar ainda mais. 📚";
  } else {
    feedback =
      "Parece que você ainda está começando sua jornada na Engenharia de Sistemas. Não desanime! Explore os recursos do site e continue aprendendo. 💪";
  }

  return (
    <ResultadoContainer>
      <h1>Resultado do Quiz</h1>
      <Pontuacao>
        Você acertou {pontuacao} de {location.state.perguntas.length} perguntas!
      </Pontuacao>
      <Feedback>{feedback}</Feedback>
    </ResultadoContainer>
  );
}