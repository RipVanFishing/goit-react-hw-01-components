import css from './Statistic.module.css';

export const StatisticItem = ({ label, percentage }) => {
  return (
    <li className={css.item}>
      <span class={css.label}>{label}</span>
      <span class={css.percentage}>{percentage}</span>
    </li>
  );
};
