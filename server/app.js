require("dotenv").config();
const express = require("express")
const cors = require("cors")
const app = express();
const productRouter = require("./routes/productRouter");

app.use(cors())
app.use("/products",productRouter)

const PORT = 3000;
app.listen(PORT,(error) => {
    if(error){
        throw error;
    }

    console.log(`My Express app - listening on port ${PORT}!`)
})

