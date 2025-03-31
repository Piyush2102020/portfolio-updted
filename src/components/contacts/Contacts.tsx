import './style.css'
import github from './icons8-github.svg';
import instagram from './icons8-instagram.svg';
import linkedin from './icons8-linkedin.svg';
export default function Contacts(){

  const handleRedirect=(link:string)=>{
    window.open(link,'_blank');
  }


    return(  <div className="contact-items">
        <img onClick={()=>{handleRedirect("https://github.com/Piyush2102020?tab=repositories")}}  className="contact-item" src={github}/> 
        <img onClick={()=>{handleRedirect("https://www.instagram.com/veronica.bot21/")}} className="contact-item" src={instagram}/> 
      <img onClick={()=>{handleRedirect("https://www.linkedin.com/in/piyush-bhatt-401563288")}} className="contact-item" src={linkedin}/> 
      </div>
    )
}