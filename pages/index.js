import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { fetchAPI } from "../lib/api"
import HomeNav from "../components/homeNav"

const Home = ({ pages, homepage }) => {
  return (
    <Layout pages={pages}>
      <Seo seo={homepage.attributes.seo} />
      {/* <video controls loop>
        <source src={homepage.attributes.hero.background.data.attributes.url} type="video/mp4"/>
        Your browser does not support the video tag.
      </video> */}
      <HomeNav pages={pages}/>
    </Layout>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [pagesRes, homepageRes] = await Promise.all([
    fetchAPI("/pages", { populate: "*" }),
    fetchAPI("/homepage", {
      populate: {
        hero: { populate: "*" },
        seo: { populate: "*" },
      },
    }),
  ])

  return {
    props: {
      pages: pagesRes.data,
      homepage: homepageRes.data,
    },
    revalidate: 1,
  }
}

export default Home
