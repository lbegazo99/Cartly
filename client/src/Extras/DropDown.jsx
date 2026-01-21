import "./DropDown.css"
import {Link} from "react-router"
const DropDown = ({isDropdownVisible,options}) =>{
  
    return(
        <div className= {isDropdownVisible ? "dropdownMenu active" : "dropdownMenu"}>
            {options.map((option) => (
                <Link to = {`products/${option.trim()}`}> <button  className="dropdownItem">{option}</button> </Link>
            ))}
        </div>
    )

   
}

export default DropDown