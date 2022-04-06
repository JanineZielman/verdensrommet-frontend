import React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Hero from "../../components/hero"
import Content from "../../components/content"
import { fetchAPI } from "../../lib/api"

const VisaHelp = ({ page, pages, homepage }) => {
  return (
		<>
			<Hero page={page} homepage={homepage}/>
			<Layout pages={pages}>
        {page.section &&
          <Content page={page}/>
        }
			</Layout>
		</>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [pageRes, pagesRes, homepageRes] = await Promise.all([
    fetchAPI("/visa-help"),
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

export default VisaHelp
