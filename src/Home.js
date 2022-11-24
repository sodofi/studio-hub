import ProfileList from "./ProfileList";
import useFetch from "./useFetch";
//import Create from './Create';

const Home = () => {
  const { error, isPending, data: profiles } = useFetch('http://localhost:8000/profiles')

  return (
    <div className="home">
      {/* <Create/> */}
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { profiles && <ProfileList profiles={profiles} /> }
    </div>
  );
}
 
export default Home;
