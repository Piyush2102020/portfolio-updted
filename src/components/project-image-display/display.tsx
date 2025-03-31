
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
        <div style={{flexDirection:'row',transform:scale(1.4)}} className="image-display">
            {images.left&&  <img onClick={()=>{window.open(images.left,"_blank")}} className="image-item left-side" src={images.left}/>}
    <img onClick={()=>{window.open(images.center,"_blank")}} className="image-item center" src={images.center}/>
            {images.right&&   <img onClick={()=>{window.open(images.right,"_blank")}} className="image-item right-side" src={images.right}/>}
</div>

    )
}
