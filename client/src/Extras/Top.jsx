import "./Top.css"
import { MdOutlineShoppingCart } from "react-icons/md";
import {Link} from "react-router-dom"
const Top = () =>{
   return(
        <div className="header">
            <div style={{display:"flex",gap:"15px",marginRight:"60px",justifyContent:"center",alignItems:"center"}}>
                <div>Track order</div>
                <div>Help</div>
                <div>My Account</div>
                <Link to = "/cart">
                    <MdOutlineShoppingCart size={30}/>
                </Link>
            </div>
        </div>
   );
}

export default Top;