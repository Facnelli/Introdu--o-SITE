import styled from "styled-components";

export const QuizContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-right: 5%;
  margin-left: 5%;
  margin-top: 5%;
  margin-bottom: 5%;
`;

export const QuestionContainer = styled.div`
  padding: 20px;
  margin-bottom: 20px;
  text-align: center;
  ul {
    list-style: none; /* Remove o ponto indicativo da lista */
    padding: 0; /* Remove o padding padrão da lista */
  }

  li {
    text-align: left; /* Alinha o texto à esquerda */
    margin-bottom: 10px; /* Adiciona espaçamento entre as opções */
  }

  label {
    display: flex; /* Usa flexbox para alinhar o radio button e o texto */
    align-items: center; /* Alinha verticalmente */
  }

  input[type="radio"] {
    margin-right: 10px; /* Adiciona espaçamento entre o radio button e o texto */
  }
`;

export const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  margin: 0 5px;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const Menu = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  @media (max-width: 700px) {
    display: grid;
    grid-template-columns: repeat(
      7,
      1fr
    ); /* Adicione esta linha para criar 7 colunas */
    gap: 10px; /* Espaçamento entre os botões */
  }
`;

export const MenuItem = styled.button`
  background-color: ${({ active }) => (active ? "#007bff" : "#ddd")};
  color: ${({ active }) => (active ? "#fff" : "#333")};
  padding: 8px 12px;
  border: none;
  border-radius: 5px;
  margin: 0 5px;
  margin-top: 25px;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  cursor: pointer;

  @media (max-width: 700px) {
    display: grid;
    flex-direction: column;
    padding: 7px;
  }
`;

export const QuestionStyle = styled.h1`
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;

  @media (max-width: 700px) {
    font-size: 18px;
  }
`;

export const perguntas = [
  {
    pergunta: "Qual a principal característica da Engenharia de Sistemas?",
    opcoes: [
      "Foco em programação de softwares.",
      "Gerenciamento de projetos de construção.",
      "Integração de diferentes áreas do conhecimento para criar sistemas complexos.",
      "Análise de dados financeiros.",
    ],
    resposta: 2,
  },
  {
    pergunta:
      "Qual destas áreas NÃO é uma área comum de atuação para Engenheiros de Sistemas?",
    opcoes: ["Aeroespacial", "Bioengenharia", "Marketing Digital", "Logística"],
    resposta: 2,
  },
  {
    pergunta: "O que significa a sigla 'MVP' em Engenharia de Sistemas?",
    opcoes: [
      "Most Valuable Professional",
      "Minimum Viable Product",
      "Maximum Value Proposition",
      "Multi-Variate Processing",
    ],
    resposta: 1,
  },
  {
    pergunta:
      "Qual a importância da modelagem de sistemas na Engenharia de Sistemas?",
    opcoes: [
      "É apenas uma etapa burocrática.",
      "Serve para documentar o sistema depois de pronto.",
      "Permite simular e analisar o comportamento do sistema antes da implementação.",
      "É utilizada somente em sistemas de software.",
    ],
    resposta: 2,
  },
  {
    pergunta: "O que é um ciclo de vida de sistema?",
    opcoes: [
      "A sequência de fases que um sistema percorre, desde a concepção até o descarte.",
      "O tempo médio de funcionamento de um sistema.",
      "A quantidade de usuários que um sistema suporta.",
      "A linguagem de programação utilizada para desenvolver um sistema.",
    ],
    resposta: 0,
  },
  {
    pergunta: "Quais são os principais desafios da Engenharia de Sistemas?",
    opcoes: [
      "Gerenciar a complexidade de sistemas com múltiplos componentes interconectados.",
      "Lidar com as constantes mudanças tecnológicas.",
      "Satisfazer as necessidades de diferentes stakeholders.",
      "Todas as alternativas anteriores.",
    ],
    resposta: 3,
  },
  {
    pergunta:
      "Qual a relação entre Engenharia de Sistemas e outras disciplinas de engenharia?",
    opcoes: [
      "A Engenharia de Sistemas substitui as outras disciplinas.",
      "A Engenharia de Sistemas é independente das outras disciplinas.",
      "A Engenharia de Sistemas integra e coordena os conhecimentos de outras disciplinas.",
      "A Engenharia de Sistemas é uma subárea da Engenharia Elétrica.",
    ],
    resposta: 2,
  },
  {
    pergunta:
      "Por que a comunicação é uma habilidade essencial para um Engenheiro de Sistemas?",
    opcoes: [
      "Para escrever relatórios técnicos complexos.",
      "Para se comunicar com stakeholders de diferentes áreas e níveis de conhecimento técnico.",
      "Para apresentar projetos em conferências internacionais.",
      "Para negociar contratos com fornecedores.",
    ],
    resposta: 1,
  },
  {
    pergunta:
      "Qual a importância do trabalho em equipe na Engenharia de Sistemas?",
    opcoes: [
      "Sistemas complexos exigem a colaboração de profissionais com diferentes especialidades.",
      "É mais divertido trabalhar em equipe.",
      "Permite dividir as tarefas e terminar o projeto mais rápido.",
      "Facilita a comunicação com os stakeholders.",
    ],
    resposta: 0,
  },
  {
    pergunta: "Como a Engenharia de Sistemas contribui para a inovação?",
    opcoes: [
      "Fornecendo ferramentas para a automação de processos.",
      "Criando soluções para problemas complexos que antes não tinham solução.",
      "Integrando tecnologias e conhecimentos de diferentes áreas.",
      "Todas as alternativas anteriores.",
    ],
    resposta: 3,
  },
  {
    pergunta:
      "Quais são as principais ferramentas utilizadas em Engenharia de Sistemas?",
    opcoes: [
      "Linguagens de programação como Java e Python.",
      "Softwares de modelagem de sistemas como SysML.",
      "Ferramentas de gerenciamento de projetos como o Microsoft Project.",
      "Todas as alternativas anteriores.",
    ],
    resposta: 3,
  },
  {
    pergunta: "Qual o papel da Engenharia de Sistemas na indústria 4.0?",
    opcoes: [
      "Desenvolver sistemas de automação e robótica para as fábricas inteligentes.",
      "Integrar sistemas de informação e comunicação para otimizar a produção.",
      "Gerenciar a complexidade dos sistemas ciberfísicos.",
      "Todas as alternativas anteriores.",
    ],
    resposta: 3,
  },
  {
    pergunta: "O que é um sistema sociotécnico?",
    opcoes: [
      "Um sistema que integra componentes sociais e técnicos.",
      "Um sistema que utiliza inteligência artificial para interagir com humanos.",
      "Um sistema que opera em ambientes sociais, como redes sociais.",
      "Um sistema que é desenvolvido por equipes multidisciplinares.",
    ],
    resposta: 0,
  },
  {
    pergunta:
      "Como a Engenharia de Sistemas contribui para um futuro sustentável?",
    opcoes: [
      "Projetando sistemas que minimizam o impacto ambiental.",
      "Desenvolvendo tecnologias para o uso eficiente de recursos naturais.",
      "Criando soluções para problemas sociais, como acesso à água e energia.",
      "Todas as alternativas anteriores.",
    ],
    resposta: 3,
  },
];

const respostasDoUsuario = [2, 2, 1, 2, 0, 3, 2, 1, 0, 3, 3, 3, 0, 3];

const pontuacao = calcularPontuacao(respostasDoUsuario);

console.log(`Pontuação: ${pontuacao}`);

function calcularPontuacao(respostasUsuario) {
  let acertos = 0;

  perguntas.forEach((pergunta, index) => {
    if (respostasUsuario[index] === pergunta.resposta) {
      acertos++;
    }
  });

  return acertos;
}
