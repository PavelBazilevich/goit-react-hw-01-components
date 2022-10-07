import { Profile } from './Profile/Profile';
import userInfo from 'components/Profile/user.json/user.json';
import data from 'components/Statistics/data.json';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        name={userInfo.username}
        tag={userInfo.tag}
        location={userInfo.location}
        avatar={userInfo.avatar}
        stats={userInfo.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList />
    </div>
  );
};
