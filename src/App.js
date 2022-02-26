import Profile from "./Components/Profile/Profile";
import Statistics from './Components/Statistics/Statistics';
import FriendList from './Components/FriendList/FriendList';
import TransactionHistory from './Components/TransactionHistory/TransactionHistory'

import user from './Components/Profile/user.json';
import data from './Components/Statistics/data.json';
import friends from './Components/FriendList/friends.json';
import transactions from './Components/TransactionHistory/transactions.json';



export default function App() {
  return (
    <div>
      <Profile
        avatar={user.avatar}
        name={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
     <Statistics
        title="Upload stats"
        stats={data}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions}/>
  </div>
  );
}
