import { ImageImport, ImageData } from "~/types"
import creativityiscontagious10 from "./creativity-is-contagious-10.webp"
import keepthemusicplaying10 from "./keep-the-music-playing-10.webp"
import popstartee10 from "./pop-star-tee-10.webp"
import popstartee11 from "./pop-star-tee-11.webp"
import unisexjerseyshortsleevetee10 from "./unisex-jersey-short-sleeve-tee-10.webp"
import unisexjerseyshortsleevetee0 from "./unisex-jersey-short-sleeve-tee0.webp"
import unisexjerseyshortsleevetee1 from "./unisex-jersey-short-sleeve-tee1.webp"
import womenssoftstyletee0 from "./womens-softstyle-tee0.webp"
import womenstheboyfriendtee0 from "./womens-the-boyfriend-tee0.webp"

import { creative } from "./creativeMinds"

const initialImports: ImageImport[] = [
    [creativityiscontagious10, "creativityiscontagious10", "white"],
    [keepthemusicplaying10, "keepthemusicplaying10", "white"],
    [popstartee10, "popstartee10", "black"],
    [popstartee11, "popstartee11", "brown"],
    [unisexjerseyshortsleevetee10, "unisexjerseyshortsleevetee10", "navy"],
    [unisexjerseyshortsleevetee0, "unisexjerseyshortsleevetee0", "lightBlue"],
    [unisexjerseyshortsleevetee1, "unisexjerseyshortsleevetee1", "white"],
    [womenssoftstyletee0, "womenssoftstyletee0", "white"],
    [womenstheboyfriendtee0, "womenstheboyfriendtee0", "black"],
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
    creative.find((product) => {
        if (alt === product.handle.replaceAll("-", "")) {
            imageImport.alt = product.title
            imageImport.id = product.id
        }
    })
})

export default imageImports
export { unisexjerseyshortsleevetee10 }
