import "./SearchBar.css"
import { CiSearch } from "react-icons/ci";
import {useState,useMemo} from "react"

const SearchBar = () =>{
    const teams = ["New York Giants","New England Patriots","GreenBay Packers"]
    const [query,setQuery] = useState("")

    const filteredItems = useMemo (() => {
        const q = query.trim().toLowerCase();
        if(!q) return teams;
        return teams.filter((team) =>
            team.toLowerCase().includes(q)
        )
    },[teams,query])
  
    return (
        <>  
            <div className="searchWrapper">
                <input type="search" placeholder="What can we help you find?" onChange={(e) => {setQuery(e.target.value)}}/>
            </div>
            
            <div className="searchCards">
                {query && filteredItems.map((team,index) => (
                    <div key={index} className="card">
                        <div className="description">{team}</div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default SearchBar