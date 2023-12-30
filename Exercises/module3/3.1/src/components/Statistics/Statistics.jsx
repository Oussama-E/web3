import StatisticsLine from "../StatisticsLine/StatisticsLine";

const Statistics = ({ goodValue, neutralValue, badValue }) => {
  const allValue = goodValue + neutralValue + badValue;

  if (allValue === 0) return <p>No feedback given</p>;

  const averageValue = allValue !== 0 ? (goodValue - badValue) / allValue : 0;
  const positiveValue = allValue !== 0 ? (goodValue / allValue) * 100 : 0;

  return (
    <div>
      <table>
        <tbody>
          <StatisticsLine text="good" value={goodValue} />
          <StatisticsLine text="neutral" value={neutralValue} />
          <StatisticsLine text="badValue" value={badValue} />
          <StatisticsLine text="all" value={allValue} />
          <StatisticsLine text="average" value={averageValue} />
          <StatisticsLine text="positive" value={positiveValue} />
        </tbody>
      </table>
    </div>
  );
};

export default Statistics;
