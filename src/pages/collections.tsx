/** types */
import type { NextPage } from "next"
import type { PageLinkData } from "types"

/** components */
import Head from "next/head"
import NextLink from "next/link"
import { Container, Card, Grid, Row, Text, Spacer } from "@nextui-org/react"

/**********************************************************************************************/

const CollectionsDirectory: NextPage = () => {
    return (
        <>
            <Head>
                <title>WP4L | Collections</title>
                <meta name="description" content="" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Container as="main" lg>
                <Spacer y={1.5} />
                <CollectionGrid />
                <Spacer y={1.5} />
            </Container>
        </>
    )
}

export default CollectionsDirectory

/**********************************************************************************************/

const CollectionGrid = () => {
    return (
        <Grid.Container gap={2} justify="flex-start">
            {collectionLinks.map(({ title, pathName, image }: CollectionLinkData, i) => (
                <Grid xs={6} sm={3} key={i}>
                    <Card isPressable>
                        <NextLink href={pathName}>
                            <Card.Body css={{ p: 0 }}>
                                <Card.Image
                                    src={"https://nextui.org" + image}
                                    objectFit="cover"
                                    width="100%"
                                    height={140}
                                    alt={title}
                                />
                            </Card.Body>
                            <Card.Footer
                                isBlurred
                                css={{
                                    backgroundColor: "$backgroundContrastAlpha",
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
        image: "/images/fruit-1.jpeg",
    },
    {
        title: "Summer '22",
        pathName: "collections/summer-22",
        image: "/images/fruit-3.jpeg",
    },
    {
        title: "Mindset",
        pathName: "collections/mindset",
        image: "/images/fruit-8.jpeg",
    },
    {
        title: "Lifestyle",
        pathName: "collections/lifestyle",
        image: "/images/fruit-7.jpeg",
    },
    {
        title: "Creative Minds",
        pathName: "collections/creative-minds",
        image: "/images/fruit-5.jpeg",
    },
]
