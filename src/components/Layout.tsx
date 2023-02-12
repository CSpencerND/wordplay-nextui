/** types */
import type { MutableRefObject } from "react"
import type { Children } from "types"

/** components */
import Header from "./Header/Header"
import { Image } from "@nextui-org/react"

/** hooks */
import { useRef } from "react"

/** font */
import { Inter } from "@next/font/google"
const inter = Inter({ subsets: ["latin"] })

export default function Layout({ children }: Children) {
    const LayoutRef: MutableRefObject<HTMLElement | null> = useRef(null)

    return (
        <div
            className={inter.className}
            style={{
                height: "100vh",
                overflowY: "auto",
                overflowX: "hidden",
                overscrollBehavior: "none"
            }}
        >
            <BGFX />
            <Header LayoutRef={LayoutRef} />
            {children}
            {/* <Footer /> */}
        </div>
    )
}

const BGFX = () => {
    return (
        <div aria-hidden="true">
            <div
                style={{
                    position: "fixed",
                    top: 0,
                    width: "100vw",
                    height: "100vw",
                    willChange: "transform",
                }}
            >
                <Image
                    src="/effects/gradient-right-dark.svg"
                    alt="gradient violet background"
                    css={{
                        position: "relative",
                        mt: "-45%",
                        ml: "45%",
                        filter: "blur(16px)",
                        opacity: 0.6,
                    }}
                />
            </div>

            <div
                style={{
                    position: "fixed",
                    bottom: 0,
                    left: 0,
                    willChange: "transform",
                }}
            >
                <Image
                    src="/effects/gradient-left-dark.svg"
                    alt="gradient blue background"
                    css={{
                        position: "relative",
                        mb: "-35%",
                        ml: "-20%",
                        filter: "blur(16px)",
                        opacity: 0.6,
                    }}
                />
            </div>
        </div>
    )
}
