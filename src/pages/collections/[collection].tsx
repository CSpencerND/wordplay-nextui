/** types */
import type { NextPage } from "next"
import type { PageLinkData } from "types"

/** components */
import Head from "next/head"
import NextLink from "next/link"
import { Container, Card, Grid, Row, Text } from "@nextui-org/react"

/**********************************************************************************************/

const CollectionsDirectory: NextPage = () => {
     
    return (
        <>
            <Head>
                <title>WP4L | {}</title>
                <meta name="description" content="" />
                <meta name="viewport" content="minimum-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Container as="main" lg>
                <ProductGrid />
            </Container>
        </>
    )
}

export default CollectionsDirectory

/**********************************************************************************************/

const ProductGrid = () => {
    return (
        <Grid.Container as="ul" gap={2} css={{ my: "$xl" }}>
            {collectionLinks.map(({ title, pathName, image }: CollectionLinkData, i) => (
                <Grid
                    as="li"
                    xs={6}
                    sm={4}
                    key={i}
                    css={{
                        width: "fit-content",
                    }}
                >
                    <Card isPressable>
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
                                css={{
                                    position: "absolute",
                                    bottom: 0,
                                    zIndex: 1,
                                    bgBlur: "$backgroundAlpha",
                                }}
                            >
                                <Row wrap="wrap" justify="center" align="center">
                                    <Text b>{title}</Text>
                                </Row>
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
        title: "Staff Picks",
        pathName: "collections/staff-picks",
        image: "/assets/collections/mindset/say-less-[black].webp",
    },
    {
        title: "Summer '22",
        pathName: "collections/summer-22",
        image: "/assets/collections/mindset/say-less-[black].webp",
    },
    {
        title: "Mindset",
        pathName: "collections/mindset",
        image: "/assets/collections/mindset/say-less-[black].webp",
    },
    {
        title: "Lifestyle",
        pathName: "collections/lifestyle",
        image: "/assets/collections/mindset/say-less-[black].webp",
    },
    {
        title: "Creativity",
        pathName: "collections/creativity",
        image: "/assets/collections/mindset/say-less-[black].webp",
    },
]

