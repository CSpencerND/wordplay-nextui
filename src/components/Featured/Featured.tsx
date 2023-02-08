import React from "react"
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel"
import "pure-react-carousel/dist/react-carousel.es.css"
import Image, { StaticImageData } from "next/image"
import hero from "../../assets/hero.webp"
import { Card } from "@nextui-org/react"
// import getImages from "@/app/getImages"

// console.log(getImages())

export default function Featured() {
    return (
        <Card>
            <CarouselProvider naturalSlideWidth={100} naturalSlideHeight={125} totalSlides={3}>
                <Slider>
                    <Slide index={0}>
                        <Image src={hero} alt="" style={{ height: "auto", width: "auto" }} />
                    </Slide>
                    <Slide index={1}>
                        <Image src={hero} alt="" style={{ height: "auto", width: "auto" }} />
                    </Slide>
                    <Slide index={2}>
                        <Image src={hero} alt="" style={{ height: "auto", width: "auto" }} />
                    </Slide>
                </Slider>
                <ButtonBack>Back</ButtonBack>
                <ButtonNext>Next</ButtonNext>
            </CarouselProvider>
        </Card>
    )
}
