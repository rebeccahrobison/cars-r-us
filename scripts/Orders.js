export const Orders = async () => {
    // const fetchResponse = await fetch("http://localhost:8088/orders?_expand=paint&_expand=technology&_expand=wheel&_expand=interior&_expand=vehicle")
    const fetchResponse = await fetch(`https://localhost:7203/orders`)
    const orders = await fetchResponse.json()

    let ordersHTML = `<section class="orders">`
    const divStringArray = orders.map(
        (order) => {

            return `<div class="order">${order.paintColor?.color} car with 
                         ${order.wheels?.style} wheels, 
                         ${order.interior?.material} interior, and the
                         ${order.technology?.package} Tech Package for a total cost of
                         $${order.totalCost.toFixed(2)}

                    </div>
                    <input type="button" name="complete" id="${order.id}" value="Complete">`
        }
    )

    ordersHTML += divStringArray.join("")
    ordersHTML += `</section>`

    return ordersHTML
}

document.addEventListener("click", (event) => {
    const { name, id } = event.target;
    if (name === "complete") {
        completeOrder(id);
    }
});

export const completeOrder = async (orderId) => {
    await fetch(`https://localhost:7203/orders/${orderId}/fulfill`, {
      method: "POST",
    });
    document.dispatchEvent(new CustomEvent("stateChanged"));
};

            // const orderPrice = 
            //                    (order.paintColor?.price + 
            //                    order.interior?.price + 
            //                    order.wheels?.price + 
            //                    order.technology?.price)
// (order.vehicle.multiplier) *
// ${parseFloat(orderPrice).toFixed(2)}