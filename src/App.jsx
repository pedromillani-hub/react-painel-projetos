import Cabecalho from "./components/Cabecalho";
import Secao from "./components/Secao";
import Resumo from "./components/Resumo";
import ProjetoCard from "./components/ProjetoCard";
import Rodape from "./components/Rodape";

const projetos = [
  {
    id: 1,
    titulo: "Sistema de Estoque",
    descricao: "Controle de produtos e movimentações.",
    responsavel: "Ana",
    status: "Concluído",
    tecnologias: ["React", "Node.js", "PostgreSQL"],
    destaque: true,
  },
  {
    id: 2,
    titulo: "Feira Digital de Trocas",
    descricao: "Cadastro, pesquisa e reserva de itens para troca.",
    responsavel: "Bruno",
    status: "Concluído",
    tecnologias: ["HTML", "CSS", "JavaScript"],
    destaque: false,
  },
  {
    id: 3,
    titulo: "Catálogo de Cursos",
    descricao: "Listagem de cursos com controle de vagas disponíveis.",
    responsavel: "Carla",
    status: "Em desenvolvimento",
    tecnologias: ["React", "Vite"],
    destaque: true,
  },
  {
    id: 4,
    titulo: "Agenda de Tarefas",
    descricao: "Organização de tarefas diárias com prioridades.",
    responsavel: "Diego",
    status: "Em desenvolvimento",
    tecnologias: ["React", "Local Storage", "CSS"],
    destaque: false,
  },
  {
    id: 5,
    titulo: "Controle Financeiro",
    descricao: "Registro de receitas e despesas com resumo mensal.",
    responsavel: "Elisa",
    status: "Planejamento",
    tecnologias: ["React", "Node.js", "MySQL"],
    destaque: false,
  },
  {
    id: 6,
    titulo: "App de Biblioteca",
    descricao: "Empréstimo e devolução de livros da escola.",
    responsavel: "Felipe",
    status: "Planejamento",
    tecnologias: ["React", "API REST"],
    destaque: false,
  },
];

function App() {
  const total = projetos.length;
  const concluidos = projetos.filter(
    (projeto) => projeto.status === "Concluído"
  ).length;
  const emDesenvolvimento = projetos.filter(
    (projeto) => projeto.status === "Em desenvolvimento"
  ).length;

  return (
    <div className="app">
      <Cabecalho
        titulo="Painel de Projetos"
        subtitulo="Acompanhe o andamento dos projetos da turma"
      />

      <main>
        <Secao titulo="Resumo">
          <Resumo
            total={total}
            concluidos={concluidos}
            emDesenvolvimento={emDesenvolvimento}
          />
        </Secao>

        <Secao titulo="Projetos da turma">
          <div className="lista-projetos">
            {projetos.map((projeto) => (
              <ProjetoCard
                key={projeto.id}
                titulo={projeto.titulo}
                descricao={projeto.descricao}
                responsavel={projeto.responsavel}
                status={projeto.status}
                tecnologias={projeto.tecnologias}
                destaque={projeto.destaque}
              />
            ))}
          </div>
        </Secao>
      </main>

      <Rodape />
    </div>
  );
}

export default App;
