import { FriendListItem } from 'components/FriendList/FriendListItem';
import css from 'components/FriendList/FriendList.module.css';
import friends from 'components/FriendList/friends.json';
export const FriendList = () => {
  return (
    <ul className={css.friend_list}>
      <FriendListItem friends={friends} />
    </ul>
  );
};
