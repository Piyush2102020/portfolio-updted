import './style.css'
import projectInterface from '../../functions/interfaces'
import Beans from '../beans/Beans';
import { useSelector } from 'react-redux';
import { RootState } from '../../functions/store';
import ProjectImageDisplay from '../project-image-display/display';

interface props {
    projectName: string;
    type?: string;
}
export default function ProjectDisplay({ projectName, type }: props) {
    const data = useSelector((state: RootState) => state.data) as { [key: string]: projectInterface };
    const project = data?.[projectName];

    if (!project) {
        return <div>Loading project</div>
    }
    return (
        <div className="project-container">
            <div className="first-section">
                <div className="first-text-content">
                    <h2>{project.name}</h2><span className='span-text'>Status : {project.status} | Span : {project.timeTaken}</span>
                    <p>
                        {project.description}<br /><br />
                        <h3>Why i created it?</h3><br />
                        {project.purpose}<br />
                    </p>
                    Tech Stack :- <br />
                    <Beans items={project.techStack} />
                    <br />
                    Category :-<br />
                    <Beans items={project.tags} />


                </div>

                <div className="project-images">
                    <ProjectImageDisplay type={type} images={project.images.front} />

                </div>
            </div>
        </div>
    )
}