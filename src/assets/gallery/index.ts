import { ImageImport, ImageData } from "~/types"
import adidasblazin from "./adidas-blazin.webp"
import city from "./city.webp"
import creativity from "./creativity.webp"
import petty from "./petty.webp"
import responsibility from "./responsibility.webp"
import savage from "./savage.webp"

const initialImports: ImageImport[] = [
    [adidasblazin, "adidasblazin"],
    [city, "city"],
    [creativity, "creativity"],
    [petty, "petty"],
    [responsibility, "responsibility"],
    [savage, "savage"],
]

const imageImports: ImageData[] = []

initialImports.forEach((imageImport) => {
    const imageData = imageImport[0]
    const alt: string = imageImport[1]

    imageData.alt = alt
    imageImports.push(imageData)
})

export default imageImports
