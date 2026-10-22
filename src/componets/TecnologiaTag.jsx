{
  const style = cor ? { backgroundColor: cor } : undefined;

  return (
    <span className="tecnologia-tag" style={style}>
      {nome}
    </span>
  );
};

export default TecnologiaTag;
