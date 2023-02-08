import { ImageImport, ImageData } from "~/types"
import facesofchangetee10 from "./faces-of-change-tee-10.webp"
import facesofchangetee11 from "./faces-of-change-tee-11.webp"
import gameonlocktee10 from "./game-on-lock-tee-10.webp"
import mensshortsleevetee10 from "./mens-short-sleeve-tee-10.webp"
import mensshortsleevetee11 from "./mens-short-sleeve-tee-11.webp"
import nocap10 from "./no-cap-10.webp"
import powerinnumberstee10 from "./power-in-numbers-tee-10.webp"
import saylesstee10 from "./say-less-tee-10.webp"
import saylesstee11 from "./say-less-tee-11.webp"
import saylesstee0 from "./say-less-tee0.webp"
import saylesstee1 from "./say-less-tee1.webp"
import saylesstee2 from "./say-less-tee2.webp"
import saylesstee3 from "./say-less-tee3.webp"
import saylesstee4 from "./say-less-tee4.webp"
import saylesstee5 from "./say-less-tee5.webp"
import unisexheavycottontee20 from "./unisex-heavy-cotton-tee-20.webp"
import wordplayheartbeattee10 from "./wordplay-heartbeat-tee-10.webp"

import { mindset } from "./mindset"

const initialImports: ImageImport[] = [
    [facesofchangetee10, "facesofchangetee10", "black"],
    [facesofchangetee11, "facesofchangetee11", "white"],
    [gameonlocktee10, "gameonlocktee10", "black"],
    [mensshortsleevetee10, "mensshortsleevetee10", "white"],
    [mensshortsleevetee11, "mensshortsleevetee11", "black"],
    [nocap10, "nocap10", "black"],
    [powerinnumberstee10, "powerinnumberstee10", "white"],
    [saylesstee10, "saylesstee10", "black"],
    [saylesstee11, "saylesstee11", "white"],
    // [saylesstee0, "saylesstee0", "black"],
    // [saylesstee1, "saylesstee1", "black"],
    // [saylesstee2, "saylesstee2", "black"],
    // [saylesstee3, "saylesstee3", "white"],
    // [saylesstee4, "saylesstee4", "white"],
    // [saylesstee5, "saylesstee5", "white"],
    [unisexheavycottontee20, "unisexheavycottontee20", "black"],
    [wordplayheartbeattee10, "wordplayheartbeattee10", "white"],
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
    mindset.find((product) => {
        if (alt === product.handle.replaceAll("-", "")) {
            imageImport.alt = product.title
            imageImport.id = product.id
        }
    })
})

export default imageImports
export { mensshortsleevetee11 }
