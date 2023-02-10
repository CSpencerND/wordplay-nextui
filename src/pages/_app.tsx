import { type AppType } from "next/dist/shared/lib/utils"
import { NextUIProvider, createTheme, globalCss } from "@nextui-org/react"
import Layout from "@/components/Layout"

import "@/styles/globals.css"

const globalCSS = globalCss({
    body: {
        // backgroundColor: "hsla(240,16%,16%,0.6)"
        bgBlur: "$backgroundAlpha",
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
            // background:                 "hsla(240,16%,8%,1)",
            // backgroundAlpha:            "hsla(240,16%,8%,0.6)",
            // backgroundContrast:         "hsla(240,16%,12%,1)",
            // backgroundContrastAlpha:    "hsla(240,12%,12%,0.3)",
            backgroundContrastAlpha: "hsla(210,8%,9%,0.6)",
            grayscale: "linear-gradient(to top, hsla(240,16%,25%,0.8), hsla(240,16%,100%,0.8))",
            primaryLight: "var(--nextui-colors-purple50)",
            primaryLightHover: "var(--nextui-colors-purple100)",
            primaryLightActive: "var(--nextui-colors-purple200)",
            primaryLightContrast: "var(--nextui-colors-purple600)",
            primary: "var(--nextui-colors-purple700)",
            primaryBorder: "var(--nextui-colors-purple500)",
            primaryBorderHover: "var(--nextui-colors-purple600)",
            primarySolidHover: "var(--nextui-colors-purple700)",
            primaryShadow: "var(--nextui-colors-purple500)",
            secondaryLight: "var(--nextui-colors-pink50)",
            secondaryLightHover: "var(--nextui-colors-pink100)",
            secondaryLightActive: "var(--nextui-colors-pink200)",
            secondaryLightContrast: "var(--nextui-colors-pink800)",
            secondary: "var(--nextui-colors-pink700)",
            secondaryBorder: "var(--nextui-colors-pink500)",
            secondaryBorderHover: "var(--nextui-colors-pink600)",
            secondarySolidHover: "var(--nextui-colors-pink700)",
            secondaryShadow: "var(--nextui-colors-pink500)",
            successLight: "var(--nextui-colors-green50)",
            successLightHover: "var(--nextui-colors-green100)",
            successLightActive: "var(--nextui-colors-green200)",
            warningLight: "var(--nextui-colors-yellow50)",
            warningLightHover: "var(--nextui-colors-yellow100)",
            warningLightActive: "var(--nextui-colors-yellow200)",
            errorLight: "var(--nextui-colors-red50)",
            errorLightHover: "var(--nextui-colors-red100)",
            errorLightActive: "var(--nextui-colors-red200)",
            errorLightContrast: "var(--nextui-colors-red700)",
            neutralLight: "var(--nextui-colors-gray200)",
            neutralLightHover: "var(--nextui-colors-gray300)",
            neutralLightActive: "var(--nextui-colors-gray400)",
            neutralSolidContrast: "var(--nextui-colors-white)",
            textLight: "rgba(236,237,238,0.2)",
            text: "var(--nextui-colors-gray900)",
            linkLight: "rgba(0,114,245,0.2)",
            link: "var(--nextui-colors-blue700)",
            codeLight: "var(--nextui-colors-cyan50)",
            code: "var(--nextui-colors-cyan600)",
            selection: "var(--nextui-colors-pink800)",
            border: "rgba(255, 255, 255, 0.15)",
        },
    },
})
