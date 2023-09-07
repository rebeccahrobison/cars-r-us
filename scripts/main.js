import { InteriorOptions } from "./Interiors.js"
import { Orders } from "./Orders.js"
import { PaintOptions } from "./Paints.js"
import { PlaceOrderButton } from "./PlaceOrder.js"
import { TechnologyOptions } from "./Technologies.js"
import { VehiclesOptions } from "./Vehicles.js"
import { WheelOptions } from "./Wheels.js"


const container = document.querySelector("#container")

const render = async () => {
    const paintsHTML = await PaintOptions()
    const interiorsHTML = await InteriorOptions()
    const wheelsHTML = await WheelOptions()
    const technologiesHTML = await TechnologyOptions()
    const vehiclesHTML = await VehiclesOptions()
    const buttonHTML = PlaceOrderButton()
    const ordersHTML = await Orders()

    const composedHTML = `
        <h1>Cars-'R-Us: Personal Car Builder</h1>
            <article class="choices">
                <section class="choices__paints options">
                    <h2>Paints</h2>
                    ${paintsHTML}
                </section>
                
                <section class="choices__interiors options">
                    <h2>Interiors</h2>
                    ${interiorsHTML}
                </section>

                <section class="choices__wheels options">
                    <h2>Wheels</h2>
                    ${wheelsHTML}
                </section>

                <section class="choices__technologies options">
                    <h2>Technologies</h2>
                    ${technologiesHTML}
                </section>

                <section class="choices__vehicles options">
                    <h2>Vehicle Types</h2>
                    ${vehiclesHTML}
                </section>
            </article>

            <article class="orderButton">
                ${buttonHTML}
            </article>

            <article class="customOrders">
                <h2>Custom Car Orders</h2>
                ${ordersHTML}
            </article>
        `

        container.innerHTML = composedHTML
}

document.addEventListener("newOrderCreated", event => {
    render()
})

render()