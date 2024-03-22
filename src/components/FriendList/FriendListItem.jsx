import "./FriendListItem.css"

function FriendListItem(props){
    let className;
    if(props.status){
        className = "green"
    }
    else{className = "red"}
    return (
        <li className="box">
  <img className="box-image" src={props.src} alt={props.name} width="48" />
  <p className="box-name">{props.name}</p>
  <p className={className}>{props.status ? "Online" : "Offline"}</p>
</li>

    )
}

export default FriendListItem;