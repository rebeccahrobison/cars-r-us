import { setPaintChoice } from "./TransientState.js"

const handlePaintChoice = (event) => {
    if(event.target.id === "paints") {
        setPaintChoice(parseInt(event.target.value))
    }
}


export const PaintOptions = async () => {
    const response = await fetch("https://localhost:7203/paintColors")
    const paints = await response.json()

    document.addEventListener("change", handlePaintChoice)

    let paintsHTML = `<select id="paints">
        <option value="0">Select a paint color</option>`

    const divStringArray = paints.map(
        (paint) => {
            return `<option value="${paint.id}" id="paint"
                >${paint.color}
                </option>`
        }
    )

    paintsHTML += divStringArray.join("")
    paintsHTML += `</select>`

    return paintsHTML
}

