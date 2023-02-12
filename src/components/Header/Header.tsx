/** types */
import type { MutableRefObject } from "react"
import type { PageLinkData } from "types"

/** components */
import Image from "next/image"
import { Button, Navbar, Link, Text } from "@nextui-org/react"
import { Spiral as Burger } from "hamburger-react"
import { Login, Buy } from "react-iconly"

// import logo from "@/assets/logo/wp-logo.webp"
import logo from "@/assets/logo/wp4l.webp"

/**********************************************************************************************/

const collapseItems: PageLinkData[] = [
    { title: "Collections Directory", pathName: "collections" },
    { title: "Staff Picks", pathName: "collections/staff-picks" },
    { title: "Summer '22", pathName: "collections/summer-22" },
    { title: "Mindset", pathName: "collections/mindset" },
    { title: "Lifestyle", pathName: "collections/lifestyle" },
    { title: "Creative Minds", pathName: "collections/creative-minds" },
]

type HeaderProps = {
    LayoutRef: MutableRefObject<HTMLElement | null>
}

export default function Header({ LayoutRef }: HeaderProps) {
    return (
        <>
            <Navbar
                variant="sticky"
                isBordered
                maxWidth="fluid"
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
            </Navbar>
        </>
    )
}
