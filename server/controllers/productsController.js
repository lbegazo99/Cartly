const db = require("../db/queries")

async function getProducts(req,res){
    try {
        const {category = "new",sort = "release_date",order = "desc",sub="authentic",league="nfl"} = req.query
        
        const products = await db.getProducts({category,sort,order,sub,league});
    
        if(!products){
            res.status(404).send("No new releases")
            return;
        }
    
        res.send(products)
    } catch (error) {
        console.error("Error retrieving new releases",error)
        res.status(500).send("Internal Server Error")
    }
}

async function getProduct(req,res){
    try {

        const id = req.params.productId
        const product = await db.getProduct(id);

        if(!product){
            res.status(404).send("Product not found")
            return;
        }

        res.send(product)
        
    } catch (error) {
        console.error("Error retrieving product",error)
        res.status(500).send("Internal Server Error")
    }
}

async function getGuestCartProducts(req,res){
    try {
        const ids = Array.isArray(req.query.id) ? req.query.id.map(Number) : [Number(req.query.id)]
        const products = await db.getGuestCartProducts(ids)

        res.json(products)
    } catch (error) {
        console.error("Error retrieving product",error)
        res.status(500).send("Internal Server Error")
    }
}

module.exports = {
    getProducts,
    getProduct,
    getGuestCartProducts
}