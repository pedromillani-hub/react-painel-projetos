import Indicador from "./Indicador";

function Resumo({ total, concluidos, emDesenvolvimento }) {
  return (
    <div className="resumo">
      <Indicador rotulo="Total de projetos" valor={total} />
      <Indicador rotulo="Concluídos" valor={concluidos} />
      <Indicador rotulo="Em desenvolvimento" valor={emDesenvolvimento} />
    </div>
  );
}

export default Resumo;
