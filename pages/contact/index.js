import React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Hero from "../../components/hero"
import { fetchAPI } from "../../lib/api"

const Contact = ({ page, pages, homepage }) => {
  return (
		<>
			<Hero page={page} homepage={homepage}/>
			<Layout pages={pages}>
			</Layout>
		</>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [pageRes, pagesRes, homepageRes] = await Promise.all([
    fetchAPI("/contact"),
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

export default Contact