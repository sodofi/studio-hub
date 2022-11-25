import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import ProjectList from "./ProjectList";
import { Link } from "react-router-dom";
import AddProject from "./AddProject";
import github from './images/github.png';
import linkedin from './images/linkedin.png';
import mail from './images/mail.png';

const ProfDetails = () => {
  const history = useHistory();
  const { id } = useParams();
  const { data: profile, error, isPending } = useFetch('http://localhost:8000/profiles/' + id);

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
    <div className="prof-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { profile && (
        <div>
          <div className="prof-info">
            <div className="left-side">
              <h2>Hi, I'm</h2>
              <h1 style={{"font-weight": '800', "font-size": "42px"}}>{ profile.name }</h1>
              <p>I'm a {profile.year} studying { profile.major } at Stanford University. Currently, working on {profile.projects.length} projects.</p>
              <div className="socials" style={{"flex-direction": "column"}}>
                <a href={profile.linkedin} target="_blank"><img src={linkedin} alt="linkedin"/></a>
                <a href={profile.email} target="_blank"><img src={mail} alt="email"/></a>
                <a href={profile.gitHub} target="_blank"><img src={github} alt="github"/></a>
              </div>
            </div>

            <div className="right-side">
              <img src={profile.pfp} alt="Pfp" />
            </div>
          </div>

          <div className="project-bar">
            <h3>Projects</h3>
            <button class="primary-button" onClick={addProject}>Add Project</button>
          </div>
            
          <hr/>

          <div className="project-div">
            <ProjectList projects={profile.projects}/>      
            <button class="primary-button" onClick={handleClick}>Delete Hub</button>
          </div>

        </div>
      )}
    </div>
  );
}
 
export default ProfDetails;