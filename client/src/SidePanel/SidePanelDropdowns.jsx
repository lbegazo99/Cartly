import "./SidePanelDropdowns.css"
import { RiArrowDownWideFill } from "react-icons/ri";
import {useState} from "react"
const SidePanelDropdowns = ({title,category,setSearchFilters}) =>{
    const [showDropDown,setShowDropDown] = useState(false);
    const [queryArray,setQueryArray] = useState([])
    
    const handleClick = () =>{
        setShowDropDown(!showDropDown);
    }

    const handleButton = (title) =>{
        if(queryArray.includes(title)){
            setQueryArray(prev => prev.filter(q => q !== title))
            setSearchFilters(prev => prev.filter(q => q !== title))
        }else{
            setQueryArray(prev => [...prev,title]);
            setSearchFilters(prev => [...prev, title]);
        }
    }

    return(
    <>  
        <div style={{display:"flex" , borderBottom:"1px solid black" ,width:"250px",padding:"10px",marginLeft:"10px"}}>
            <div className="Title">{title}</div>
            <button style={{border:"none",background:"white",marginLeft:"auto"}}onClick={handleClick}><RiArrowDownWideFill /></button>
        </div>
        
        {showDropDown && 
            <div>
                {category.map((title,id) => (
                    <div style={{display:"flex",padding:"10px",marginLeft:"10px",gap:"10px"}}>
                        <button className={`dot-toggle ${queryArray.includes(title)? "active":""}`}
                         onClick={() => handleButton(title)}> <span className="dot"></span> </button>
                        <div key={id}>{title}</div>
                    </div>
                ))}
            </div>} 
    </>
    )
}

export default SidePanelDropdowns