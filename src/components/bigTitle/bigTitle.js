import "./bigTitle.css";

const BigTitle = (props) => {
  const style = {
    top: `${props.top}`,
    left: `${props.left}`,
    right: `${props.right}`,
  };
  return (
    <h1 className="big-title" style={style}>
      {props.text}
    </h1>
  );
};

export default BigTitle;
