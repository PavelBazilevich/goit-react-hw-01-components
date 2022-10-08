import css from 'components/TransactionHistory/TransactionHistory.module.css';
import PropTypes from 'prop-types';

export const PositionElement = ({ type, amount, currency }) => {
  return (
    <tr className={css.line}>
      <td className={css.value}>{amount}</td>
      <td className={css.value}>{type}</td>
      <td className={css.value}>{currency}</td>
    </tr>
  );
};

PositionElement.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
