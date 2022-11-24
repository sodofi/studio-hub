import { Link } from 'react-router-dom';

const ProjectList = ({projects}) => {

  return (
    <div className="grid-list">
      {projects.map(project => (
        <div className="blog-preview">
          <img src={project.img} alt="project img" />
          <h2>{project.title}</h2>
          <p>{project.desc}</p>
        </div>
      ))}
    </div>
  );
}
 
export default ProjectList;