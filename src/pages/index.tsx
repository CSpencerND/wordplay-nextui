/** types */
import { type NextPage } from "next"

/** components */
import Head from "next/head"
import NextImage from "next/image"
// import Link from "next/link"
import { Container, Card, Text, Spacer, Image } from "@nextui-org/react"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import Featured from "@/components/Featured/Featured"

/** images */
import hero from "@/assets/hero.webp"
import galleryImageData from "@/assets/gallery"

/** font */
import localFont from "@next/font/local"
const graffiti = localFont({ src: "../assets/font/don_graffiti/DonGraffiti.otf" })

// export async function getStaticProps() {
//     const response = await fetch("http://localhost:3000/api/featured")
//     const data = await response.json()
//     console.log(data)
//     return {
//         props: { data },
//     }
// }

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>WordPlay4Lyfe</title>
                <meta name="description" content="" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Container as="main" lg>
                <Spacer y={2} />
                <Hero />
                <Spacer y={2} />
                <Featured />
                <Spacer y={2} />
                <About />
                <Spacer y={2} />
                <Gallery />
                <Spacer y={2} />
            </Container>
        </>
    )
}

const Hero = (): JSX.Element => {
    return (
        <Card css={{ aspectRatio: "16 / 9", maxHeight: "80vh", position: "relative" }}>
            <Card.Header
                css={{
                    position: "absolute",
                    zIndex: 1,
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                }}
            >
                <Text
                    h1
                    weight="normal"
                    color="white"
                    // transform="uppercase"
                    css={{
                        margin: "auto",
                        textShadow: "1px 2px 2px black, -1px -2px 2px black",
                        fontSize: "clamp(2.57rem, 0.78rem + 8.95vw, 7.15rem)",
                    }}
                    className={graffiti.className}
                >
                    We Play With Words
                </Text>
            </Card.Header>
            <NextImage
                src={hero}
                alt="We Play With Words"
                placeholder="blur"
                priority
                style={{ opacity: "75%", objectPosition: "top" }}
            />
        </Card>
    )
}

const About = (): JSX.Element => {
    return (
        <Card
            as="section"
            css={{ p: "$md", bgBlur: "$backgroundContrastAlpha", position: "relative" }}
        >
            <Card.Image
                aria-hidden="true"
                src="/effects/bg-wordplay.svg"
                alt="wordplay4lyfe graffiti background"
                css={{
                    position: "fixed",
                    inset: 0,
                    filter: "blur(8px) saturate(1.8)",
                    opacity: 0.6
                }}
            />
            <Card.Body as="article">
                <Text h3>Why we love what we do</Text>
                <Spacer y={0.5}></Spacer>
                <Text>
                    When we think about WORDPLAY4LYFE, what comes to mind is Artistic Expression
                    - being able to express yourself freely and not be judged. We use our
                    Imagination because the fact that you can come up with different ideas for
                    something that&apos;s yours is just amazing. The fact that you can daydream
                    about those different ideas and bring them to life is really exciting, which
                    is an excellent way to share my Creativeness with the rest of the world. We
                    want WORDPLAY4LYFE to represent Culture in all walks of life because without
                    culture there is no WORDPLAY4LYFE.
                </Text>
                <Spacer y={1}></Spacer>
                <Text>
                    Artistic Expression, Imagination, Creativeness and Culture represents our
                    brand (AEICC)
                </Text>
            </Card.Body>
        </Card>
    )
}

const Gallery = (): JSX.Element => {
    const galleryImages = galleryImageData.map(({ src, alt }, i) => {
        return (
            <Image
                src={src.src}
                alt={alt}
                key={i}
                css={{ borderRadius: "$md" }}
                // style={{ width: "auto", height: "auto", borderRadius: 12 }}
            />
        )
    })

    return (
        <ResponsiveMasonry columnsCountBreakPoints={{ 0: 1, 360: 2, 1024: 3 }}>
            <Masonry gutter="1rem">{galleryImages}</Masonry>
        </ResponsiveMasonry>
    )
}

export default Home
