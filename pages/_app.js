import App from "next/app"
import Head from "next/head"
import "../assets/css/style.scss"
import "../assets/css/homenav.scss"
import "../assets/css/mobile.scss"
import { createContext } from "react"
import { fetchAPI } from "../lib/api"
import { getStrapiMedia } from "../lib/media"

// Store Strapi Global object in context
export const GlobalContext = createContext({})

const MyApp = ({ Component, pageProps }) => {
  // const { global } = pageProps
  return (
    <>
      <Head>
        {/* <link
          rel="shortcut icon"
          href={getStrapiMedia(global.attributes.favicon)}
        /> */}
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <Component {...pageProps} />
      {/* <GlobalContext.Provider value={global.attributes}>
        <Component {...pageProps} />
      </GlobalContext.Provider> */}
    </>
  )
}


MyApp.getInitialProps = async (ctx) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx)
  // // Fetch global site settings from Strapi
  // const globalRes = await fetchAPI("/global", {
  //   populate: {
  //     favicon: "*",
  //     defaultSeo: {
  //       populate: "*",
  //     },
  //   },
  // })
  // Pass the data to our page via props
  // return { ...appProps, pageProps: { global: globalRes.data } }
  return { ...appProps }
}

export default MyApp
