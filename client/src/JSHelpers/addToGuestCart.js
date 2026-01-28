import { getGuestCart } from "./cartUtils"

export function addToGuestCart(productId,qty = 1){

    const cart = getGuestCart()
    console.log(cart)
    const existingItem = cart.find(item => item.product_id === productId)

    if(existingItem){
        existingItem.quantity += qty
    }else{
        cart.push({
            product_id:productId,
            quantity:qty
        })
    }

    localStorage.setItem(
        "cartly_guest_cart",
        JSON.stringify(cart)
    )
}