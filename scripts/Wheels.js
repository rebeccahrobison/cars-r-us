import { setWheelChoice } from "./TransientState.js"

const handleWheelChoice = (event) => {
    if(event.target.id === "wheels") {
        setWheelChoice(parseInt(event.target.value))
    }
}


export const WheelOptions = async () => {
    const response = await fetch("http://localhost:8088/wheels")
    const wheels = await response.json()

    document.addEventListener("change", handleWheelChoice)

    let wheelsHTML = `<select id="wheels">
        <option value="0">Select a wheel style</option>`

    const divStringArray = wheels.map(
        (wheel) => {
            return `<option value="${wheel.id}" id="wheel"
                >${wheel.option}
                </option>`
        }
    )

    wheelsHTML += divStringArray.join("")
    wheelsHTML += `</select>`

    return wheelsHTML
}