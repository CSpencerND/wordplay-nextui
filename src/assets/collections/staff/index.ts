import { ImageImport, ImageData } from "~/types"
import creativityiscontagious10 from "./creativity-is-contagious-10.webp"
import facesofchangetee10 from "./faces-of-change-tee-10.webp"
import facesofchangetee11 from "./faces-of-change-tee-11.webp"
import gameonlocktee10 from "./game-on-lock-tee-10.webp"
import keepthemusicplaying10 from "./keep-the-music-playing-10.webp"
import mensshortsleevetee10 from "./mens-short-sleeve-tee-10.webp"
import mensshortsleevetee11 from "./mens-short-sleeve-tee-11.webp"
import nocap10 from "./no-cap-10.webp"
import powerinnumberstee10 from "./power-in-numbers-tee-10.webp"
import tacosvsrelationshipstee10 from "./tacos-vs-relationships-tee-10.webp"
import tvpopculturetee10 from "./tv-pop-culture-tee-10.webp"
import unisexheavycottontee20 from "./unisex-heavy-cotton-tee-20.webp"
import unisexjerseyshortsleevetee10 from "./unisex-jersey-short-sleeve-tee-10.webp"
import unisexjerseyshortsleevetee0 from "./unisex-jersey-short-sleeve-tee0.webp"
import unisexjerseyshortsleevetee1 from "./unisex-jersey-short-sleeve-tee1.webp"
import womenssoftstyletee0 from "./womens-softstyle-tee0.webp"
import wordplayheartbeattee10 from "./wordplay-heartbeat-tee-10.webp"

import { staffPicks } from "./staffPicks"

const initialImports: ImageImport[] = [
    [creativityiscontagious10, "creativityiscontagious10", "white"],
    [facesofchangetee10, "facesofchangetee10", "black"],
    [facesofchangetee11, "facesofchangetee11", "white"],
    [gameonlocktee10, "gameonlocktee10", "black"],
    [keepthemusicplaying10, "keepthemusicplaying10", "white"],
    [mensshortsleevetee10, "mensshortsleevetee10", "white"],
    [mensshortsleevetee11, "mensshortsleevetee11", "black"],
    [nocap10, "nocap10", "black"],
    [powerinnumberstee10, "powerinnumberstee10", "white"],
    [tacosvsrelationshipstee10, "tacosvsrelationshipstee10", "black"],
    [tvpopculturetee10, "tvpopculturetee10", "black"],
    [unisexheavycottontee20, "unisexheavycottontee20", "black"],
    [unisexjerseyshortsleevetee10, "unisexjerseyshortsleevetee10", "navy"],
    [unisexjerseyshortsleevetee0, "unisexjerseyshortsleevetee0", "lightBlue"],
    [unisexjerseyshortsleevetee1, "unisexjerseyshortsleevetee1", "white"],
    [womenssoftstyletee0, "womenssoftstyletee0", "white"],
    [wordplayheartbeattee10, "wordplayheartbeattee10", "white"],
]

const imageImports: ImageData[] = []

initialImports.forEach((imageImport) => {
    const imageData = imageImport[0]
    const alt: string = imageImport[1]
    const color = imageImport[2]

    imageData.alt = alt
    imageData.color = color
    imageImports.push(imageData)
})

imageImports.forEach((imageImport) => {
    const alt = imageImport.alt?.slice(0, -1)
    staffPicks.find((product) => {
        if (alt === product.handle.replaceAll("-", "")) {
            imageImport.alt = product.title
            imageImport.id = product.id
        }
    })
})

export default imageImports
export { facesofchangetee10 }
