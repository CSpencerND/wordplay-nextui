import { type AppType } from "next/dist/shared/lib/utils"
import { NextUIProvider, createTheme, globalCss } from "@nextui-org/react"
import Layout from "@/components/Layout"

import "@/styles/globals.css"
const globalCSS = globalCss({
    body: {
        backgroundImage: "url('/effects/blob-scene-haikei.webp')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
    },

    "li.alice-carousel__stage-item": {
        px: "0.5rem",
    },
})

const MyApp: AppType = ({ Component, pageProps }) => {
    globalCSS()
    return (
        <NextUIProvider theme={theme}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </NextUIProvider>
    )
}

export default MyApp

const theme = createTheme({
    type: "dark",
    theme: {
        colors: {
            background: "hsl(219, 18%, 8%)",
            backgroundAlpha: "hsla(219,18%,8%,0.6)",
            backgroundContrast: "hsla(219, 18%, 16%, 1)",
            backgroundContrastAlpha: "hsla(219,18%,16%,0.8)",
            grayscale: "linear-gradient(to top, hsla(240,16%,25%,0.6), hsla(240,16%,100%,0.6))",
        },
    },
})
