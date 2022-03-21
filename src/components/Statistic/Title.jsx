import css from './Statistic.module.css';

export const Title = ({ title }) => {
  return (
    <div className={css.titleWrap}>
      <h2 className={css.title}>{title}</h2>
    </div>
  );
};
