import React, {useEffect, useState} from "react"
import Layout from "../../components/layout"
import { fetchAPI } from "../../lib/api"
import TopBar from "../../components/topBar"

const Search = ({ pages, homepage, seo}) => {
  const page = {
		slug: `search: ...`
	}
  return (
		<>
			<TopBar page={page} homepage={homepage}/>
			<Layout pages={pages} homepage={homepage} seo={seo}>
				<section className="search-results">
					Fill in a search term... or go back to <a href="/"><u>home</u></a>
				</section>
			</Layout>
		</>
  )
}

export async function getStaticProps() {
	// Run API calls in parallel
  const [pagesRes, homepageRes, seoRes] = await Promise.all([
    fetchAPI("/menus"),
		fetchAPI("/homepage"),
    fetchAPI("/global"),
  ])


  return {
    props: {
      pages: pagesRes,
			homepage: homepageRes,
      seo: seoRes,
    }
  }
}

export default Search
