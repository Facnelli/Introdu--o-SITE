import { useNavigate } from "react-router-dom";
import Carrossel from "../../carrossel/Carrossel";
import { Footer } from "../../Footer/Footer";
import { Header } from "../../header/header";
import escolaEng1 from "../../Images/EscolaDeEngenharia.jpg";
import escolaEng2 from "../../Images/EscolaDeEngenharia2.jpg";
import TextoSobreImagem from "../../TextoAnimado/TextoAnimado";
import { CardContent, Container, Section, Card, Button } from "./Style";

export function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Carrossel />
      <TextoSobreImagem />

      <Section>
        <Container>
          <h2>O que é Engenharia de Sistemas?</h2>
          <p>
            A Engenharia de Sistemas é uma área multidisciplinar que integra
            conhecimentos de computação, matemática, gestão e outras disciplinas
            para criar soluções inovadoras e eficientes para os desafios do
            mundo moderno.
          </p>
          <p>
            Nosso curso te prepara para dominar as tecnologias de ponta e
            desenvolver soluções que impactam positivamente a sociedade.
          </p>
        </Container>
      </Section>

      <Card>
        <Container>
          <CardContent>
            <h3>Construa o futuro com a Engenharia de Sistemas</h3>
            <p>
              Seja um profissional inovador e impactante na área da tecnologia.
              Descubra as infinitas possibilidades e abra portas para uma
              carreira de sucesso.
            </p>
            <Button onClick={() => navigate("/areas")}>Saiba Mais</Button>
          </CardContent>
        </Container>
      </Card>
    </>
  );
}
