import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";


const ProjectCard = ({ project }) => {
  return (
    <>
      <div className={`d-none d-md-flex flex-row${project.id % 2 ? "-reverse" : ""} mb-5`}>
        <div className="d-flex flex-column project-img-container justify-content-center col-6 col-lg-5">
          <img src={project.img} className={`rounded project-img ${project.id % 2 ? "right" : "left"}`} alt="" />
        </div>
        <div className={`project-info d-flex flex-column col-6 col-lg-3 justify-content-center align-items-${project.id % 2 ? "start" : "end"}`}>
          <h4 className="px-2">{project.title}</h4>
          <div className="tag-list d-flex flex-row justify-content-start">
            <span className="tag tag1">{project.tag1}</span>
            <span className="tag tag2">{project.tag2}</span>
            <span className="tag tag3" >{project.tag3}</span>
          </div>
          <div className={`card project-desc shadow ${project.id % 2 ? "right" : "left"}`}>
            <p>{project.body}</p>
          </div>
          <a href={project.link} target="_blank" className="btn btn-sm text-white btn-info my-2 mx-1"><FontAwesomeIcon icon={faGithub} /> View Source</a>
        </div>
      </div>
      <div className="d-flex flex-column align-items-center d-md-none project-info mb-5">
        <h4 className="px-2">{project.title}</h4>
        <div className="tag-list d-flex flex-row justify-content-start">
          <span className="tag tag1">{project.tag1}</span>
          <span className="tag tag2">{project.tag2}</span>
          <span className="tag tag3" >{project.tag3}</span>
        </div>
        <div className="project-img-container col-10 shadow">
          <img src={project.img} alt="" className="img-fluid rounded" />
        </div>
        <div className={`project-desc mobile px-3 pt-4 shadow rounded-bottom`}>
          <p>{project.body}</p>
        </div>
        <a href={project.link} target="_blank" className="btn btn-sm text-white btn-info my-2 mx-1"><FontAwesomeIcon icon={faGithub} /> View Source</a>
      </div>
    </>
  );
}

const ProjectList = ({ projects }) => {

  return (
    <div className="px-5 py-1">
      {projects.map((p, i) => {
        p.id = i;
        return <ProjectCard project={p} key={i} />
      })}
    </div>
  );
}
export default ProjectList;

