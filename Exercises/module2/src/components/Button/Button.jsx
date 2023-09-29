const Button = ({ delta, handleClick, text }) => (
  <button data-delta={delta} onClick={handleClick}>
    {text}
  </button>
);

export default Button;
