const Button = ({ delta, changeCount, text }) => {
  const handleClick = (e) => {
    const delta = parseInt(e.target.dataset.delta);
    changeCount(delta);
  }

  return (
    <button data-delta={delta} onClick={handleClick}>
      {text}
    </button>
  );
}

export default Button;
