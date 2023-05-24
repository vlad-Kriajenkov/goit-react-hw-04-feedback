import { ContainerStatistics, ListStat, ItemStat } from "./Statistics.styled";
const Statistics = ({ state }) => {
  const { good, neutral, bad, total, positivePercentage } = state;

  return (
    <ContainerStatistics>
      <ListStat>
        <ItemStat>
          <div>Good</div>
          <p>{good}</p>
        </ItemStat>
        <ItemStat>
          <div>Neutral</div>
          <p>{neutral}</p>
        </ItemStat>
        <ItemStat>
          <div>Bad</div>
          <p>{bad}</p>
        </ItemStat>
        <ItemStat>
          <div>Total</div>
          <p>{total}</p>
        </ItemStat>
        <ItemStat>
          <div>Positive feedback</div>
          <p>{positivePercentage} %</p>
        </ItemStat>
      </ListStat>
    </ContainerStatistics>
  );
};

export default Statistics;
