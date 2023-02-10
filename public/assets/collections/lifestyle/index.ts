import { ImageImport, ImageData } from "~/types"
import mensshortsleevetee0 from "./mens-short-sleeve-tee0.webp"
import mongul10 from "./mongul-10.webp"
import nocap10 from "./no-cap-10.webp"
import powerinnumberstee10 from "./power-in-numbers-tee-10.webp"
import queen10 from "./queen-10.webp"
import queen11 from "./queen-11.webp"
import queen12 from "./queen-12.webp"
import queen13 from "./queen-13.webp"
import tacosvsrelationshipstee10 from "./tacos-vs-relationships-tee-10.webp"
import tvpopculturetee10 from "./tv-pop-culture-tee-10.webp"
import unisexheavycottontee10 from "./unisex-heavy-cotton-tee-10.webp"
import unisexheavycottontee11 from "./unisex-heavy-cotton-tee-11.webp"
import unisexheavycottontee20 from "./unisex-heavy-cotton-tee-20.webp"
import unisexheavycottontee30 from "./unisex-heavy-cotton-tee-30.webp"
import unisexjerseyshortsleevetee30 from "./unisex-jersey-short-sleeve-tee-30.webp"
import unisexjerseyshortsleevetee31 from "./unisex-jersey-short-sleeve-tee-31.webp"

import { lifestyle } from "./lifestyle"

const initialImports: ImageImport[] = [
    [mensshortsleevetee0, "mensshortsleevetee0", "white"],
    [mongul10, "mongul10", "white"],
    [nocap10, "nocap10", "black"],
    [powerinnumberstee10, "powerinnumberstee10", "white"],
    [queen10, "queen10", "black"],
    [queen11, "queen11", "white"],
    [queen12, "queen12", "pink"],
    [queen13, "queen13", "red"],
    [tacosvsrelationshipstee10, "tacosvsrelationshipstee10", "black"],
    [tvpopculturetee10, "tvpopculturetee10", "black"],
    [unisexheavycottontee10, "unisexheavycottontee10", "black"],
    [unisexheavycottontee11, "unisexheavycottontee11", "white"],
    [unisexheavycottontee20, "unisexheavycottontee20", "black"],
    [unisexheavycottontee30, "unisexheavycottontee30", "white"],
    [unisexjerseyshortsleevetee30, "unisexjerseyshortsleevetee30", "white"],
    [unisexjerseyshortsleevetee31, "unisexjerseyshortsleevetee31", "black"],
]

const imageImports: ImageData[] = []

initialImports.forEach((imageImport) => {
    const imageData = imageImport[0]
    const alt: string = imageImport[1]
    const color = imageImport[2]

    imageData.alt = alt
    imageImports.push(imageData)
    imageData.color = color
})

imageImports.forEach((imageImport) => {
    const alt = imageImport.alt?.slice(0, -1)
    lifestyle.find((product) => {
        if (alt === product.handle.replaceAll("-", "")) {
            imageImport.alt = product.title
            imageImport.id = product.id
        }
    })
})

export default imageImports
export { tvpopculturetee10 }
