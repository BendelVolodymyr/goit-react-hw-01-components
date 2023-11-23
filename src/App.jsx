import FriendList from "./FriendList/FriendList";
import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";
import TransactionHistory from "./TransactionHistory/TransactionHistory";

import user from './path/to/user.json';
import data from './path/to/data.json';
import transactions from './path/to/transactions.json';
import friends from './path/to/friends.json';

export const App = () => {
  return (
    <>
      <section className="user">
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats} />
      </section>
      <section className="statistics">
        <h2 className="title">Upload stats</h2>
          <ul className="stat-list">
            <Statistics stats={data}/>
          </ul>
      </section>
      <section className="friends">
        <ul className="friend-list">
          <FriendList friends={friends} />
        </ul>
      </section>
      <section className="transaction">
        <table className="transaction-history">
          <thead>
            <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
            </tr>
          </thead>
          <tbody>
            <TransactionHistory items={transactions} />
          </tbody>
        </table>
      </section>
    </>
  );
};

export default App;