/** types */
import type { NextPage } from "next"
import type { Children, PageLinkData } from "types"

/** components */
import Head from "next/head"
import { Container, Card, Grid, Row, Text, Col, Radio, styled } from "@nextui-org/react"

/** utils */
import { useRouter } from "next/router"
import { useEffect } from "react"

/**********************************************************************************************/

const CollectionsDirectory: NextPage = () => {
    const path = useRouter().query.collection as string
    const title = pathData[path]

    return (
        <>
            <Head>
                <title>WP4L | {title}</title>
                <meta name="description" content={title} />
                <meta name="viewport" content="minimum-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Container as="main" lg gap={1} css={{ my: "$xl" }}>
                <Row justify="center">
                    <Text
                        h2
                        css={{
                            color: "$cyan700",
                        }}
                    >
                        {title}
                    </Text>
                </Row>
                <ProductGrid />
            </Container>
        </>
    )
}

const pathData: { [x: string]: string } = {
    "staff-picks": "Staff Picks",
    "summer-22": "Summer '22",
    mindset: "Mindset",
    lifestyle: "Lifestyle",
    creativity: "Creativity",
}

export default CollectionsDirectory

/**********************************************************************************************/

const ProductGrid = () => {
    return (
        <Grid.Container as="ul" gap={1}>
            {collectionLinks.map(({ title, pathName, image }, i) => (
                <Grid
                    as="li"
                    xs={6}
                    sm={4}
                    key={i}
                    css={{
                        width: "fit-content",
                    }}
                >
                    <Card variant="shadow" css={{ bgBlur: "$backgroundContrastAlpha" }}>
                        {/** TODO: Wrap this in modal label*/}
                        <Card.Body as="figure" css={{ p: 0 }}>
                            <div
                                style={{
                                    cursor: "pointer",
                                    position: "relative",
                                }}
                            >
                                <Card.Image
                                    src={image}
                                    alt={title}
                                    autoResize
                                    css={{
                                        backgroundImage: "$grayscale",
                                    }}
                                />
                                <Card.Footer
                                    isBlurred
                                    css={{
                                        textOverflow: "ellipsis",
                                        position: "absolute",
                                        bgBlur: "hsla(240,16%,16%,0.1)",
                                        bottom: 0,
                                        zIndex: 1,
                                        py: 0,
                                        borderRadius: 0,
                                    }}
                                >
                                    <Text b>{title}</Text>
                                </Card.Footer>
                            </div>
                        </Card.Body>
                        <Card.Footer>
                            <Swatch />
                        </Card.Footer>
                    </Card>
                </Grid>
            ))}
        </Grid.Container>
    )
}

interface CollectionLinkData extends PageLinkData {
    image: string
}

const collectionLinks: CollectionLinkData[] = [
    {
        title: "Shirt 1",
        pathName: "collections/staff-picks",
        image: "/assets/collections/mindset/say-less-[black].webp",
    },
    {
        title: "Shirt 2",
        pathName: "collections/summer-22",
        image: "/assets/collections/mindset/say-less-[black].webp",
    },
    {
        title: "Shirt 3",
        pathName: "collections/mindset",
        image: "/assets/collections/mindset/say-less-[black].webp",
    },
    {
        title: "Shirt 4",
        pathName: "collections/lifestyle",
        image: "/assets/collections/mindset/say-less-[black].webp",
    },
    {
        title: "Shirt 5",
        pathName: "collections/creativity",
        image: "/assets/collections/mindset/say-less-[black].webp",
    },
]

/*********************************************************************************************/

// const Swatch = ({ children }: Children) => {
// const Swatch = () => {
//     return (
//         <Swatch.Container>
//             <Swatch.Label className="swatch__wrapper" htmlFor="myRadio1">
//                 <Swatch.Input
//                     className="swatch__input"
//                     type="radio"
//                     value="option1"
//                     name="myRadio"
//                     id="myRadio1"
//                     onChange={() => console.log(1)}
//                 />
//                 <Swatch.Icon className="swatch__icon">1</Swatch.Icon>
//             </Swatch.Label>

//             <Swatch.Label className="swatch__wrapper" htmlFor="myRadio2">
//                 <Swatch.Input
//                     className="swatch__input"
//                     type="radio"
//                     value="option1"
//                     name="myRadio"
//                     id="myRadio2"
//                     onChange={() => console.log(2)}
//                 />
//                 <Swatch.Icon className="swatch__icon">2</Swatch.Icon>
//             </Swatch.Label>

//             <Swatch.Label className="swatch__wrapper" htmlFor="myRadio3">
//                 <Swatch.Input
//                     className="swatch__input"
//                     type="radio"
//                     value="option1"
//                     name="myRadio"
//                     id="myRadio3"
//                     onChange={() => console.log(3)}
//                 />
//                 <Swatch.Icon className="swatch__icon">3</Swatch.Icon>
//             </Swatch.Label>
//         </Swatch.Container>
//     )
// }

// Swatch.Container = styled("div", {display: "flex", gap: "0.5rem"})
// Swatch.Label = styled("label", {})
// Swatch.Input = styled("input", {display: "none"})
// Swatch.Icon = styled("span", {bgColor: "$primary", border: "1px solid $gray800"})

const Swatch = () => {
    return (
        <Radio.Group
            defaultValue="primary"
            orientation="horizontal"
            css={{ "& *": { margin: 0 } }}
        >
            <Radio value="primary" color="primary" labelColor="primary" isSquared></Radio>
            <Radio value="secondary" color="secondary" labelColor="secondary" isSquared></Radio>
            <Radio value="success" color="success" labelColor="success" isSquared></Radio>
            <Radio value="warning" color="warning" labelColor="warning" isSquared></Radio>
        </Radio.Group>
    )
}
