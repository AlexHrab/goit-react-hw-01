import FriendListItem from "./FriendListItem"
import "./FriendList.css"

function FriendList({friends}){
    return(
        <ul className="friends-list">
		{friends.map(el => {return <FriendListItem src={el.avatar} name={el.name} status={el.isOnline} key={el.id}/>})}
</ul>
    )
}

export default FriendList;