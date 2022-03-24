import { FriendItem } from './FriendItem';
import css from './FriendList.module.css';

import friends from './friends.json';

export const FriendList = () => {
  return (
    <section className={css.friendWrapper}>
      <ul className={css.friendList}>
        {friends.map(friend => (
          <FriendItem
            key={friend.id}
            name={friend.name}
            avatar={friend.avatar}
            status={friend.isOnline}
          />
        ))}
      </ul>
    </section>
  );
};
