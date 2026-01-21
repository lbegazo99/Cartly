import "./Products.css"
import { useParams } from "react-router"
import SidePanel from "./SidePanel/SidePanel";
const Products = () =>{
    const {keyword} = useParams();
    const keyWords = ["Teams","Gender/Age","Product Style","Players","Color","Price"]
    return(
        <>
            <SidePanel keyWords={keyWords}/>
        </>
    )
}

export default Products