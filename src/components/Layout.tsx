import { ReactNode } from "react"
import Header from "./Header/Header"

import { Inter } from "@next/font/google"
const inter = Inter({ subsets: ["latin"] })

interface Children {
    children: ReactNode
}

export default function Layout({ children }: Children) {
    return (
        <div className={inter.className}>
            <Header />
            {children}
            {/* <Footer /> */}
        </div>
    )
}
