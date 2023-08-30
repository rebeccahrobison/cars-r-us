import { setInteriorChoice } from "./TransientState.js"

const handleInteriorChoice = (event) => {
    if(event.target.id === "interiors") {
        setInteriorChoice(parseInt(event.target.value))
    }
}

export const InteriorOptions = async () => {
    const response = await fetch("http://localhost:8088/interiors")
    const interiors = await response.json()

    document.addEventListener("change", handleInteriorChoice)

    let interiorsHTML = `<select id="interiors">
        <option value="0">Select an interior material</option>`

    const divStringArray = interiors.map(
        (interior) => {
            return `<option value="${interior.id}" id="interior"
                >${interior.type}
                </option>`
        }
    )

    interiorsHTML += divStringArray.join("")
    interiorsHTML += `</select>`

    return interiorsHTML
}