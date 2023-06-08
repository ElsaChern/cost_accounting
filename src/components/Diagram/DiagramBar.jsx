import "./DiagramBar.sass";

const DiagramBar = (props) => {
  let barFillHeight = "0%";

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="diagram-bar">
      <div className="inner">
        <div className="fill" style={{ height: barFillHeight }}></div>
      </div>
      <div className="label">{props.label}</div>
    </div>
  );
};

export default DiagramBar;
