import "./Profile.css"

function Profile(props){
return (
    <div className="container">
<div className="sub-container">
<img className="image"
src={props.image}
alt={props.name}
/>
<p className="name">{props.name}</p>
<p className="tag">@{props.tag}</p>
<p className="location">{props.location}</p>
</div>

<ul className="list">
<li className="item">
<span>Followers</span>
<span className="followers">{props.stats.followers}</span>
</li>
<li className="item">
<span>Views</span>
<span className="views">{props.stats.views}</span>
</li>
<li className="item">
<span>Likes</span>
<span className="likes">{props.stats.likes}</span>
</li>
</ul>
</div>
)
}

export default Profile;