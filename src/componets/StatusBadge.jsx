 function StatusBadge (props){
  return (
    <span className={`status-badge ${config.className}`}>
      {config.label}
    </span>
  )
}

export default StatusBadge;
