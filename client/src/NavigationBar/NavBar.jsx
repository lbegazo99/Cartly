import "./NavBar.css"
import SearchBar from "../SearchBar/SearchBar"
const NavBar = () => {
    return(
        <div className = "NavBar">
                <div className="logoBox">
                    <img className="logo" src="/assets/cartlyLogo.png" alt="Cartly Logo" />
                </div>
                
                <div className="searchBarBox">
                    <SearchBar/>
                </div>
        </div>
    );
}

export default NavBar