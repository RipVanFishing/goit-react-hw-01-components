import css from './Transaction.module.css';

export const TransactionBody = ({ type, amount, currency, idx }) => {
  return (
    <tr
      className={css.tableRow}
      style={{ backgroundColor: idx % 2 === 0 ? 'blue' : 'grey' }}
    >
      <td className={css.tableCell}>{Upper(type)}</td>
      <td className={css.tableCell}>{amount}</td>
      <td className={css.tableCell}>{currency}</td>
    </tr>
  );
};

function Upper(word) {
  let newWorld = word[0].toUpperCase() + word.slice(1);
  return newWorld;
}
