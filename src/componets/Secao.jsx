function Secao (props){
  return (
    <section id={id} className={`secao ${className}`.trim()}>
      {titulo && <h2 className="secao-titulo">{titulo}</h2>}
      <div className="secao-conteudo">{children}</div>
    </section>
  );
};

export default Secao;
