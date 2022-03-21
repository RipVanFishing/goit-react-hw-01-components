import css from './Statistic.module.css';
import { Title } from './Title';
import { StatiscticList } from './StatisticList';

export const Statistic = () => {
  return (
    <section className={css.statistic}>
      <Title title="Upload stats" />
      <StatiscticList />
    </section>
  );
};
