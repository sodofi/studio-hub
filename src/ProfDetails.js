import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import ProjectList from "./ProjectList";
import { Link } from "react-router-dom";
import AddProject from "./AddProject";


const ProfDetails = () => {
  const { id } = useParams();
  const { data: profile, error, isPending } = useFetch('http://localhost:8000/profiles/' + id);
  const history = useHistory();

  const handleClick = () => {
    fetch('http://localhost:8000/profiles/' + profile.id, {
      method: 'DELETE'
    }).then(() => {
      history.push('/');
    }) 
  }

  const addProject = () => {
    history.push(`/addProject/${profile.id}`);
  }

  return (
    <div className="blog-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { profile && (
        <div>
        <div className="blog-info">
          <div className="left-side">
            <h2>{ profile.name }</h2>
            <p>Written by { profile.major }</p>
            <div>{ profile.year }</div>
          </div>

          <div className="right-side">
            <img id="pfp" src={profile.pfp} alt="Pfp" />
          </div>
          
          {/* <button onClick={handleClick}>delete</button> */}
        </div>
          <div className="project-bar">
            <h2>Projects</h2>
            <button onClick={addProject}>Add Project</button>
            {/* <Link to="/addProject" params={} style={{ 
              color: 'white', 
              backgroundColor: '#f1356d',
              borderRadius: '8px',
              padding: '5px' 
            }}>Add Project</Link> */}
          </div>
          
          <hr/>

          <div className="project-div">
            <ProjectList projects={profile.projects}/>
            
          </div>

        </div>
      )}
    </div>
  );
}
 
export default ProfDetails;