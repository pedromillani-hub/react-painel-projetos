import StatusBadge from "./StatusBadge";
import TecnologiaTag from "./TecnologiaTag";

function ProjetoCard({
  titulo,
  descricao,
  responsavel,
  status,
  tecnologias,
  destaque,
}) {
  return (
    <article className={destaque ? "card card-destaque" : "card"}>
      {destaque && <strong className="selo-destaque">★ Projeto em destaque</strong>}

      <div className="card-topo">
        <h3>{titulo}</h3>
        <StatusBadge status={status} />
      </div>

      <p className="card-descricao">{descricao}</p>
      <p className="card-responsavel">Responsável: {responsavel}</p>

      <div className="tags">
        {tecnologias.map((tecnologia) => (
          <TecnologiaTag key={tecnologia} nome={tecnologia} />
        ))}
      </div>
    </article>
  );
}

export default ProjetoCard;
