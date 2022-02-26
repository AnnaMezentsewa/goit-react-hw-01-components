
import s from './FriendList.module.css';

export default function FriendListItem({avatar,name,isOnline}) {
    return (
        <li className={s.item}>
            <span className={s.status} style={{ backgroundColor: isOnline ? "green" : "red" }}>{isOnline}</span>
            <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={s.name}>{name}</p>
        </li>
    );
};
