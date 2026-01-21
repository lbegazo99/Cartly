import "./Top.css"
import { MdOutlineShoppingCart } from "react-icons/md";

const Top = () =>{
   return(
        <div className="header">
            <div style={{display:"flex",gap:"15px",marginRight:"60px",justifyContent:"center",alignItems:"center"}}>
                <div>Track order</div>
                <div>Help</div>
                <div>My Account</div>
                  <MdOutlineShoppingCart size={30}/>
            </div>
        </div>
   );
}

export default Top;