function Indicador({ rotulo, valor }) {
  return (
    <div className="indicador">
      <span className="indicador-valor">{valor}</span>
      <span className="indicador-rotulo">{rotulo}</span>
    </div>
  );
}

export default Indicador;
