import React, {useEffect, useState} from "react"
import Layout from "../../../components/layout"
import { fetchAPI } from "../../../lib/api"
import TopBar from "../../../components/topBar"
import Collapsible from 'react-collapsible';
import ReactMarkdown from "react-markdown";
import Image from "../../../components/image"

const Search = ({ pages, homepage, seo, search, faq, visa, news }) => {
  const page = {
		slug: `search: ${search}`
	}

	const [username, setUsername] = useState('');

  useEffect(() => {
    const username = localStorage.getItem("name");
    setUsername(username)

  }, []);

	const [faqResults, setFaqResults] = useState(false);
	const [visaResults, setVisaResults] = useState(false);

	useEffect(() => {
		if (document.getElementsByClassName('col-search')[0]?.children[0].children[1].children[0].textContent != ''
		&& document.getElementsByClassName('col-search')[0]?.children[0].children[1].children[0].textContent != 'No results found'){
			setFaqResults(true)
		}
		if (document.getElementsByClassName('col-search')[1]?.children[0].children[1].children[0].textContent != '' 
		&& document.getElementsByClassName('col-search')[1]?.children[0].children[1].children[0].textContent != 'No results found'){
			setVisaResults(true)
		}
  }, []);
  return (
		<>
			<TopBar page={page} homepage={homepage}/>
			<Layout pages={pages} homepage={homepage} seo={seo}>
				<section className="search-results">
					{username &&
						<>
							<div className="col-search">
								<Collapsible trigger={'➝ FAQ'}>
									<>
									{faq.section.map((item, i) => {
										return(
											item.collapsible.map((list, i) => {
												return(
													<>
													{list.question.toLowerCase().includes(search) &&
														<div className="collapsible-wrapper">
															{list.title &&
																<h4>{item.text[0].title} - {list.title}</h4>
															}
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
														</div>
													}
													</>
												)
											})
										)
									})}
									{faqResults == false && 'No results found'}
									</>
								</Collapsible>
							</div>
							<div className="col-search">
								<Collapsible trigger={'➝ Visa, help!'}>
									<>
									{visa.section.map((item, i) => {
										return(
											item.links.map((content, i) => {
												return(
													<>
													{content.link_text.toLowerCase().includes(search) &&
														<div className="sources">
															{content.link_url &&
																<a target="_blank" href={content.file ? 'https://cms.verdensrommet.network/' + content.link_url : content.link_url}>
																	{content.link_text}
																	{content.popup &&
																		<div className="popup"> 
																			<span>?</span> 
																			<div className="hidden">{content.popup}</div>
																		</div>
																	}
																</a>
															}
														</div>
													}
													</>
												)
											})
										)
									})}
									{visaResults == false && 'No results found'}
									</>
								</Collapsible>
							</div>
						</>
					}
					<div className="col-search">
						<Collapsible trigger={'➝ News'}>
							<div className="news-container">
								{news.map((item, i) => {
									return(
										<div className="news-item">
											<a href={item.external_url ? item.external_url : 'news/' + item.slug } target={item.external_url ? '_blank' : '' }>
												<div className="image">
													<Image image={item.cover_image} layout='fill' objectFit='cover'/>
												</div>
												<h4>{item.title}</h4>
												<p>{item.intro_text}</p>
											</a>
									</div>
									)
								})}
								{news.length < 1 && 'No results found'}
							</div>
						</Collapsible>
					</div>
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
	const visa = await fetchAPI(`/visa-help`);

	const news = await fetchAPI(`/news-items?intro_text_contains=${params.slug}`);

  return {
    props: {
      pages: pagesRes,
			homepage: homepageRes,
      seo: seoRes,
			search: params.slug.toLowerCase(),
			faq: faq,
			visa: visa,
			news: news,
    }
  }
}

export default Search
