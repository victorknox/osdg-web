const Right = (props) => {
    const project = props.project;
    return (
        <div className="right-project">
        <h2>{project.title}</h2>
        <p>{project.body}</p>
        <p>{project.author}</p>
        </div>
    )
}

const Left = (props) => {
    const project = props.project;
    return (
        <div className="left-project">
        <h2>{project.title}</h2>
        <p>{project.body}</p>
        <p>{project.author}</p>
        </div>
    )
}

const ProjectList = (props) => {
    const projects = props.projects;
    
    return ( 
        <div className="project-list" >
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

