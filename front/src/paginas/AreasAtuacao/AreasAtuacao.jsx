import { Cards, CardsStyle, Container, Grid, Subtitulo, Titulo } from "./Style";
import ufmg from "../../Images/ufmg.jpeg";
import { CampoAreas } from "../../Componentes/CampoAreas/CampoAreas";

export function Areas() {
  return (
    <Container>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Titulo>Areas de Atuação</Titulo>
        <Subtitulo>Onde atua o engenheiro de sistemas?</Subtitulo>
      </div>
      <Grid>
        <CampoAreas
          titulo="Desenvolvimento de Software"
          descricao="Crie aplicativos, softwares e sistemas que transformam a maneira como as pessoas vivem e trabalham."
          img="ufmg"
        />
        <CampoAreas
          titulo="Desenvolvimento de Software"
          descricao="Crie aplicativos, softwares e sistemas que transformam a maneira como as pessoas vivem e trabalham."
          img="ufmg"
        />
        <CampoAreas
          titulo="Desenvolvimento de Software"
          descricao="Crie aplicativos, softwares e sistemas que transformam a maneira como as pessoas vivem e trabalham."
          img="ufmg"
        />
        <CampoAreas
          titulo="Desenvolvimento de Software"
          descricao="Crie aplicativos, softwares e sistemas que transformam a maneira como as pessoas vivem e trabalham."
          img="ufmg"
        />
        <CampoAreas
          titulo="Desenvolvimento de Software"
          descricao="Crie aplicativos, softwares e sistemas que transformam a maneira como as pessoas vivem e trabalham."
          img="ufmg"
        />
        <CampoAreas
          titulo="Desenvolvimento de Software"
          descricao="Crie aplicativos, softwares e sistemas que transformam a maneira como as pessoas vivem e trabalham."
          img="ufmg"
        />
      </Grid>
    </Container>
  );
}
