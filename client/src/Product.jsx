import "./Product.css"
import { useParams } from "react-router-dom"
import { useEffect,useState } from "react"
import QuantityDropdown from "./Extras/QuantityDropdown"
const Product = () =>{
    const {id} = useParams()
    const [error,setError] = useState(null)
    const [productInfo,setProductInfo] = useState([])

    useEffect(() => {
        const fetchProductById = async () =>{
            try {
                const response = await fetch(`http://localhost:3000/products/${id}`,{
                    method:"GET",
                    headers:{
                        "Content-Type":"application/json"
                    }
                })
                if(!response.ok){
                    throw new Error(`HTTP error: Status ${response.status}`)
                }

                const data = await response.json()
                console.log(data)
                setProductInfo(data)
            } catch (err) {
                setError(err.message)
            }
        }

        fetchProductById()
    },[])

    return (
       <div className="ProductContainer">
           <div className="ProductImage">
               <img src={`/assets/${productInfo.image_url}`} alt={productInfo.description} />
           </div>
           <div className="ProductChoices">
                <div className="ProductDescription">
                    <div>{productInfo.description}</div>
                    <div>Your Price:${productInfo.price}</div>
                </div>
                <div className="SizeChoices">
                    <div style={{fontSize:"Larger",width:"100%",paddingLeft:"25px"}}>Size</div>
                    <div className="Sizes">
                       <button className="SizeBoxes">S</button>
                       <button className="SizeBoxes">M</button>
                       <button className="SizeBoxes">L</button>
                       <button className="SizeBoxes">XL</button>
                       <button className="SizeBoxes">2XL</button>
                       <button className="SizeBoxes">3XL</button>
                    </div>
                    <div  style={{fontSize:"Larger",width:"100%",paddingLeft:"25px"}}> Quantity</div>
                    <div style={{width:"100%",height:"50px",display:"flex",alignItems:"center",paddingLeft:"25px",gap:"50px"}}>
                        <QuantityDropdown/>
                        <button className="AddToCartButton">Add to Cart</button>
                    </div>
                </div>
           </div>
       </div>
    )
}

export default Product