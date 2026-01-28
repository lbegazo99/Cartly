const {Router} = require("express")
const productRouter = Router();

const {getProducts,getProduct,getGuestCartProducts} = require("../controllers/productsController")

productRouter.get("/",getProducts)
productRouter.get("/by-ids",getGuestCartProducts)
productRouter.get("/:productId",getProduct)
module.exports = productRouter