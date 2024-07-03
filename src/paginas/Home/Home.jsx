import { useNavigate } from "react-router-dom";
import Carrossel from "../../carrossel/Carrossel";
import { Footer } from "../../Footer/Footer";
import { Header } from "../../header/header";
import escolaEng1 from "../../Images/EscolaDeEngenharia.jpg";
import escolaEng2 from "../../Images/EscolaDeEngenharia2.jpg";
import TextoSobreImagem from "../../TextoAnimado/TextoAnimado";
import {
  CardContent,
  Container,
  Section,
  Card,
  Button,
  CardContentText,
  EventosSection,
  Eventos,
  H2,
  P,
  Li,
  ButtonContainer,
  ButtonSB,
} from "./Style";

export function Home() {
  const navigate = useNavigate();

  const redirectToINCOSE = () => {
    window.location.href = "https://www.incose.org";
  };

  return (
    <>
      <Carrossel />

      <Section>
        <CardContentText>
          <H2>O que é a Engenharia de Sistemas?</H2>
          <P>
            A Engenharia de Sistemas é uma área multidisciplinar que integra
            conhecimentos de computação, matemática, gestão e outras disciplinas
            para criar soluções inovadoras e eficientes para os desafios do
            mundo moderno. É arte de conceber, projetar, implementar e operar
            sistemas complexos, unindo conhecimento técnico e visão estratégica
            para solucionar os desafios do mundo moderno. Na UFMG, o curso de
            Engenharia de Sistemas oferece uma formação sólida e inovadora,
            preparando você para liderar essa revolução tecnológica.
          </P>
          <P>
            A UFMG se destaca como a melhor universidade federal do Brasil em
            rankings nacionais e internacionais, reconhecida por sua excelência
            acadêmica e forte investimento em pesquisa e inovação. Ao escolher a
            UFMG, você estará em contato com professores renomados,
            pesquisadores experientes e uma comunidade acadêmica vibrante,
            pronta para te impulsionar em sua trajetória profissional.
          </P>
          <P>
            Nosso curso proporciona uma base sólida em ciências fundamentais
            (física, matemática, computação), aliada a uma abordagem prática e
            multidisciplinar, com foco em projetos reais. Você desenvolverá
            habilidades essenciais para a criação e gestão de sistemas complexos
            em diversas áreas, como Aeroespacial, Automação e Controle, Sistemas
            de Computação, Sistemas de Energia e Sistemas de Informação. Imagine
            projetar aeronaves, desenvolver cidades inteligentes, criar
            softwares inovadores, gerenciar energias renováveis ou construir
            soluções digitais que impactam milhões de pessoas - a Engenharia de
            Sistemas abre portas para um futuro repleto de possibilidades.
          </P>
          <P>
            Mas não se trata apenas de dominar tecnologias. Através de uma
            metodologia de ensino dinâmica e inovadora, o curso incentiva o
            trabalho em equipe, a comunicação, o pensamento crítico e a
            criatividade na resolução de problemas. Você terá acesso à completa
            infraestrutura da Escola de Engenharia da UFMG, com laboratórios
            modernos e equipados para colocar em prática os conhecimentos
            adquiridos e desenvolver projetos inovadores.
          </P>
          <P>
            Acreditamos que um bom engenheiro é também um cidadão consciente e
            engajado com as demandas sociais. Por isso, nosso currículo inclui
            disciplinas de Humanidades, promovendo reflexões sobre ética,
            sustentabilidade e o impacto da tecnologia na sociedade. Nosso
            objetivo é formar profissionais completos, capazes de usar a
            Engenharia como ferramenta para construir um futuro mais justo e
            sustentável para todos.
          </P>
          <P>
            O profissional de Engenharia de Sistemas é cada vez mais requisitado
            em um mercado globalizado e em constante transformação. Nossa
            formação completa e inovadora te preparará para atuar em diferentes
            setores e assumir posições de liderança em empresas e organizações
            inovadoras. Junte-se a nós e construa o futuro com a Engenharia de
            Sistemas da UFMG!
          </P>
          <P>
            Nosso curso te prepara para dominar as tecnologias de ponta e
            desenvolver soluções que impactam positivamente a sociedade.
          </P>
        </CardContentText>
      </Section>

      <Card>
        <Container>
          <CardContent>
            <H2>Construa o futuro com a Engenharia de Sistemas</H2>
            <P>
              Seja um profissional inovador e impactante na área da tecnologia.
              Descubra as infinitas possibilidades e abra portas para uma
              carreira de sucesso.
            </P>
            <ButtonSB onClick={() => navigate("/areas")}>Saiba Mais</ButtonSB>
          </CardContent>
        </Container>
      </Card>
      <Section>
        <CardContentText>
          <H2> Conheça a INCOSE! 🚀</H2>
          <h2>International Council on Systems Engineering (INCOSE)</h2>

          <P>
            <P>
              A{" "}
              <strong>
                INCOSE (International Council on Systems Engineering) 🌐
              </strong>{" "}
              é uma organização global dedicada ao avanço da engenharia de
              sistemas. Fundada em 1990, a INCOSE promove a colaboração entre
              profissionais, acadêmicos e indústria para desenvolver práticas e
              padrões que melhoram a eficiência e a eficácia dos sistemas
              complexos. Com membros em mais de 50 países, a INCOSE desempenha
              um papel crucial na padronização e na disseminação de
              conhecimentos na área de engenharia de sistemas.
            </P>

            <P>
              Na <strong>UFMG (Universidade Federal de Minas Gerais) 🎓</strong>
              , a conexão com a INCOSE se manifesta através de projetos de
              pesquisa e colaborações acadêmicas. A universidade é reconhecida
              por seu forte departamento de engenharia e sistemas, onde
              professores e estudantes trabalham em conjunto com a INCOSE para
              aplicar teorias avançadas em projetos práticos. Essa parceria não
              apenas enriquece o currículo dos estudantes, mas também contribui
              para o desenvolvimento de soluções inovadoras que impactam
              diversas indústrias.
            </P>

            <P>
              Através de workshops, conferências e programas de intercâmbio, a
              UFMG e a INCOSE fortalecem sua parceria para enfrentar desafios
              complexos da engenharia moderna. Os estudantes têm a oportunidade
              de participar de projetos financiados pela INCOSE, além de acessar
              recursos educacionais e de pesquisa de ponta. Essa colaboração
              contínua não apenas promove o avanço acadêmico, mas também prepara
              os futuros engenheiros de sistemas para enfrentar as demandas
              globais e contribuir significativamente para o desenvolvimento
              tecnológico e científico. 🚀
            </P>

            <P>
              Com o apoio da INCOSE, a UFMG se destaca na formação de
              profissionais capacitados para lidar com os desafios emergentes da
              engenharia de sistemas. A cooperação entre academia e indústria
              proporciona aos estudantes uma perspectiva ampla e atualizada do
              campo, preparando-os para carreiras promissoras e impactantes.
              Além disso, eventos como simpósios e competições impulsionam a
              inovação e o intercâmbio de conhecimentos, fortalecendo ainda mais
              o vínculo entre as duas instituições. 🌟
            </P>
          </P>
          <ButtonContainer>
            <Button onClick={redirectToINCOSE}>✨Site INCOSE✨</Button>
          </ButtonContainer>
        </CardContentText>
      </Section>

      <EventosSection>
        <Eventos>
          <H2>Teste seus conhecimentos sobre a Engenharia de Sistemas! 😎</H2>
          <P>
            Está pensando em embarcar no mundo da Engenharia de Sistemas, mas
            não sabe ao certo se essa é a área ideal para você? 🤔 Ou talvez
            você já seja apaixonado por tecnologia e quer descobrir o quanto
            realmente sabe sobre essa área fascinante?
          </P>
          <P>
            Seja qual for o seu caso, você chegou ao lugar certo! Preparamos um
            quiz desafiador para testar seus conhecimentos sobre o universo da
            Engenharia de Sistemas. 🧑‍💻
          </P>
          <P>
            Responda às perguntas a seguir e descubra se você tem o que é
            preciso para ser um engenheiro de sistemas de sucesso! 💪
          </P>
          <Button onClick={() => navigate("/quiz")}>
            Que os jogos comecem! 🕹️
          </Button>
        </Eventos>
      </EventosSection>

      <EventosSection marginLeft="2%" marginRight="45%">
        <Eventos>
          <H2>Curioso para saber como este site foi construído? 🤔</H2>

          <P>
            Assim como a Engenharia de Sistemas une diferentes componentes para
            criar sistemas complexos, este site também é resultado da combinação
            de tecnologias web poderosas! 💻
          </P>

          <P>
            Desenvolvemos esta página utilizando a tríade essencial do
            desenvolvimento web: <strong>HTML</strong>, <strong>CSS</strong> e{" "}
            <strong>JavaScript</strong>.
          </P>

          <ul>
            <Li>
              O <strong>HTML</strong> estrutura o conteúdo, definindo os
              elementos básicos como textos, títulos, imagens e botões.
            </Li>
            <Li>
              O <strong>CSS</strong> entra em cena para dar vida ao visual,
              estilizando cada elemento, definindo cores, fontes, espaçamentos e
              criando um layout responsivo que se adapta a diferentes
              dispositivos.
            </Li>
            <Li>
              E o <strong>JavaScript</strong>? Ah, este é o cérebro por trás da
              interatividade! Ele permite criar animações, lidar com eventos
              (como cliques do usuário) e tornar a experiência do usuário mais
              dinâmica.
            </Li>
          </ul>

          <P>
            Para turbinar ainda mais o desenvolvimento, utilizamos algumas
            bibliotecas incríveis:
          </P>

          <ul>
            <Li>
              <strong>React:</strong> uma biblioteca JavaScript poderosa e
              flexível para construir interfaces de usuário interativas e
              reutilizáveis.
            </Li>
            <Li>
              <strong>React Router:</strong> para criar a navegação entre as
              diferentes seções do site de forma fluida e intuitiva.
            </Li>
            <Li>
              <strong>Styled Components:</strong> para escrever estilos CSS
              diretamente dentro do código JavaScript, tornando o
              desenvolvimento mais organizado e fácil de manter.
            </Li>
          </ul>

          <P>
            E aí, pronto para mergulhar no mundo da programação e criar seus
            próprios sites incríveis? ✨
          </P>
          <Button onClick={() => navigate("/contatos")}>
            Conheça os criadores 💻
          </Button>
        </Eventos>
      </EventosSection>
    </>
  );
}
