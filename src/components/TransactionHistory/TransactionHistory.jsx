import css from 'components/TransactionHistory/TransactionHistory.module.css';
import PropTypes, { arrayOf } from 'prop-types';

import { PositionElement } from './PositionElement';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transaction_history}>
      <thead>
        <tr>
          <th className={css.title}>Type</th>
          <th className={css.title}>Currency</th>
          <th className={css.title}>Amount</th>
        </tr>
      </thead>

      <tbody>
        {items.map(el => (
          <PositionElement
            key={el.id}
            type={el.type}
            amount={el.amount}
            currency={el.currency}
          />
        ))}
      </tbody>
    </table>
  );
};

PositionElement.propTypes = {
  items: arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
