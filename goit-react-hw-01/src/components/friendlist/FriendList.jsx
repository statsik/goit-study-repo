import FriendListItem from "../friendlistitem/FriendListItem";
import './FriendList.css'

const FriendList = ({ friends }) => {
    return (
    <ul className="list-task-2-2">
        {friends.map(friend => (
            <li key={friend.id}>
            <FriendListItem
                name={friend.name}
                isOnline={friend.isOnline}
                avatar={friend.avatar}
            />
            </li>
        ))} 
    </ul>  
    )
    
}

export default FriendList;