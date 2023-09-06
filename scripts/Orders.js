export const Orders = async () => {
    const fetchResponse = await fetch("http://localhost:8088/orders?_expand=paint&_expand=technology&_expand=wheel&_expand=interior")
    const orders = await fetchResponse.json()

    let ordersHTML = `<section class="orders">`
    const divStringArray = orders.map(
        (order) => {
            const orderPrice = order.paint.price + 
                               order.interior.price + 
                               order.wheel.price + 
                               order.technology.price
            return `<div class="order">${order.paint.color} car with 
                         ${order.wheel.option} wheels, 
                         ${order.interior.type} interior, and the
                         ${order.technology.option} for a total cost of
                         $${parseFloat(orderPrice).toFixed(2)}
                    </div>`
        }
    )

    ordersHTML += divStringArray.join("")
    ordersHTML += `</section>`

    return ordersHTML
}