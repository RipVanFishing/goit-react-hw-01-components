import css from './FriendList.module.css';

export const FriendItem = ({ avatar, name, status }) => {
  return (
    <li className={css.item}>
      <span
        className={css.status}
        style={{ backgroundColor: status ? 'green' : 'red' }}
      ></span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};
