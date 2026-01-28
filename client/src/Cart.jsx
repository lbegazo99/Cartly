import "./Cart.css"
import { getGuestCart } from "./JSHelpers/cartUtils"
import {useState,useEffect} from "react"

const Cart = () => {
    const [cartItems,setCartItems] = useState([])
    const [error,setError] = useState(null)
    let productIds = []
    useEffect(() => {
        const showCart = async () => {
            try {
                const guestCart = getGuestCart()
                productIds = guestCart.map(item => item.product_id);
                const params = new URLSearchParams()
                productIds.forEach(id => params.append("id",id))
                const response = await fetch(`http://localhost:3000/products/by-ids?${params.toString()}`,{
                    "method":"Get",
                    headers:{
                        "Content-Type":"application/json",
                    }
                })
    
                if(!response.ok){
                    throw new Error(`HTTP error: Status ${response.status}`)
                }
    
                const data = await response.json()
                console.log(data)
                setCartItems(data)
            } catch (err) {
                setError(err.message)
            }
            
        }
        showCart()
    },[productIds])
    return(
        <>
            <div className="CartContainer">
                <div className="CartItemsContainer">
                    <div className="CartItemsCard">
                    {
                                cartItems.map((cartItem) => (
                                    <div key={cartItem.id} className="CartCard">
                                        <div className="picture">
                                            <img src={`/assets/${cartItem.image_url}`} alt={cartItem.description} />
                                        </div>
                                        <div className="CartCardInfo">
                                            <div>
                                                {cartItem.description}
                                            </div>
                                        </div>
                                        <div className="CartCardPrice">
                                            <div>
                                                {cartItem.price}
                                            </div>
                                        </div>
                                        <div className="Xbutton">
                                                <button>X</button>
                                        </div>
                                    </div>
                                ))
                            }
                    </div>
                </div>
                <div className="ShoppingCartCheckoutContainer">
                    <div className="CartCheckOut">
                    <div style={{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",gap:"48%",marginTop:"10px"}}>
                        <div style={{fontSize:"Large"}}>Have a Promo Code ?</div>
                        <div>Add</div>
                    </div>

                    <div style={{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",gap:"48%",backgroundColor:"LightGray",height:"100px"}}>
                        <div style={{fontSize:"Large"}}>
                            Cart Total
                        </div>
                        <div>
                            $565.00
                        </div>
                    </div>

                    <div style={{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"50px"}}>
                        <button style={{borderRadius:"15px",background:"black",color:"white",width:"80%",height:"80%"}}>
                            Checkout
                        </button>
                    </div>

                    <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                        <p>or checkout with </p>
                    </div>

                    <div style={{display:"flex",justifyContent:"center",height:"120px"}}>
                        <div style={{display:"flex",flexDirection:"column",width:"60%",alignItems:"center",justifyContent:"center",gap:"20px"}}>
                            <button style={{height:"30px",width:"100%",background:"skyblue",color:"white",borderRadius:"10px"}}>PayPal</button>
                            <button style={{height:"30px",width:"100%",background:"black",color:"white",borderRadius:"10px"}}>Google Pay</button>
                        </div>
                    </div>

                    </div>
                </div>
            </div>
        </>
       
    )
}

export default Cart