import "./Bottom.css"
import DropDown from "./DropDown"
import { useState } from "react"

const Bottom = () => {
  const newReleases = [
    { label: "New Releases", category: "none", sub: "new" },
    { label: "New Jerseys", category: "jerseys", sub: "new" },
    { label: "New Headwear", category: "headwear", sub: "new" },
    { label: "New Shorts", category: "shorts", sub: "new" },
  ]

  const men = [
    { label: "Authentic Jerseys", category: "jerseys", sub: "authentic", league: "none" },
    { label: "NBA Authentic", category: "jerseys", sub: "authentic", league: "NBA" },
    { label: "NBA Swingman", category: "jerseys", sub: "swingman", league: "NBA" },
    { label: "NFL Authentic", category: "jerseys", sub: "authentic", league: "NFL" },
    { label: "MLB Authentic", category: "jerseys", sub: "authentic", league: "MLB" },
    { label: "College Jerseys", category: "jerseys", sub: "none", league: "NCAA" },
  ]

  const [activeDropdown, setActiveDropdown] = useState(null)

  const show = (key) => setActiveDropdown(key)
  const hide = () => setActiveDropdown(null)

  return (
    <div className="choices">
      <div onMouseEnter={() => show("NEW")} onMouseLeave={hide} className="dropdown">
        <div>NEW</div>
        <DropDown isDropdownVisible={activeDropdown === "NEW"} options={newReleases} />
      </div>

      <div onMouseEnter={() => show("MEN")} onMouseLeave={hide} className="dropdown">
        <div>MEN</div>
        <DropDown isDropdownVisible={activeDropdown === "MEN"} options={men} />
      </div>

      <div className="dropdown">WOMEN</div>
      <div className="dropdown">JERSEYS</div>
      <div className="dropdown">HEADWEAR</div>
      <div className="dropdown">NBA</div>
      <div className="dropdown">NFL</div>
      <div className="dropdown">MLB</div>
      <div className="dropdown">NHL</div>
      <div className="dropdown">COLLEGE</div>
      <div className="dropdown">MLS</div>
      <div className="dropdown">KIDS</div>
      <div className="dropdown">SALE</div>
      <div className="dropdown">JOURNAL</div>
    </div>
  )
}

export default Bottom
