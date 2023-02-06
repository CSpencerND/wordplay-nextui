import { MutableRefObject } from "react"
import { Button, Navbar, Link, Text } from "@nextui-org/react"
import Image from "next/image"
import logo from "@/assets/logo/wp-logo.webp"
import { Login, Buy } from "react-iconly"
import { Spiral as Burger } from "hamburger-react"
import { Backdrop } from "@nextui-org/react"

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

            <Backdrop
                aria-hidden
                blur
                visible
                css={{
                    background:
                        "linear-gradient(112deg, #d926aa 0%, #661ae6 25%, #0072F5 75%)",

                    position: "absolute",
                    top: 0,
                    right: 0,
                    transform: "translate(50%, -87.625%) rotate(7.5deg)",
                    zIndex: -1,
                    height: 304,
                    width: "100%",
                    opacity: 0.6,
                    filter: "blur(32px)",
                    mixBlendMode: "overlay",
                }}
            />
        </Navbar>
    )
}
