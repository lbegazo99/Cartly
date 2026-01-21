import "./SidePanel.css"
import SidePanelDropdowns from "./SidePanelDropdowns";
const teams = ["Alabama Crimson Tide","Anaheim Ducks","Arizona DiamondBacks","Athletics","Atlanta Braves"]
const SidePanel = ({keyWords}) =>{
    return(
        <>
            {keyWords.map((keyword) => (
                <SidePanelDropdowns  title={keyword} category ={teams}/>
            ))}
        </>
    )
}

export default SidePanel
