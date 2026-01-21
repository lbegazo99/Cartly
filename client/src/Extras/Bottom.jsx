import "./Bottom.css"
import DropDown from "./DropDown"
import {useState} from "react"

const Bottom = () =>{
    const newReleases = ["New Releases","New Jerseys","New Headwear","HeadWear Style Guides","Shorts","Authentic Warm Ups"]
    const men = ["Authentic Jerseys","NBA Authentic","NBA Swingman","NFL Authentic","MLB Authentic","College Jerseys"]
    const women = ["Jerseys"]
    const [activeDropdown,setActiveDropdown] = useState(null);

    const show = (key) => setActiveDropdown(key)
    const hide = () => setActiveDropdown(null)

    return (
        <div className="choices">
            <div onMouseEnter={() => show("NEW")} onMouseLeave={hide} className="dropdown">
                <div>NEW</div>
                <DropDown isDropdownVisible = {activeDropdown === "NEW"} options = {newReleases} />
            </div>
            <div className="dropdown" onMouseEnter={() => show("MEN")} onMouseLeave={hide}>
                <div>MEN</div>
                <DropDown isDropdownVisible = {activeDropdown === "MEN"} options = {men}/>
            </div>
            <div className="dropdown" onMouseEnter={() => show("WOMEN")} onMouseLeave={hide}>
                <div>WOMEN</div>
                <DropDown isDropdownVisible = {activeDropdown === "WOMEN"} options = {women}/>
            </div>
            <div className="dropdown" onMouseEnter={() => show("Jerseys")} onMouseLeave={hide}>JERSEYS</div>
            <div className="dropdown" onMouseEnter={() => show("HEADWEAR")} onMouseLeave={hide}>HEADWEAR</div>
            <div className="dropdown" onMouseEnter={() => show("NBA")} onMouseLeave={hide}>NBA</div>
            <div className="dropdown" onMouseEnter={() => show("NFL")} onMouseLeave={hide}>NFL</div>
            <div className="dropdown" onMouseEnter={() => show("MLB")} onMouseLeave={hide}>MLB</div>
            <div className="dropdown" onMouseEnter={() => show("NHL")} onMouseLeave={hide}>NHL</div>
            <div className="dropdown" onMouseEnter={() => show("COLLEGE")} onMouseLeave={hide}>COLLEGE</div>
            <div className="dropdown" onMouseEnter={() => show("MLS")} onMouseLeave={hide}>MLS</div>
            <div className="dropdown" onMouseEnter={() => show("KIDS")} onMouseLeave={hide}>KIDS</div>
            <div className="dropdown" onMouseEnter={() => show("SALE")} onMouseLeave={hide}>SALE</div>
            <div className="dropdown" onMouseEnter={() => show("JOURNAL")} onMouseLeave={hide}>JOURNAL</div>
        </div>
    )
}

export default Bottom