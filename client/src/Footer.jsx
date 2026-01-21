import "./Footer.css"

const Footer = () => {
    return (
        <>
        <div className="FooterContainer">
            <div className="FooterBox">
                <div className="FooterContent"> 
                    <h4>Visit</h4>
                    <div>Find A store</div>
                </div>
            </div>

            <div className="FooterBox">
                <div className="FooterContent">
                    <h4>Company</h4>
                    <div>About Us</div>
                    <div>Careers</div>
                </div>
            </div>

            <div className="FooterBox">
                <div className="FooterContent">
                    <h4>Support</h4>
                    <div>Help Center</div>
                    <div>Shipping</div>
                    <div>Order Status</div>
                    <div>Returns</div>
                    <div>Size Charts</div>
                    <div>Contact Us</div>
                </div>
            </div>

            <div className="FooterBox">
                <div className="FooterContent">
                    <div>Stay updated on sales,new items and more</div>
                    <div style={{color:"white",backgroundColor:"black",display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"40px"}}>
                    Sign Up & Save 10%</div>
                    <div style={{display:"flex",gap:"10px",flexDirection:"column"}}>
                        <h5>Follow Us</h5>
                        <div style={{display:"flex",gap:"10px"}}>
                            <div style={{display:"flex",alignItems:"center",justifyContent:"center",width:"40px",height:"40px",borderRadius:"100%",border:"1px solid",color:"white",background:"black"}}>
                                F
                            </div>
                            <div style={{display:"flex",alignItems:"center",justifyContent:"center",width:"40px",height:"40px",borderRadius:"100%",border:"1px solid",color:"white",background:"black"}}>
                                X
                            </div>
                            <div style={{display:"flex",alignItems:"center",justifyContent:"center",width:"40px",height:"40px",borderRadius:"100%",border:"1px solid",color:"white",background:"black"}}>
                                IG
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer