import "./SidePanel.css"
import SidePanelDropdowns from "./SidePanelDropdowns";

const SidePanel = ({keyWords,filteredProducts,setSearchFilters}) =>{
    return(
        <>
            {keyWords.map((keyword,i) => (
                <SidePanelDropdowns  title={keyword} category ={filteredProducts[i]}  setSearchFilters = {setSearchFilters}/>
            ))}
        </>
    )
}

export default SidePanel
