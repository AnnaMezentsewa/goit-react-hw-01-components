import PropTypes from 'prop-types';
import s from './FriendList.module.css';
import FriendListItem from './FriendListItem'


export default function FriendList({friends}) {
    return (
        <ul className={s.friendList}> 
            {friends.map((friend) => (
                <FriendListItem
                    key={friend.id}
                    name={friend.name}
                    avatar={friend.avatar}
                    isOnline={friend.isOnline}
                />
            ))}
        </ul>
    );

}

FriendList.propTypes = {
    name: PropTypes.string,
    avatar: PropTypes.string,
     isOnline: PropTypes.bool,
}




