import "./SidePanelDropdowns.css"
import { RiArrowDownWideFill } from "react-icons/ri";
import {useState} from "react"
const SidePanelDropdowns = ({title,category}) =>{
    const [showDropDown,setShowDropDown] = useState(false);
    const [select,setSelect] = useState(null)
    console.log(title)
    const handleClick = () =>{
        setShowDropDown(!showDropDown);
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
                        <button className={`dot-toggle ${select == title? "active":""}`}
                         onClick={() => setSelect(title)}> <span className="dot"></span> </button>
                        <div key={id}>{title}</div>
                    </div>
                ))}
            </div>} 
    </>
    )
}

export default SidePanelDropdowns