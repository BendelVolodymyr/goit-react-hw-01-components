const FriendList = (object) => {
    return object.friends.map(({id, avatar, name, isOnline}) => (
            <li className="item" key={id}>
                {isOnline ? (<span className="status-on"></span>) : (<span className="status-off"></span>)}
                <img className="avatar" src={avatar} alt="User avatar" width="48" />
                <p className="name">{name}</p>
            </li>
    ))
}

export default FriendList;