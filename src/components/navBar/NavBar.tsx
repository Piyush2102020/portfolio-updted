import './style.css'

import { Link} from 'react-router-dom'
export default function NavBar(){
    return(
<div className="navBar">
    <Link className='link' to='/home'><button className="nav-item">Home</button></Link>
    <Link className='link' to='/home/about'><button className="nav-item">About</button></Link>
    <Link className='link' to='/home/work'><button className="nav-item">Work</button></Link>
    <Link className='link' to='https://docs.google.com/forms/d/e/1FAIpQLSfTvVJUT7K2QuzoSJo2zTFJ7akF7sunZAT1fKRN1SBQNGRMxw/viewform?usp=sharing'><button className="nav-item">Contact Google Form</button></Link>
</div>
    )
}