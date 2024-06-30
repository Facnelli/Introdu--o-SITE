import { useNavigate } from "react-router-dom";
import Carrossel from "../../carrossel/Carrossel";
import { Footer } from "../../Footer/Footer";
import { Header } from "../../header/header";
import escolaEng1 from "../../Images/EscolaDeEngenharia.jpg";
import escolaEng2 from "../../Images/EscolaDeEngenharia2.jpg";
import TextoSobreImagem from "../../TextoAnimado/TextoAnimado";
import { CardContent, Container, Section, Card, Button, CardContentText, EventosSection, Eventos } from "./Style";

export function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Carrossel />
      <TextoSobreImagem />

      <Section>
        <CardContentText>
          <h2>O que é a Engenharia de Sistemas?</h2>
          <p>
            A Engenharia de Sistemas é uma área multidisciplinar que integra
            conhecimentos de computação, matemática, gestão e outras disciplinas
            para criar soluções inovadoras e eficientes para os desafios do
            mundo moderno. É  arte de conceber, projetar, implementar e operar
            sistemas complexos, unindo conhecimento técnico e visão estratégica 
            para solucionar os desafios do mundo moderno. Na UFMG, o curso de 
            Engenharia de Sistemas oferece uma formação sólida e inovadora, 
            preparando você para liderar essa revolução tecnológica.
          </p>
          <p>
            A UFMG se destaca como a melhor universidade federal do Brasil em rankings nacionais e internacionais, reconhecida por sua excelência acadêmica e forte investimento em pesquisa e inovação. Ao escolher a UFMG, você estará em contato com professores renomados, pesquisadores experientes e uma comunidade acadêmica vibrante, pronta para te impulsionar em sua trajetória profissional.
          </p>
          <p>
          Nosso curso proporciona uma base sólida em ciências fundamentais (física, matemática, computação), aliada a uma abordagem prática e multidisciplinar, com foco em projetos reais. Você desenvolverá habilidades essenciais para a criação e gestão de sistemas complexos em diversas áreas, como Aeroespacial, Automação e Controle, Sistemas de Computação, Sistemas de Energia e Sistemas de Informação. Imagine projetar aeronaves, desenvolver cidades inteligentes, criar softwares inovadores, gerenciar energias renováveis ou construir soluções digitais que impactam milhões de pessoas - a Engenharia de Sistemas abre portas para um futuro repleto de possibilidades.
          </p>
          <p>
          Mas não se trata apenas de dominar tecnologias. Através de uma metodologia de ensino dinâmica e inovadora, o curso incentiva o trabalho em equipe, a comunicação, o pensamento crítico e a criatividade na resolução de problemas. Você terá acesso à completa infraestrutura da Escola de Engenharia da UFMG, com laboratórios modernos e equipados para colocar em prática os conhecimentos adquiridos e desenvolver projetos inovadores.
          </p>
          <p>
          Acreditamos que um bom engenheiro é também um cidadão consciente e engajado com as demandas sociais. Por isso, nosso currículo inclui disciplinas de Humanidades, promovendo reflexões sobre ética, sustentabilidade e o impacto da tecnologia na sociedade. Nosso objetivo é formar profissionais completos, capazes de usar a Engenharia como ferramenta para construir um futuro mais justo e sustentável para todos.
          </p>
          <p>
          O profissional de Engenharia de Sistemas é cada vez mais requisitado em um mercado globalizado e em constante transformação. Nossa formação completa e inovadora te preparará para atuar em diferentes setores e assumir posições de liderança em empresas e organizações inovadoras. Junte-se a nós e construa o futuro com a Engenharia de Sistemas da UFMG!
          </p>
          <p>
            Nosso curso te prepara para dominar as tecnologias de ponta e
            desenvolver soluções que impactam positivamente a sociedade.
          </p>
        </CardContentText>
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

      <EventosSection>
        <Eventos>
        <h2>Teste seus conhecimentos sobre a Engenharia de Sistemas! 🚀</h2>
              <p>
              Está pensando em embarcar no mundo da Engenharia de Sistemas, mas não sabe ao certo se essa é a área ideal para você? 🤔 Ou talvez você já seja apaixonado por tecnologia e quer descobrir o quanto realmente sabe sobre essa área fascinante? 😎
              </p>
              <p>
              Seja qual for o seu caso, você chegou ao lugar certo! Preparamos um quiz desafiador para testar seus conhecimentos sobre o universo da Engenharia de Sistemas. 🧑‍💻
              </p>
              <p>
              Responda às perguntas a seguir e descubra se você tem o que é preciso para ser um engenheiro de sistemas de sucesso! 💪
              </p>
              <Button onClick={() => navigate("/quiz")}>Que os jogos comecem! 🕹️</Button>
        </Eventos>
      </EventosSection>

      <EventosSection marginLeft="2%" marginRight="45%">
        <Eventos>
        <h2>Curioso para saber como este site foi construído? 🤔</h2>

        <p>Assim como a Engenharia de Sistemas une diferentes componentes para criar sistemas complexos, este site também é resultado da combinação de tecnologias web poderosas! 💻</p>

        <p>Desenvolvemos esta página utilizando a tríade essencial do desenvolvimento web: <strong>HTML</strong>, <strong>CSS</strong> e <strong>JavaScript</strong>.</p>

        <ul>
          <li>O <strong>HTML</strong> estrutura o conteúdo, definindo os elementos básicos como textos, títulos, imagens e botões.</li>
          <li>O <strong>CSS</strong> entra em cena para dar vida ao visual, estilizando cada elemento, definindo cores, fontes, espaçamentos e criando um layout responsivo que se adapta a diferentes dispositivos.</li>
          <li>E o <strong>JavaScript</strong>? Ah, este é o cérebro por trás da interatividade! Ele permite criar animações, lidar com eventos (como cliques do usuário) e tornar a experiência do usuário mais dinâmica.</li>
        </ul>

        <p>Para turbinar ainda mais o desenvolvimento, utilizamos algumas bibliotecas incríveis:</p>

        <ul>
          <li><strong>React:</strong> uma biblioteca JavaScript poderosa e flexível para construir interfaces de usuário interativas e reutilizáveis.</li>
          <li><strong>React Router:</strong> para criar a navegação entre as diferentes seções do site de forma fluida e intuitiva.</li>
          <li><strong>Styled Components:</strong> para escrever estilos CSS diretamente dentro do código JavaScript, tornando o desenvolvimento mais organizado e fácil de manter.</li>
        </ul>

        <p>E aí, pronto para mergulhar no mundo da programação e criar seus próprios sites incríveis? ✨</p>
        </Eventos>
      </EventosSection>
          
    </>
  );
}
