import "./FirstBox.css"


const FirstBox = () =>{
    return(
        <div className="firstBoxContainer">
           <div className="firstBoxContent">
                <p>Shop Your Favorite League</p>
                <div className="firstBoxLeagues">

                    <div className="firstBoxItem">
                        <div className="leagueShieldBox">
                            <img className="leagueShield" src="./assets/NFL.png"></img>
                        </div>
                        <div className="leagueName">NFL</div>
                    </div>

                    <div className="firstBoxItem">
                        <div className="leagueShieldBox">
                            <img className="leagueShield" src="./assets/NCAA.png"></img>
                        </div>
                        <div className="leagueName">NCAA</div>
                    </div>

                    <div className="firstBoxItem">
                        <div className="leagueShieldBox">
                            <img className="leagueShield" src="./assets/MLB.png"></img>
                        </div>
                        <div className="leagueName">MLB</div>
                    </div>

                    <div className="firstBoxItem">
                        <div className="leagueShieldBox">
                            <img className="leagueShield" src="./assets/NBA.png"></img>
                        </div>
                        <div className="leagueName">NBA</div>
                    </div>

                    <div className="firstBoxItem">
                        <div className="leagueShieldBox">
                            <img className="leagueShield" src="./assets/NHL.png"></img>
                        </div>
                        <div className="leagueName">NHL</div>
                    </div>

                    <div className="firstBoxItem">
                        <div className="leagueShieldBox">
                            <img className="leagueShield" src="./assets/MLS.png"></img>
                        </div>
                        <div className="leagueName">MLS</div>
                    </div>


                </div>
           </div>
        </div>
    )
}

export default FirstBox