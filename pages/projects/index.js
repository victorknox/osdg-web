import ProjectList from '../../components/Project';

const Projects = () => {
    const projects = [
        {title: 'Project1', body: 'lmao noobde', author: 'xyz', id: 1},
        {title: 'Project2', body: 'lmao noobde', author: 'xyz', id: 2},
        {title: 'Project3', body: 'lmao noobde', author: 'xyz', id: 3}
    ]
    const bg = 'https://media.discordapp.net/attachments/779991636460699673/888447084620030032/unknown.png?width=1440&height=437';

    return (
    <div className="Projects-page" >
        <div className="Heading" >
            <img style={{
                width: '100%',
            }} src ={bg} />
        </div>
        <ProjectList projects= {projects} />    
    </div>
    )
};

export default Projects;