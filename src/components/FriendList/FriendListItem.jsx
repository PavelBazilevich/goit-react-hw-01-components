import { clsx } from 'clsx';
import css from 'components/FriendList/FriendListItem.module.css';
import PropTypes from 'prop-types';

export const FriendListItem = ({ friends }) => {
  return friends.map(friend => (
    <li key={friend.id} className={css.item}>
      <span
        className={clsx(css.status, { [css.online]: friend.isOnline })}
      ></span>
      <img
        className={css.avatar}
        src={friend.avatar}
        alt="User avatar"
        width="48"
      />
      <p className={css.name}>{friend.name}</p>
    </li>
  ));
};

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};
