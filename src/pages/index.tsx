/** types */
import { type NextPage } from "next"

/** components */
import Head from "next/head"
import NextImage from "next/image"
import Link from "next/link"
import { Container, Card, Text, Spacer, Image } from "@nextui-org/react"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import Featured from "@/components/Featured/Featured"

/** images */
import hero from "@/assets/hero.webp"
import galleryImageData from "@/assets/gallery"

/** font */
import { Comforter } from "@next/font/google"
const comforter = Comforter({ weight: "400", subsets: ["latin"] })

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
                    className={comforter.className}
                >
                    We Play With Words
                </Text>
            </Card.Header>
            <NextImage
                src={hero.src}
                alt="We Play With Words"
                width={hero.width}
                height={hero.height}
                placeholder="blur"
                blurDataURL={hero.blurDataURL}
                priority
                style={{ opacity: "75%", objectPosition: "top" }}
            />
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
                css={{borderRadius: "$md"}}
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
