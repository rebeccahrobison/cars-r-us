const transientState = {
    paintId: 0,
    interiorId: 0,
    wheelId: 0,
    technologyId: 0,
    vehicleId: 0
}

export const setPaintChoice = (chosenPaint) => {
    transientState.paintId = chosenPaint
    console.log(transientState)
}

export const setInteriorChoice = (chosenInterior) => {
    transientState.interiorId = chosenInterior
    console.log(transientState)
}

export const setWheelChoice = (chosenWheel) => {
    transientState.wheelId = chosenWheel
    console.log(transientState)
}

export const SetTechnologyChoice = (chosenTechnology) => {
    transientState.technologyId = chosenTechnology
    console.log(transientState)
}

export const setVehicleChoice = (chosenVehicle) => {
    transientState.vehicleId = chosenVehicle
    console.log(transientState)
}

export const placeOrder = async () => {
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)
    }

    const response = await (fetch("http://localhost:8088/orders", postOptions))

    const customEvent = new CustomEvent("newOrderCreated")
    document.dispatchEvent(customEvent)
}