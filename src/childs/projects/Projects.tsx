import './style.css'
import Card from '../../components/card/Card'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../functions/store';
import projectInterface from '../../functions/interfaces';
import { addData } from '../../functions/slice';


interface dataType{
    
}


export default function Project(){
    const dispatch=useDispatch();
    const [data,setData]=useState<{[key:string]:projectInterface;}>({});
    useEffect(()=>{
        fetch('/projects.json').then((response)=>{
            response.json().then(
                (data)=>{
                    console.log("Adding DAta",data);
                    setData(data);
                    dispatch(addData(data));
                }
            )
        }).catch((e)=>{
            console.log("Error in json :",e);
            
        })
    },[]);

    return (
        <div className='project-container'>

{Object.values(data).map((project,index)=><Card key={index} project={project}/>)}

        </div>
    )

}