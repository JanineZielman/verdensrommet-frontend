import React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Hero from "../../components/hero"
import Content from "../../components/content"
import TopBar from "../../components/topBar"
import { fetchAPI } from "../../lib/api"

const AltEco = ({ page, pages, homepage }) => {
  return (
		<section className="alt-eco">
			<Hero page={page} homepage={homepage}/>
      <TopBar page={page}/>
			<Layout pages={pages}>
        {page.section &&
          <Content page={page}/>
        }
			</Layout>
		</section>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [pageRes, pagesRes, homepageRes] = await Promise.all([
    fetchAPI("/alternative-economies"),
    fetchAPI("/menus"),
		fetchAPI("/homepage"),
  ])

  return {
    props: {
      page: pageRes,
      pages: pagesRes,
			homepage: homepageRes,
    },
    revalidate: 1,
  }
}

export default AltEco
