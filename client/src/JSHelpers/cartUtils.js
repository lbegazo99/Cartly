export function getGuestCart() {
    const cart = localStorage.getItem("cartly_guest_cart")
    return cart ? JSON.parse(cart) : []
}