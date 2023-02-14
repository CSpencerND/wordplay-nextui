/** types */
import type { MutableRefObject } from "react"
import type { Children } from "types"

/** components */
import Header from "./Header/Header"

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
            <Header LayoutRef={LayoutRef} />
            {children}
            {/* <Footer /> */}
        </div>
    )
}
