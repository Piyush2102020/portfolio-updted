import './style.css'
import projectInterface from '../../functions/interfaces'
import Beans from '../beans/Beans';
import { useNavigate } from 'react-router-dom';
interface ProjectProp{
    project:projectInterface;
}
export default function Card({project}:ProjectProp) {
    const navigate=useNavigate();
    return (
        <div className="project-card">

            <div className="card-text-content">
                <h2><b>{project.name}</b></h2>
                <p>
                {project.shortDescription}<br />
                Category :-
                </p>
                <Beans items={project.tags}/>
                    
                <div className='holder'><button onClick={()=>{navigate(project.name.split(" ")[0].toLowerCase())}} className="button-base dark-button">View Project</button>
                <span className='span-text'>Status : {project.status} <br/>Span : {project.timeTaken}</span>
                </div>
                

            </div>
            <div className="card-image">
                <img className="card-image" src={project.logo} />
            </div>

        </div>

    )
}