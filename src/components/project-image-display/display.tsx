
import { useEffect } from 'react';
import './style.css'


interface props{
    images:{
        left:string;
        right:string;
        center:string;
    };
    type?:string;
}
export default function ProjectImageDisplay({images,type}:props){
    return (
        <div style={type=='desktop'?{flexDirection:'column',transform:'scale(2)'}:{flexDirection:'row'}} className="image-display">
    <img onClick={()=>{window.open(images.left,"_blank")}} className="image-item left-side" src={images.left}/>
    <img onClick={()=>{window.open(images.center,"_blank")}} className="image-item center" src={images.center}/>
    <img onClick={()=>{window.open(images.right,"_blank")}} className="image-item right-side" src={images.right}/>
</div>

    )
}