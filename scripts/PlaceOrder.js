import { placeOrder } from "./TransientState.js";

const handlePlaceOrder = (clickEvent) => {
    if(clickEvent.target.id === "placeOrder") {
        placeOrder()
    }
}

export const PlaceOrderButton = () => {
    document.addEventListener("click", handlePlaceOrder)

    return `<button id="placeOrder">Place Car Order</button>`
}