
const Right = (props) => {
    const project = props.project;
    return (
        <div className="card mb-3" style={{maxWidth: '60%' }} className="right-project">
        <div className="row g-0">
          <div className="col-md-6">
            <div className="card-body">
              <h5 className="card-title">{project.title}</h5>
              <ul className="tag-list">
                <li className="badge bg-secondary">{project.tag1}</li>
                <li className="badge bg-secondary">{project.tag2}</li>
                <li className="badge bg-secondary">{project.tag3}</li>
              </ul>
              <p className="card-text">{project.body}</p>
              {/* <a href="#" class="card-link">Website?</a> */}
              <a href="#" className="card-link">Github link</a>
            </div>
          </div>
          <div className="col-md-6">
            <img src="https://media.discordapp.net/attachments/779991636460699673/888509511252467772/unknown.png" className="img-fluid rounded-start" alt="..."/>
          </div>
        </div>
      </div>
    )
}

const Left = (props) => {
    const project = props.project;
    return (
        <div className="card mb-3" style={{maxWidth: '60%' }} className="left-project">
        <div className="row g-0">
          <div className="col-md-6">
            <img src="https://media.discordapp.net/attachments/779991636460699673/888509511252467772/unknown.png" className="img-fluid rounded-start" alt="..."/>
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h5 className="card-title text-end">{project.title}</h5>
              <ul className="tag-list">
                <li className="badge bg-secondary">{project.tag1}</li>
                <li className="badge bg-secondary">{project.tag2}</li>
                <li className="badge bg-secondary">{project.tag3}</li>
              </ul>
              <p className="card-text">{project.body}</p>
              {/* <a href="#" class="card-link ">Website?</a> */}
              <a href="#" className="card-link text-end">Github link</a>
            </div>            
          </div>
        </div>
      </div>
    )
}

const ProjectList = (props) => {
    const projects = props.projects;
    
    return ( 
        <div className="project-list">
            {projects.map((project) => (
                <div className="project" key={project.id}>
                    {project.id % 2 === 0
                        ? <Right key={project.id.toString()} project={project} />
                        : <Left key={project.id.toString()} project ={project}/>
                    }
                </div>
            ))}
        </div>
     );
}
export default ProjectList;

