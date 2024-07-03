import { CampoContatos } from "../../Componentes/CampoAreas/CampoAreas";
import { Grid } from "../AreasAtuacao/Style";
import { CardContentText, H2, Section } from "./Style";
import { Container, Name, P } from "./Style";

export function Contatos() {
  return (
    <Container>
      <h1 style={{ textAlign: "center" }}>Conheça quem criou esse site</h1>

      <Grid>
        <CampoContatos
          nome="Arthur Silva Teixeira"
          email="arthursilvateixeira@ufmg.br"
        />
        <CampoContatos nome="Guilherme Fachinelli" email="Facnelli@gmail.com" />
        <CampoContatos
          nome="Elias Daniel Moreira de Siqueira"
          email="eliasdaniel_ms@outlook.com.br"
        />
        <CampoContatos
          nome="Pedro Armando Oliveira Duarte"
          email="pedro.arrmando@gmail.com"
        />
      </Grid>
      <Section>
        <CardContentText>
          <H2 style={{ textAlign: "center", margin: "20px" }}>
            Mergulhe na <span class="highlight">Magia da Criação</span>
          </H2>
          <P>
            Assim como um engenheiro talentoso combina diferentes peças para
            erguer obras grandiosas, este site também é fruto da união de
            tecnologias web poderosas! Embarque em uma jornada fascinante e
            desvende os segredos por trás de sua construção. 🌟🛠️
          </P>

          <H2>HTML: A Estrutura Essencial</H2>
          <P>
            Tudo começa com o HTML, a espinha dorsal do site. Ele define a
            estrutura básica das páginas, organizando os elementos como textos,
            títulos, imagens e botões, criando alicerces sólidos para o que está
            por vir. 🔧📄
          </P>

          <H2>CSS: Dando Vida à Imaginação</H2>
          <P>
            Em seguida, entra em cena o CSS, o maestro da beleza. Ele veste cada
            elemento com cores vibrantes, fontes elegantes e espaçamentos
            harmônicos, transformando a estrutura bruta em um visual
            deslumbrante. É aqui que a magia acontece, dando vida à sua
            imaginação e criando um site esteticamente impecável. 🎨✨
          </P>

          <H2>JavaScript: O Cérebro por Trás da Interatividade</H2>
          <P>
            Mas a verdadeira maravilha reside no JavaScript, o cérebro por trás
            da interatividade. Ele injeta vida na página, permitindo animações
            fluidas, respostas dinâmicas aos cliques dos usuários e uma
            experiência geral mais rica e envolvente. É o JavaScript que
            transforma seu site em um portal interativo, pronto para encantar e
            engajar seu público. 🧠💡
          </P>

          <H2>Bibliotecas Potentes para Turbinar o Desenvolvimento</H2>
          <P>
            Para impulsionar ainda mais a criação deste site, recorremos a
            bibliotecas incríveis que facilitam e otimizam o processo: 🚀🔧
          </P>
          <ul>
            <li>
              <strong>React:</strong> Uma biblioteca JavaScript robusta e
              flexível, ideal para construir interfaces de usuário interativas e
              reutilizáveis, agilizando o desenvolvimento e promovendo a
              modularidade do código. 🔄⚛️
            </li>
            <li>
              <strong>React Router:</strong> Permitindo uma navegação fluida e
              intuitiva entre as diferentes seções do site, guiando seus
              visitantes com maestria através de sua jornada virtual. 🚪🌐
            </li>
            <li>
              <strong>Styled Components:</strong> Uma ferramenta inovadora que
              permite escrever estilos CSS diretamente no código JavaScript,
              tornando o desenvolvimento mais organizado, legível e fácil de
              manter. 🎨🔧💼
            </li>
          </ul>
        </CardContentText>
      </Section>
    </Container>
  );
}
