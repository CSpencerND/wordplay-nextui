import { ReactNode, useRef, MutableRefObject } from "react"
import Header from "./Header/Header"

import { Inter } from "@next/font/google"
const inter = Inter({ subsets: ["latin"] })

interface Children {
    children: ReactNode
}

export default function Layout({ children }: Children) {
    const LayoutRef: MutableRefObject<HTMLElement | null> = useRef(null)

    return (
        <div className={inter.className} style={{ maxWidth: "100%", boxSizing: "border-box" }}>
            <Header LayoutRef={LayoutRef} />
            {children}
            {/* <Footer /> */}
        </div>
    )
}
