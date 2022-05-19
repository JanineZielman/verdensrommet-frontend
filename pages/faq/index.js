import React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Hero from "../../components/hero"
import Content from "../../components/content"
import { fetchAPI } from "../../lib/api"

const Faq = ({ page, pages, homepage, seo }) => {
  return (
		<>
			<Hero page={page} homepage={homepage}/>
			<Layout pages={pages} homepage={homepage} seo={seo}>
        {page.section &&
          <Content page={page}/>
        }
			</Layout>
		</>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [pageRes, pagesRes, homepageRes, seoRes] = await Promise.all([
    fetchAPI("/faq"),
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

export default Faq
