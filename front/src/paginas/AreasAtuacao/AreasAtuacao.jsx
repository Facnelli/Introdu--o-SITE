import { Cards, CardsStyle, Container, Grid, Subtitulo, Titulo, CampoAreasStyle } from "./Style";
import ufmg from "../../Images/ufmg.jpeg";
import { CampoAreas } from "../../Componentes/CampoAreas/CampoAreas";
import { Section, CardContentText} from "../Home/Style";



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
      <Section>
          <CardContentText>
            <h2>Engenharia de Sistemas: um universo de possibilidades 🚀</h2>
            <p>A Engenharia de Sistemas é como um canivete suíço do mundo profissional: versátil e essencial em diversas áreas! 🧰 Sua capacidade de integrar diferentes conhecimentos e solucionar problemas complexos abre portas para um leque enorme de oportunidades.</p>
            <p>Prepare-se para explorar algumas das áreas de atuação mais empolgantes para um engenheiro de sistemas:</p>
            <h3>1. Aeroespacial:</h3>
            <p>Projetar aeronaves, satélites, sistemas de controle e propulsão, desvendando os mistérios do espaço e da atmosfera. 🛰️</p>

            <h3>2. Automação e Robótica:</h3>
            <p>Criar robôs inteligentes para automatizar tarefas, otimizar processos industriais e desenvolver soluções inovadoras para diversos setores, da medicina à indústria automobilística. 🤖</p>

            <h3>3. Tecnologia da Informação:</h3>
            <p>Projetar e gerenciar sistemas de software e hardware complexos, garantindo a segurança, performance e confiabilidade de redes, bancos de dados e aplicações web. 💻</p>

            <h3>4. Energia:</h3>
            <p>Desenvolver e gerenciar sistemas de energia eficientes e sustentáveis, explorando fontes renováveis como solar, eólica e biomassa, contribuindo para um futuro mais verde. 🌱</p>

            <h3>5. Bioengenharia e Saúde:</h3>
            <p>Criar equipamentos médicos, próteses, softwares de análise de dados e sistemas de gerenciamento hospitalar, revolucionando a área da saúde e melhorando a qualidade de vida das pessoas. 🏥</p>

            <h3>6. Transporte e Logística:</h3>
            <p>Otimizar sistemas de transporte, gerenciar frotas, desenvolver soluções para o trânsito e criar sistemas logísticos inteligentes para empresas e cidades. 🚚</p>

            <h3>7. Defesa e Segurança:</h3>
            <p>Projetar e gerenciar sistemas de defesa cibernética, desenvolver tecnologias de vigilância e segurança e criar soluções para proteger dados e infraestruturas críticas. 🔐</p>

            <h3>8. Gestão e Consultoria:</h3>
            <p>Aplicar conhecimentos de Engenharia de Sistemas para otimizar processos, solucionar problemas complexos e auxiliar empresas a tomar decisões estratégicas em diversas áreas. 💼</p>

            <h3>9. Pesquisa e Desenvolvimento:</h3>
            <p>Desvendar novas tecnologias, criar soluções inovadoras e contribuir para o avanço do conhecimento em áreas como inteligência artificial, machine learning e big data. 🔬</p>

            <p>E a lista não para por aí! As possibilidades são infinitas para um profissional com a visão sistêmica e a capacidade de integrar diferentes áreas do conhecimento como um engenheiro de sistemas. 🌎</p>
          </CardContentText>
      </Section>
      </div>
      <CampoAreasStyle>
        <Titulo>Onde atua o engenheiro de sistemas?</Titulo>
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
      </CampoAreasStyle>
      
    </Container>
  );
}
