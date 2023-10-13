const GoodButton = ({good, increaseGood}) => (
    <button onClick = {increaseGood} >
        Good : {good}
    </button>
)

export default GoodButton;