const BadButton = ({bad, increaseBad} ) => (
    <button onClick={increaseBad}>
        Bad : {bad}
    </button>
)

export default BadButton