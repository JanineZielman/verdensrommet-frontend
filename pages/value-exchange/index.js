import React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Hero from "../../components/hero"
import { fetchAPI } from "../../lib/api"

const ValueExchange = ({ page, pages, homepage }) => {
  return (
		<>
			{/* <Hero page={page} homepage={homepage}/> */}
			<Layout pages={pages}>
			</Layout>
		</>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [pageRes, pagesRes, homepageRes] = await Promise.all([
    fetchAPI("/value-exchange"),
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

export default ValueExchange