import App from "next/app"
import Head from "next/head"
import "../assets/css/style.scss"
import "../assets/css/homenav.scss"
import "../assets/css/exchange.scss"
import "../assets/css/mobile.scss"
import "../assets/css/festival.scss"
import { createContext, useEffect } from "react"
import { useRouter } from "next/router"

// Store Strapi Global object in context
export const GlobalContext = createContext({})

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter()

  useEffect(() => {
    // Check route and toggle body class
    if (router.pathname === "/wearestillhere") {
      document.body.classList.add("we-are-still-here")
    } else {
      document.body.classList.remove("we-are-still-here")
    }
  }, [router.pathname])

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script
          async
          src="https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/js/uikit-icons.min.js"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/processing.js/1.6.6/processing.min.js"></script>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

MyApp.getInitialProps = async (ctx) => {
  const appProps = await App.getInitialProps(ctx)
  return { ...appProps }
}

export default MyApp
