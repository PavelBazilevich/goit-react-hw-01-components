import css from 'components/TransactionHistory/TransactionHistory.module.css';

export const PositionElement = ({ type, amount, currency }) => {
  return (
    <tr className={css.line}>
      <td className={css.value}>{amount}</td>
      <td className={css.value}>{type}</td>
      <td className={css.value}>{currency}</td>
    </tr>
  );
};
