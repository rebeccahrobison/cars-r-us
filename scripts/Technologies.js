import { SetTechnologyChoice } from "./TransientState.js"

const handleTechnologyChoice = (event) => {
    if(event.target.id === "technologies") {
        SetTechnologyChoice(parseInt(event.target.value))
    }
}



export const TechnologyOptions = async () => {
    const response = await fetch("https://localhost:7203/technologies")
    const technologies = await response.json()

    document.addEventListener("change", handleTechnologyChoice)

    let technologiesHTML = `<select id="technologies">
        <option value="0">Select a technology package</option>`

    const divStringArray = technologies.map(
        (technology) => {
            return `<option value="${technology.id}" id="technology"
                >${technology.package}
                </option>`
        }
    )

    technologiesHTML += divStringArray.join("")
    technologiesHTML += `</select>`

    return technologiesHTML
}