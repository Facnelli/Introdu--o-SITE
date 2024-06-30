import Questions from "../../Componentes/Questions/Questions";
import { Footer } from "../../Footer/Footer";
import { Header } from "../../header/header";
import { Container } from "../Home/Style";
import { Titulo, Subtitulo, QuestionsStyle, Button, ButtonDiv } from "./Style";
import React, { useState } from "react";
import { CiCircleChevDown } from "react-icons/ci";

export function Quiz() {
  const [activeQuestion, setActiveQuestion] = useState(null); // Track the currently active question index

  const toggleQuestion = (index) => {
    // Function to handle click on a question icon
    setActiveQuestion(index === activeQuestion ? null : index); // Toggle active state for clicked question
  };

  return (
    <Container>
      <Titulo>Bem vindo ao Quiz de Engenharia de Sistemas</Titulo>
      <Subtitulo>
        Aqui você ira se deparar com cenários e possíveis soluções, escolha com
        sabedoria.
      </Subtitulo>

      {Array.from(
        { length: 4 },
        (
          _,
          index // Render questions dynamically
        ) => (
          <QuestionsStyle key={index}>
            {!activeQuestion || activeQuestion !== index ? ( // Show icon only if not active
              <CiCircleChevDown
                style={{ fontSize: "35px", display: "flex" }}
                onClick={() => toggleQuestion(index)}
              />
            ) : null}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "10px",
              }}
            ></div>
            <Questions
              numero={`Questão ${index + 1}`} // Use index for proper numbering
              alternativa1="um"
              alternativa2="doisss"
              alternativa3="tresssss"
              alternativa4="qua"
              show={activeQuestion === index} // Show content only for active question
            />
          </QuestionsStyle>
        )
      )}

      <ButtonDiv>
        <Button>Confirmar</Button>
      </ButtonDiv>
    </Container>
  );
}
