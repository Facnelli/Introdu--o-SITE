import styled from "styled-components";

export const SlideBox = styled.div`
  width: 100%;
  margin: 0 auto;

  .slick-dots li.slick-active button:before {
    color: black;
  }
  .slideBox Imagem {
    width: 80%;
    display: block;
    margin: 0 auto;
  }

  .slick-dots li button:before {
    color: rgba(190, 182, 182, 0.932);
    font-size: medium;
  }
`;
export const Imagem = styled.img`
  display: flex;
  width: 100%;
  height: 400px;
  margin: 0 auto;
`;
