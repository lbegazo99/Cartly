import "./QuantityDropdown.css"
import { useState } from "react"
import { RiArrowDownWideFill } from "react-icons/ri";
const QuantityDropdown = () =>{
    const [quantity,setQuantity] = useState("1")
    const [dropdown,setDropdown] = useState(false)
    return(
        <div className="QuantityDropdownContainer">
            <div onClick={() => {setDropdown(!dropdown)}} className = "QuantityButton">
            <div>{quantity}</div>
            <RiArrowDownWideFill size={15}/>
            </div>
            <div className = "QuantityDropdown" >
                {   dropdown && 
                        <div className="QuantityOptionList">
                            <div onClick={() => setQuantity(1)} className="QuantityOption">1</div>
                            <div onClick={() => setQuantity(2)} className="QuantityOption">2</div>
                            <div onClick={() => setQuantity(3)} className="QuantityOption">3</div>
                            <div onClick={() => setQuantity(4)} className="QuantityOption">4</div>
                            <div onClick={() => setQuantity(5)} className="QuantityOption">5</div>
                        </div>
                }
            </div>
        </div>
        

    )
}

export default QuantityDropdown