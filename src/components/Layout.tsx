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
        <>
            {/** Background Effects*/}
            <div
                aria-hidden="true"
                style={{
                    position: "fixed",
                    top: 0,
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
                        filter: "blur(16px) saturate(1.8)",
                        opacity: 0.6,
                    }}
                />
            </div>

            <div
                aria-hidden="true"
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
                        filter: "blur(16px) saturate(1.8)",
                        opacity: 0.8,
                    }}
                />
            </div>

            <div
                className={inter.className}
                style={
                    {
                        // maxWidth: "100%",
                        // boxSizing: "border-box",
                        // overflow: "scroll",
                        // overscrollBehavior: "contain",
                    }
                }
            >
                <Header LayoutRef={LayoutRef} />
                {children}
                {/* <Footer /> */}
            </div>
        </>
    )
}
