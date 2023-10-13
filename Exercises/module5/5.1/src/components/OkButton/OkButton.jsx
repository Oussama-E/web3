const OkButton = ({ok, increaseOk}) => (
    <button onClick = {increaseOk} >
        Ok : {ok}
    </button>
)

export default OkButton;