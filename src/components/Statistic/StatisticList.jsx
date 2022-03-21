import css from './Statistic.module.css';
import data from './data.json';
import { StatisticItem } from './StatisticItem';

export const StatiscticList = () => {
  return (
    <ul className={css.statList}>
      {data.map(dat => (
        <StatisticItem
          key={dat.id}
          label={dat.label}
          percentage={dat.percentage}
        />
      ))}
    </ul>
  );
};
