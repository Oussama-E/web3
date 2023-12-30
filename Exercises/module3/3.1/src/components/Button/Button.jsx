const Button = ({handleClick, text}) => (
    <button onClick={handleClick} className={text}>
        {text}
    </button>
);

export default Button;