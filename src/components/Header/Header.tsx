import { MutableRefObject } from "react"
import { Button, Navbar, Link, Text } from "@nextui-org/react"
import Image from "next/image"
import logo from "@/assets/logo/wp-logo.webp"
import { Login, Buy } from "react-iconly"
import { Spiral as Burger } from "hamburger-react"

type PageLinkData = {
    title: string
    pathName: string
}

type HeaderProps = {
    LayoutRef: MutableRefObject<HTMLElement | null>
}

const collapseItems: PageLinkData[] = [
    { title: "Collections Directory", pathName: "collections" },
    { title: "Staff Picks", pathName: "collections/staff-picks" },
    { title: "Summer '22", pathName: "collections/summer-22" },
    { title: "Mindset", pathName: "collections/mindset" },
    { title: "Lifestyle", pathName: "collections/lifestyle" },
    { title: "Creative Minds", pathName: "collections/creative-minds" },
]

export default function Header({ LayoutRef }: HeaderProps) {
    return (
        <Navbar
            variant="floating"
            isBordered
            // maxWidth="fluid"
            parentRef={LayoutRef}
            // css={{background: "transparent"}}
            // containerCss={{background: "$backgroundAlpha", backdropFilter: "blur(16px)" }}
            // disableBlur
        >
            <Navbar.Content>
                <Navbar.Toggle
                    showIn="lg"
                    aria-label="toggle navigation"
                    css={{ paddingRight: 0 }}
                >
                    <Burger size={28} rounded distance="lg" label="Show Menu" />
                </Navbar.Toggle>
                <Navbar.Brand>
                    <Link href="/" style={{ paddingTop: "0.5rem" }}>
                        <Image src={logo} alt="wordplay4lyfe logo" height={48} />
                    </Link>
                </Navbar.Brand>
            </Navbar.Content>
            <Navbar.Content css={{ paddingRight: "$6" }} gap={"$xs"}>
                <Button icon={<Buy set="broken" />} light auto />
                <Button icon={<Login set="broken" />} light auto />
            </Navbar.Content>
            <Navbar.Collapse css={{ transition: "all 150ms" }}>
                {collapseItems.map(({ title, pathName }, i) => (
                    <Navbar.CollapseItem key={i}>
                        <Link
                            color="inherit"
                            css={{
                                minWidth: "100%",
                            }}
                            href={pathName}
                        >
                            <Text size="$2xl">{title}</Text>
                        </Link>
                    </Navbar.CollapseItem>
                ))}
            </Navbar.Collapse>
            <div
                aria-hidden
                style={{
                    // background:
                    //     "radial-gradient(circle, rgba(6,183,219,0.6012605725884104) 25%, rgba(255,78,205,0.6012605725884104) 50%, rgba(0,114,245,0.5956583316920518) 75%)",

                    // background:
                    //     "radial-gradient(circle, rgba(6, 183 ,219 ,0.8) 0%, rgba(255 ,78 ,205 ,0.8) 100%)",

                    // background:
                    //     "radial-gradient(circle, rgba(31,178,165,0.6) 0%, rgba(102,26,230,0.5984594521402311) 50%, rgba(217,38,170,0.6) 100%)",

                    background:
                        "linear-gradient(90deg, rgba(31,178,165,0.6) 0%, rgba(102,26,230,0.5984594521402311) 50%, rgba(217,38,170,0.6) 100%)",

                    position: "absolute",
                    top: 0,
                    right: 0,
                    height: 250,
                    width: 350,
                    opacity: 0.6,
                    zIndex: -1,
                    transform: "translate(50%, -50%)",
                    borderRadius: "100%",
                    filter: "blur(32px)",
                    mixBlendMode: "hue",
                }}
            ></div>
        </Navbar>
    )
}
