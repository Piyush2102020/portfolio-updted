import './style.css'

interface props{
    items:string[]
}
export default function Beans({items}:props){
    
    return(<div className="bean-layout">{items.map((text)=><div className="bean">{text}</div>)}</div>)
}