import { setVehicleChoice } from "./TransientState.js";

const handleVehicleChoice = (event) => {
    if(event.target.id === "vehicles") {
        setVehicleChoice(parseInt(event.target.value))
    }
}

export const VehiclesOptions = async () => {
    const response = await fetch("http://localhost:8088/vehicles")
    const vehicles = await response.json()

    document.addEventListener("change", handleVehicleChoice)

    let vehiclesHTML = `<select id="vehicles">
        <option value="0">Select a vehicle type</option>`

    const divStringArray = vehicles.map(
        (vehicle) => {
            return `<option value="${vehicle.id}" id="vehicle"
                >${vehicle.name}
                </option>`
        }
    )

    vehiclesHTML += divStringArray.join("")
    vehiclesHTML += `</select>`

    return vehiclesHTML
}