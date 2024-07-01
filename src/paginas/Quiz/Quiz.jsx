import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  QuizContainer,
  QuestionContainer,
  Button as StyledButton,
  Menu,
  MenuItem,
  QuestionStyle,
  perguntas,
} from "./StyleQuiz";
import { Titulo } from "./Style";

function calcularPontuacao(respostasUsuario) {
  let acertos = 0;

  perguntas.forEach((pergunta, index) => {
    if (respostasUsuario[index] === pergunta.resposta) {
      acertos++;
    }
  });

  return acertos;
}

export function Quiz() {
  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [respostasUsuario, setRespostasUsuario] = useState([]);
  const navigate = useNavigate();

  const handleProximaPergunta = () => {
    setPerguntaAtual((prev) => Math.min(prev + 1, perguntas.length - 1));
  };

  const handlePerguntaAnterior = () => {
    setPerguntaAtual((prev) => Math.max(prev - 1, 0));
  };

  const handleMenuClick = (index) => {
    setPerguntaAtual(index);
  };

  const handleRespostaSelecionada = (respostaIndex) => {
    setRespostasUsuario((prevRespostas) => {
      const novasRespostas = [...prevRespostas];
      novasRespostas[perguntaAtual] = respostaIndex;
      return novasRespostas;
    });
  };

  const handleSubmit = () => {
    const pontuacao = calcularPontuacao(respostasUsuario);
    navigate("/resultado", { state: { pontuacao, perguntas } });
  };

  return (
    <QuizContainer>
      <Titulo>Quiz de Engenharia de Sistemas</Titulo>

      <Menu>
        {perguntas.map((_, index) => (
          <MenuItem
            key={index}
            active={index === perguntaAtual}
            onClick={() => handleMenuClick(index)}
          >
            {index + 1}
          </MenuItem>
        ))}
      </Menu>

      <QuestionContainer>
        <QuestionStyle>{perguntas[perguntaAtual].pergunta}</QuestionStyle>
        <ul>
          {perguntas[perguntaAtual].opcoes.map((opcao, index) => (
            <li key={index}>
              <label>
                <input
                  type="radio"
                  name="resposta"
                  value={index}
                  onChange={() => handleRespostaSelecionada(index)}
                />
                {opcao}
              </label>
            </li>
          ))}
        </ul>
      </QuestionContainer>

      <div>
        <StyledButton
          onClick={handlePerguntaAnterior}
          disabled={perguntaAtual === 0}
        >
          Voltar
        </StyledButton>
        {perguntaAtual === perguntas.length - 1 ? (
          <StyledButton onClick={handleSubmit}>Enviar</StyledButton>
        ) : (
          <StyledButton onClick={handleProximaPergunta}>Próxima</StyledButton>
        )}
      </div>
    </QuizContainer>
  );
}
