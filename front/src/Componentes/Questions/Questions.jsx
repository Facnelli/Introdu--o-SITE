import React, { useState } from "react";
import { Complete, Question, QuestionPreview, Alternativas } from "./Style";
import { FaRegCircle } from "react-icons/fa";

function Questions({
  numero,
  show,
  alternativa1,
  alternativa2,
  alternativa3,
  alternativa4,
  Correta,
}) {
  return (
    <Question>
      {show ? (
        <Complete>
          <h3>{numero}</h3>

          <p>Todo dia sai um malandro e um otário saem de casa</p>
          <Alternativas>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                padding: "5px",
              }}
            >
              <FaRegCircle style={{ marginRight: "5px" }} />
              {alternativa1}
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                padding: "5px",
              }}
            >
              <FaRegCircle style={{ marginRight: "5px" }} />
              <p>{alternativa2}</p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                padding: "5px",
              }}
            >
              <FaRegCircle style={{ marginRight: "5px" }} />
              <p>{alternativa3}</p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                padding: "5px",
              }}
            >
              <FaRegCircle style={{ marginRight: "5px" }} />
              <p>{alternativa4}</p>
            </div>
          </Alternativas>
        </Complete>
      ) : (
        <QuestionPreview>{numero}</QuestionPreview>
      )}
    </Question>
  );
}

export default Questions;
