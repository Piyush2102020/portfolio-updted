import { useEffect, useState } from 'react';
import './style.css'


export default function ImageDisplay(){
    const [current,setCurrent]=useState(0);
    


    useEffect(()=>{
        const items = document.querySelectorAll('.display-item');    
        function slide(currentItem:number) {
            const activeItem = items[currentItem];
            activeItem.classList.remove('active');
            activeItem.classList.add('exit');
    
            setTimeout(() => {
                activeItem.classList.remove('exit');
                setCurrent((currentItem + 1) % items.length);
                items[currentItem].classList.add('active');
            }, 1000); }
            slide(current);

    },[current]);

    return(<div className="image-display">
        <img className="display-item" src="/icons/icons8-azure.svg"/>
        <img className="display-item" src="/icons/ollama.svg"/>
        <img className="display-item" src="/icons/icons8-azure.svg"/>
    </div>)
}