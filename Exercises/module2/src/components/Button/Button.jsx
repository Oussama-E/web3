const Button = ({ delta, handleClick, text }) => (
  <button data-delta={undefined} onClick={handleClick}>
    {text}
  </button>
);

export default Button;
