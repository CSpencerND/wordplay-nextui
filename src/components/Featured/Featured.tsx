import React, { useRef } from "react"
import { Button, Card, Image, Spacer, Text } from "@nextui-org/react"
import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"
import { ChevronRight, ChevronLeft } from "react-iconly"
import temp from "@/assets/collections/mindset/say-less-[black].webp"

export default function Featured() {
    const sliderRef = useRef<AliceCarousel>(null)

    return (
        <Card css={{ py: "$md", bgBlur: "$backgroundContrastAlpha" }}>
            <Text h3 css={{ color: "$primary", textAlign: "center", py: "$sm" }}>
                Featured Items
            </Text>
            <AliceCarousel
                ref={sliderRef}
                items={images}
                infinite
                keyboardNavigation
                disableDotsControls
                paddingLeft={70}
                paddingRight={70}
                autoPlay
                autoPlayStrategy="all"
                autoPlayInterval={1250}
                responsive={{
                    0: {
                        items: 1,
                    },
                    640: {
                        items: 2,
                    },
                    1024: {
                        items: 3,
                    },
                    1280: {
                        items: 4,
                    },
                }}
                renderPrevButton={() => (
                    <Button
                        flat
                        color=""
                        icon={<ChevronLeft set="curved" />}
                        aria-controls="alice-carousel"
                        auto
                        css={{ mt: "$lg", ml: "auto", mr: "$xs" }}
                        onPress={() => sliderRef?.current?.slidePrev() || null}
                    />
                )}
                renderNextButton={() => (
                    <Button
                        flat
                        color=""
                        icon={<ChevronRight set="curved" />}
                        aria-controls="alice-carousel"
                        auto
                        css={{ mt: "$lg", mr: "auto", ml: "$xs" }}
                        onPress={() => sliderRef?.current?.slideNext() || null}
                    />
                )}
            />
        </Card>
    )
}

// const temp = "/assets/collections/mindset/say-less-[black].webp"

const images = [
        <Image
            src={temp.src}
            alt="temp"
            autoResize
            css={{
                backgroundImage: "$grayscale",
                borderRadius: "$lg",
            }}
        />
        ,
        <Image
            src={temp.src}
            alt="temp"
            autoResize
            css={{
                backgroundImage: "$grayscale",
                borderRadius: "$lg",
            }}
        />,
        <Image
            src={temp.src}
            alt="temp"
            autoResize
            css={{
                backgroundImage: "$grayscale",
                borderRadius: "$lg",
            }}
        />,
        <Image
            src={temp.src}
            alt="temp"
            autoResize
            css={{
                backgroundImage: "$grayscale",
                borderRadius: "$lg",
            }}
        />,
        <Image
            src={temp.src}
            alt="temp"
            autoResize
            css={{
                backgroundImage: "$grayscale",
                borderRadius: "$lg",
            }}
        />,
        <Image
            src={temp.src}
            alt="temp"
            autoResize
            css={{
                backgroundImage: "$grayscale",
                borderRadius: "$lg",
            }}
        />,
        ]
