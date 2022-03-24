import { TransactionBody } from './TransactionBody';
import css from './Transaction.module.css';
import data from './data.json';

export const Transaction = () => {
  return (
    <table className={css.transactionHistory}>
      <thead className={css.head}>
        <tr className={css.row}>
          <th className={css.title}>Type</th>
          <th className={css.title}>Amount</th>
          <th className={css.title}>Currency</th>
        </tr>
      </thead>
      <tbody className={css.body}>
        {data.map(({ id, type, amount, currency }, idx) => (
          <TransactionBody
            key={id}
            idx={idx}
            type={type}
            amount={amount}
            currency={currency}
          />
        ))}
      </tbody>
    </table>
  );
};
