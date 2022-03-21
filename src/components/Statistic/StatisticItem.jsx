import css from './Statistic.module.css';

export const StatisticItem = ({ label, percentage }) => {
  return (
    <li className={css.item} style={{ backgroundColor: `${generateColor()}` }}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage} %</span>
    </li>
  );
};

function generateColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
