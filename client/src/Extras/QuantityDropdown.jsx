import "./QuantityDropdown.css"
import { useState } from "react"
import { RiArrowDownWideFill } from "react-icons/ri";
const QuantityDropdown = () =>{
    const [quantity,setQuantity] = useState("1")
    return(
        <>
            <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"10px",border:"1px solid black", width:"70px",height:"40px",background:"white"}}>
            <div>{quantity}</div>
            <RiArrowDownWideFill size={15}/>
            </div>
        </>
        

    )
}

export default QuantityDropdown