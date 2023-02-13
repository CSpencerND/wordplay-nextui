/** types */
import type { MutableRefObject } from "react"
import type { Children } from "types"

/** components */
import Header from "./Header/Header"
import { Image, Col } from "@nextui-org/react"

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
                overscrollBehaviorY: "contain"
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
        <>
            <Image
                src="/effects/gradient-right-dark.webp"
                alt="gradient violet background"
                aria-hidden
                css={{
                    willChange: "transform",
                    position: "fixed",
                    height: "fit-content",
                    top: 0,
                    right: 0,
                    translate: "50% -50%",
                    filter: "blur(16px)",
                    opacity: 0.6,
                }}
            />
            <Image
                src="/effects/gradient-left-dark.webp"
                alt="gradient blue background"
                aria-hidden
                css={{
                    willChange: "transform",
                    position: "fixed",
                    height: "fit-content",
                    width: "fit-content",
                    bottom: 0,
                    left: 0,
                    translate: "-25% 50%",
                    filter: "blur(16px)",
                    opacity: 0.6,
                }}
            />
        </>
    )
}
