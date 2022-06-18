import React from "react"
import Layout from "../../../../components/layout"
import { fetchAPI } from "../../../../lib/api"
import TopBar from "../../../../components/topBar"
import Collapsible from 'react-collapsible';
import ReactMarkdown from "react-markdown";

const Search = ({ pages, homepage, seo, search, faq }) => {
  const page = {
		slug: `search: ${search}`
	}
	console.log(faq.section)
  return (
		<>
			<TopBar page={page} homepage={homepage}/>
			<Layout pages={pages} homepage={homepage} seo={seo}>
				<section className="search-results">
					{faq.section.map((item, i) => {
						return(
							<div className="collapsible-wrapper">
								<h4>{item.text[0].title}</h4>
								{item.collapsible.map((list, i) => {
									return(
										<>
											{list.question.includes(search) &&
												<div className={`collapsible ${list.answer ? 'answer' : 'no-answer'}`}>
													<Collapsible trigger={list.question}>
														{list.answer ?
															<ReactMarkdown 
																children={list.answer} 
															/>
															: 'Answer will be added soon...'
														}
														
													</Collapsible>
												</div>
											}
										</>
									)
								})}
							</div>
						)
					})}
					{faq.section.length < 1 && 'No results found...'}
				</section>
			</Layout>
		</>
  )
}

export async function getServerSideProps({params}) {
	// Run API calls in parallel
  const [pagesRes, homepageRes, seoRes] = await Promise.all([
    fetchAPI("/menus"),
		fetchAPI("/homepage"),
    fetchAPI("/global"),
  ])

	const faq = await fetchAPI(`/faq`);

  return {
    props: {
      pages: pagesRes,
			homepage: homepageRes,
      seo: seoRes,
			search: params.slug,
			faq: faq,
    }
  }
}

export default Search
