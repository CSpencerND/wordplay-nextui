import { Button, Navbar } from "@nextui-org/react"
import Image from "next/image"
import Link from "next/link"
import logo from "@/assets/logo/wp-logo.webp"
import { Login, Buy } from "react-iconly"
import { Spiral as Burger } from "hamburger-react"

export default function Header() {
    return (
        <Navbar variant="sticky">
            <Navbar.Content>
                <Navbar.Toggle aria-label="toggle navigation" css={{ paddingRight: 0 }}>
                    <Burger size={28} rounded distance="lg" label="Show Menu" />
                </Navbar.Toggle>
                <Navbar.Brand>
                    <Link href="#" style={{ paddingTop: "0.5rem" }}>
                        <Image src={logo} alt="wordplay4lyfe logo" height={48} />
                    </Link>
                </Navbar.Brand>
            </Navbar.Content>
            <Navbar.Content css={{ paddingRight: "$6" }} gap={"$xs"}>
                <Button icon={<Buy set="broken" />} css={{ shadow: "$sm" }} light auto />
                <Button icon={<Login set="broken" />} css={{ shadow: "$sm" }} light auto />
            </Navbar.Content>
        </Navbar>
    )
}
