import './App.css';
import UserProfile from './UserProfile';

function App() {

  const details = {
    name : "Dvijesha",
    age : 19,
    location : "Surat",
    bio : "Jay Swaminarayan"
  }

  return(
    <UserProfile  name={details.name} age={details.age} loc={details.location} bio={details.bio}/>
  )
}

export default App;
