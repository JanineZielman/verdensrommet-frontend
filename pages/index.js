import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { fetchAPI } from "../lib/api"
import HomeNav from "../components/homeNav"

const Home = ({ homepage, pages }) => {
  return (
    <Layout pages={pages}>
      <div className="hero-bg">
        <video loop={true} autoPlay="autoPlay" controls muted>
          <source src={"https://cms.verdensrommet.network/app/public/" + homepage.Hero.background.url} type="video/mp4"/>
          Your browser does not support the video tag.
        </video>
      </div>
      <HomeNav pages={pages}/>
    </Layout>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [homepageRes, pagesRes] = await Promise.all([
    fetchAPI("/homepage"),
    fetchAPI("/pages"),
  ])

  return {
    props: {
      homepage: homepageRes,
      pages: pagesRes,
    },
    revalidate: 1,
  }
}

export default Home
