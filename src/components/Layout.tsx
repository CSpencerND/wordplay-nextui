/** types */
import { useRef } from "react"
import { MutableRefObject } from "react"
import { Children } from "types"

/** components */
import Header from "./Header/Header"
import { Image } from "@nextui-org/react"

/** font */
import { Inter } from "@next/font/google"
const inter = Inter({ subsets: ["latin"] })

export default function Layout({ children }: Children) {
    const LayoutRef: MutableRefObject<HTMLElement | null> = useRef(null)

    return (
        <div className={inter.className} style={{ maxWidth: "100%", boxSizing: "border-box" }}>
            <Header LayoutRef={LayoutRef} />
            {children}
            {/* <Footer /> */}

            {/** Background Effects*/}
            <Image
                src="/effects/gradient-right-dark.svg"
                alt="gradient violet background"
                css={{
                    position: "fixed",
                    top: "-45%",
                    right: "-40%",
                    mixBlendMode: "screen",
                    filter: "saturate(1.8)",
                    zIndex: -1,
                }}
            />
            <Image
                src="/effects/gradient-left-dark.svg"
                alt="gradient blue background"
                css={{
                    position: "fixed",
                    bottom: "-50%",
                    left: "-30%",
                    mixBlendMode: "screen",
                    filter: "saturate(1.8)",
                    zIndex: -1
                }}
            />
        </div>
    )
}
