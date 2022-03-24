import css from 'components/Profile/Profile.module.css';
import { Profile } from 'components/Profile/Profile';
import { Statistic } from './Statistic/Statistic';
import { FriendList } from './Friends/FriendList';
import { Transaction } from './Transaction/Transaction';
import user from 'components/Profile/user.json';

export const App = () => {
  return (
    <div className={css.container}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistic />
      <FriendList />
      <Transaction />
    </div>
  );
};
