import FriendListItem from './FriendListItem';

interface FriendListProps {
  friends: { avatar: string; name: string; isOnline: boolean; id: number }[];
}

const FriendList: React.FC<FriendListProps> = ({ friends }) => {
  const resultFriends = friends.map(({ id, avatar, name, isOnline }) => (
    <ul className="friend-list" key={id}>
      <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
    </ul>
  ));

  return <section className="friends">{resultFriends}</section>;
};

export default FriendList;
