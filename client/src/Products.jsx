import "./Products.css"
import { useSearchParams } from "react-router-dom"
import SidePanel from "./SidePanel/SidePanel"
import { useState, useEffect,useMemo } from "react"
import { Link } from "react-router-dom"

const Products = () => {
  const [products, setProducts] = useState([])
  const [searchFilters,setSearchFilters] = useState([])
  const [error, setError] = useState(null)

  const [searchParams] = useSearchParams()

  const category = searchParams.get("category")
  const sort = searchParams.get("sort") || "release_date"
  const order = searchParams.get("order") || "desc"
  const sub = searchParams.get("sub") || "authentic"
  const league = searchParams.get("league") || "nfl"

  const teams = [... new Set(products.filter(p => p.team).map(p => p.team))]
  const gender = [... new Set(products.filter(p => p.gender).map(p => p.gender))]
  const product_style = [... new Set(products.filter(p => p.item_type).map(p => p.item_type))]
  const players = [... new Set(products.filter(p => p.player).map(p => p.player))]
  const colors = [... new Set(products.filter(p => p.primary_color).map(p => p.primary_color))]
  const price = [... new Set(products.filter(p => p.price).map((p)=> {
      if(p.price > 50 && p.price <= 100){
        return "50 to 100"
      }else{
        return "100 to 500"
      }
  }))]
  const keyWords = ["Teams", "Gender/Age", "Product Style", "Players", "Color", "Price"]
  const filteredProducts = [teams,gender,product_style,players,colors,price]

  const filteredItems = useMemo(() => {
    const results = [];

    if(searchFilters.length == 0){
      return products;
    }
  
    searchFilters.forEach(searchQuery => {
      if (teams.includes(searchQuery)) results.push(...products.filter(p => p.team === searchQuery));
      if (gender.includes(searchQuery)) results.push(...products.filter(p => p.gender === searchQuery));
      if (product_style.includes(searchQuery)) results.push(...products.filter(p => p.item_type === searchQuery));
      if (players.includes(searchQuery)) results.push(...products.filter(p => p.player === searchQuery));
      if (colors.includes(searchQuery)) results.push(...products.filter(p => p.color === searchQuery));
  
      if (searchQuery === "50 to 100") results.push(...products.filter(p => p.price >= 50 && p.price <= 100));
      if (searchQuery === "100 to 500") results.push(...products.filter(p => p.price >= 100 && p.price <= 500));
    });
  
    return Array.from(new Map(results.map(p => [p.id, p])).values());
  }, [searchFilters, products, teams, gender, product_style, players, colors]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const qs = new URLSearchParams()
        if (category) qs.set("category", category)
        if (sort) qs.set("sort", sort)
        if (order) qs.set("order", order)
        if (sub) qs.set("sub", sub)
        if (league) qs.set("league", league)

        const response = await fetch(
          `http://localhost:3000/products?${qs.toString()}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        )

        if (!response.ok) {
          throw new Error(`HTTP error: Status ${response.status}`)
        }

        const data = await response.json()
        console.log(data.rows)
        setProducts(data.rows)
      } catch (err) {
        setError(err.message)
      }
    }

    getProducts()
  }, [category, sort, order, sub, league])

 
  return (
    <div style={{display:"flex"}}>
        <div>
        <SidePanel keyWords={keyWords} filteredProducts = {filteredProducts} setSearchFilters = {setSearchFilters}/>
        </div>

        <div className="GridContainer">
          {filteredItems.map((item) => (
            <Link to = {`/product/${item.id}`}>
               <div key={item.id} className="card">
                
                  <img src={`/assets/${item.image_url}`} alt={`${item.description}`} />
                  <div className="description">{item.description}</div>
                  <div className="price">{`$${item.price}`}</div>
              </div>
            </Link>
          ))}
        </div>

    </div>    
  )
}

export default Products
