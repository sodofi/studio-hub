import { Link } from 'react-router-dom';

const ProfileList = ({ profiles }) => {

  return (
    <div className="grid-list">
      {profiles.map(profile => (
        <div className="prof-preview" key={profile.id} >
          <Link to={`/profiles/${profile.id}`}>
            <img src={profile.pfp} alt="Pfp" />
            <h2>{ profile.name }</h2>
            <p>{ profile.major }</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
 
export default ProfileList;