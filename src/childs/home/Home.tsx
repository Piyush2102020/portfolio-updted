import './style.css'
import Typing from '../../functions/Typing'
import Contacts from '../../components/contacts/Contacts'
import { useNavigate } from 'react-router-dom'
export default function Home() {
    
    const navigate=useNavigate();
    return (
        <div className='home-container'>
            <div className="home">
            <div className="home-left-pane">
                Hey I'm<br />
                <span className="name-text"><Typing message='Piyush Bhatt' /></span>
                <p>An AI & Android Developer passionate about creating smart, efficient, and interactive solutions. From AI-powered assistants to full-stack web applications, I turn ideas into reality.</p>
                <div className='button-holder'>
                    <button onClick={()=>window.open('/raw/resume.pdf')} className="button-base dark-button">Explore CV</button>
                 
                </div>

                <Contacts/>
            </div>

            </div>
           


        </div>
    )
}