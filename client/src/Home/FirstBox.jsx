import "./FirstBox.css"
import NFL from "../assets/NFL.png"
import NCAA from "../assets/NCAA.png"
import MLB from "../assets/MLB.png"
import NBA from "../assets/NBA.png"
import NHL from "../assets/NHL.png"
import MLS from "../assets/MLS.png"

const FirstBox = () =>{
    return(
        <div className="firstBoxContainer">
           <div className="firstBoxContent">
                <p>Shop Your Favorite League</p>
                <div className="firstBoxLeagues">

                    <div className="firstBoxItem">
                        <div className="leagueShieldBox">
                            <img className="leagueShield" src={NFL}></img>
                        </div>
                        <div className="leagueName">NFL</div>
                    </div>

                    <div className="firstBoxItem">
                        <div className="leagueShieldBox">
                            <img className="leagueShield" src={NCAA}></img>
                        </div>
                        <div className="leagueName">NCAA</div>
                    </div>

                    <div className="firstBoxItem">
                        <div className="leagueShieldBox">
                            <img className="leagueShield" src={MLB}></img>
                        </div>
                        <div className="leagueName">MLB</div>
                    </div>

                    <div className="firstBoxItem">
                        <div className="leagueShieldBox">
                            <img className="leagueShield" src={NBA}></img>
                        </div>
                        <div className="leagueName">NBA</div>
                    </div>

                    <div className="firstBoxItem">
                        <div className="leagueShieldBox">
                            <img className="leagueShield" src={NHL}></img>
                        </div>
                        <div className="leagueName">NHL</div>
                    </div>

                    <div className="firstBoxItem">
                        <div className="leagueShieldBox">
                            <img className="leagueShield" src={MLS}></img>
                        </div>
                        <div className="leagueName">MLS</div>
                    </div>


                </div>
           </div>
        </div>
    )
}

export default FirstBox