import React, { useRef } from "react"

/** components */
import { Button, Card, Image, Text } from "@nextui-org/react"
import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"
import { ChevronRight, ChevronLeft } from "react-iconly"

/** images */
import temp from "@/assets/collections/mindset/say-less-[black].webp"

export default function Featured() {
    const sliderRef = useRef<AliceCarousel>(null)

    return (
        <Card css={{ py: "$md", bgBlur: "$backgroundContrastAlpha" }}>
            <Text
                h3
                css={{
                    textGradient: "45deg, $purple600 25%, $pink600 100%",
                    textAlign: "center",
                    py: "$sm",
                }}
            >
                Featured Items
            </Text>
            <AliceCarousel
                ref={sliderRef}
                items={images}
                infinite
                keyboardNavigation
                disableDotsControls
                mouseTracking
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
                        icon={<ChevronLeft set="curved" />}
                        aria-controls="alice-carousel"
                        auto
                        css={{
                            mt: "$lg",
                            ml: "auto",
                            mr: "$xs",
                            bgColor: "$textLight",
                            color: "$foreground",
                        }}
                        onPress={() => sliderRef?.current?.slidePrev() || null}
                    />
                )}
                renderNextButton={() => (
                    <Button
                        flat
                        icon={<ChevronRight set="curved" />}
                        aria-controls="alice-carousel"
                        auto
                        css={{
                            mt: "$lg",
                            mr: "auto",
                            ml: "$xs",
                            bgColor: "$textLight",
                            color: "$foreground",
                        }}
                        onPress={() => sliderRef?.current?.slideNext() || null}
                    />
                )}
            />
        </Card>
    )
}

const images = [
    <Image
        key={1}
        src={temp.src}
        alt="temp"
        autoResize
        onDragStart={(e) => e.preventDefault()}
        role="presentation"
        css={{
            backgroundImage: "$grayscale",
            borderRadius: "$lg",
        }}
    />,
    <Image
        key={2}
        src={temp.src}
        alt="temp"
        autoResize
        onDragStart={(e) => e.preventDefault()}
        role="presentation"
        css={{
            backgroundImage: "$grayscale",
            borderRadius: "$lg",
        }}
    />,
    <Image
        key={3}
        src={temp.src}
        alt="temp"
        autoResize
        onDragStart={(e) => e.preventDefault()}
        role="presentation"
        css={{
            backgroundImage: "$grayscale",
            borderRadius: "$lg",
        }}
    />,
    <Image
        key={4}
        src={temp.src}
        alt="temp"
        autoResize
        onDragStart={(e) => e.preventDefault()}
        role="presentation"
        css={{
            backgroundImage: "$grayscale",
            borderRadius: "$lg",
        }}
    />,
    <Image
        key={5}
        src={temp.src}
        alt="temp"
        autoResize
        onDragStart={(e) => e.preventDefault()}
        role="presentation"
        css={{
            backgroundImage: "$grayscale",
            borderRadius: "$lg",
        }}
    />,
    <Image
        key={6}
        src={temp.src}
        alt="temp"
        autoResize
        onDragStart={(e) => e.preventDefault()}
        role="presentation"
        css={{
            backgroundImage: "$grayscale",
            borderRadius: "$lg",
        }}
    />,
]
