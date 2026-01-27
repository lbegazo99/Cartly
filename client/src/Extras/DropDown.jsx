import "./DropDown.css"
import { Link } from "react-router-dom"

const DropDown = ({ isDropdownVisible, options = [] }) => {
  return (
    <div className={isDropdownVisible ? "dropdownMenu active" : "dropdownMenu"}>
      {options.map((opt, id) => (
        <Link className="dropdownItem"
          key={id}
          to={`/products?category=${opt.category}&sub=${opt.sub}&league=${opt.league ?? "none"}&sort=release_date&order=desc`}
        >
          {opt.label}
        </Link>
      ))}
    </div>
  )
}

export default DropDown
