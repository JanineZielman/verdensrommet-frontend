import React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Hero from "../../components/hero"
import Content from "../../components/content"
import TopBar from "../../components/topBar"
import { fetchAPI } from "../../lib/api"

const AltEco = ({ page, pages, homepage, seo }) => {
  return (
		<section className="alt-eco">
      <TopBar page={page} homepage={homepage}/>
			<Layout pages={pages} homepage={homepage} seo={seo}>
        {page.section &&
          <Content page={page}/>
        }
			</Layout>
		</section>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [pageRes, pagesRes, homepageRes, seoRes] = await Promise.all([
    fetchAPI("/alternative-economies"),
    fetchAPI("/menus"),
		fetchAPI("/homepage"),
    fetchAPI("/global"),
  ])

  return {
    props: {
      page: pageRes,
      pages: pagesRes,
			homepage: homepageRes,
      seo: seoRes,
    },
    revalidate: 1,
  }
}

export default AltEco
