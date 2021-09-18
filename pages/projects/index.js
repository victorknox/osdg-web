import Head from 'next/head';
import ProjectList from '../../components/Project';

const Projects = () => {
    const projects = [
        {
            title: 'yamb',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            tag1: 'bots',
            tag2: 'discord.py',
            tag3: 'In progress',
            img: 'https://opengraph.githubassets.com/7194f347ba8b3d2cad40c709cd384fbf0aae9fb620255457c08dff526aef8ce8/OSDG-IIITH/yamb',
            link: 'https://github.com/OSDG-IIITH/yamb'
        },
        {
            title: 'Carbonite',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            tag1: 'bots',
            tag2: 'discord.js',
            tag3: 'In progress',
            img: 'https://opengraph.githubassets.com/8fa6522825dd72b403e3af6d885aa42564c9ba4afa264dff941cdac0cf420f6a/OSDG-IIITH/Carbonite',
            link: 'https://github.com/OSDG-IIITH/Carbonite'
        },
        {
            title: 'osdg-web',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            tag1: 'webdev',
            tag2: 'Next.js',
            tag3: 'In progress',
            img: 'https://opengraph.githubassets.com/c7332d7945e285d180ada60a298963f6f71b58339b01d1a903f477e2469dc5ce/OSDG-IIITH/osdg-web',
            link: 'https://github.com/OSDG-IIITH/osdg-web'
        }
    ]
    return (
        <>
            <Head><title>OSDG - Projects</title></Head>
            <div className="projects-page" >
                <div className="projects-head d-none d-sm-block" >
                    <img src="Images/ProjectsGraphic.svg" className="img-fluid w-100" />
                    <h1 className="projects-title">Projects</h1>
                </div>
                <div className="projects-head mb-4 d-block d-sm-none">
                    <img src="Images/ProjectsGraphicMobile.svg" className="img-fluid w-100" />
                    <h1 className="projects-title">Projects</h1>
                </div>
                <ProjectList projects={projects} />
            </div>
        </>
    );
};

export default Projects;