import StatisticsLine from "../StatisticsLine/StatisticsLine"

const Statistics = (props) => (
    <div>
        <table>
            <tbody>
                <StatisticsLine text="good" value={props.goodValue}/>
                <StatisticsLine text="neutral" value={props.neutralValue}/>
                <StatisticsLine text="bad" value={props.badValue}/>
                <StatisticsLine text="all" value={props.allValue}/>
                <StatisticsLine text="average" value={props.averageValue}/>
                <StatisticsLine text="positive" value={props.positiveValue}/>
            </tbody>
        </table>
    </div>
)

export default Statistics