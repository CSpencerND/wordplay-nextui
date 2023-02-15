/** types */
import type { NextPage } from "next"
import type { PageLinkData } from "types"

/** components */
import Head from "next/head"
import NextLink from "next/link"
import { Container, Card, Grid, Row, Text, Col } from "@nextui-org/react"

/** utils */
import { useRouter } from "next/router"

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

            <Container as="main" lg css={{ my: "$xl" }}>
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
        <Grid.Container as="ul" gap={2}>
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
                    <Card variant="flat" isPressable css={{bgBlur: "$backgroundContrastAlpha"}}>
                        <NextLink href={pathName}>
                            <Card.Body as="figure" css={{ p: 0 }}>
                                <Card.Image
                                    src={image}
                                    alt={title}
                                    autoResize
                                    css={{
                                        backgroundImage: "$grayscale",
                                    }}
                                />
                            </Card.Body>
                            <Card.Footer
                            isBlurred
                            // css={{
                            //     position: "absolute",
                            //     bottom: 0,
                            //     zIndex: 1,
                            //     bgBlur: "$backgroundAlpha",
                            // }}
                            >
                                <Col>
                                    <Row>
                                        <Text
                                            b
                                            css={{
                                                // whiteSpace: "nowrap"
                                                textOverflow: "ellipsis",
                                            }}
                                        >
                                            {title}
                                        </Text>
                                    </Row>
                                    <Row>
                                        <Swatch />
                                    </Row>
                                </Col>
                            </Card.Footer>
                        </NextLink>
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

const Swatch = () => {
    return ( 
        <Text b>Swatch</Text> 
    )
}
