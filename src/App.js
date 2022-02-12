import Profile from "./Components/Profile/Profile";
import user from './Components/Profile/user.json';

export default function App() {
  return (
    <div> <Profile
    profileUrl={user.avatar}
    profileName={user.username}
    profileTag={user.tag}
    profileLocation={user.location}
    stats={user.stats} />
  </div>
  );
}
