const {Router} = require("express")
const productRouter = Router();

const {getProducts,getProduct} = require("../controllers/productsController")

productRouter.get("/",getProducts)
productRouter.get("/:productId",getProduct)

module.exports = productRouter