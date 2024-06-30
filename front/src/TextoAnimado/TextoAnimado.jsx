import React from "react";
import { StyledText } from "./Style";

const TextoSobreImagem = ({ text }) => {
  return (
    <>
      <link rel="stylesheet" href="./writingtextanimation.css"></link>
      <StyledText>{text}</StyledText>;
    </>
  );
};

export default TextoSobreImagem;
