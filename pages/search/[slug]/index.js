import React, {useEffect, useState} from "react"
import Layout from "../../../components/layout"
import { fetchAPI } from "../../../lib/api"
import TopBar from "../../../components/topBar"
import Collapsible from 'react-collapsible';
import ReactMarkdown from "react-markdown";
import Image from "../../../components/image"

const Search = ({ pages, homepage, seo, search, faq, visa, news, podcast}) => {
  const page = {
		slug: `search: ${search}`
	}

	const [username, setUsername] = useState('');
	const [loading, setLoading] = useState('');

	useEffect(() => {
    setTimeout(function() {
       setLoading(false)
    }, 100);
  }, []);

  useEffect(() => {
    const username = localStorage.getItem("name");
    setUsername(username)

  }, []);

	useEffect(() => {
		if (parseInt(document.getElementsByClassName('col-search')[0]?.children[0].children[1].children[0].children.length) > 1) {
			if (document.getElementById('no-results-faq')){
				document.getElementById('no-results-faq').style.display = "none"
			}
		}
		if (parseInt(document.getElementsByClassName('col-search')[1]?.children[0].children[1].children[0].children.length) > 1) {
			if (document.getElementById('no-results-visa')){
				document.getElementById('no-results-visa').style.display = "none"
			}
		}
		if (parseInt(document.getElementsByClassName('col-search')[3]?.children[0].children[1].children[0].children.length) > 1) {
			if (document.getElementById('no-results-podcast')){
				document.getElementById('no-results-podcast').style.display = "none"
			}
		}
  });
  return (
		<>
			<TopBar page={page} homepage={homepage}/>
			<Layout pages={pages} homepage={homepage} seo={seo}>
				{loading ? 'loading...'
				:
					<section className="search-results">
						{username &&
							<>
								<div className="col-search faq">
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
										<span id={'no-results-faq'}>No results found</span>
										</>
									</Collapsible>
								</div>
								<div className="col-search visa">
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
										<span id='no-results-visa'>No results found</span>
										</>
									</Collapsible>
								</div>
							</>
						}
						<div className="col-search news">
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
						<div className="col-search podcast">
							<Collapsible trigger={'➝ Podcast'}>
								{podcast.podcast_highlight.map((item, i) => {
									return(
										<>
										{item.description.toLowerCase().includes(search) &&
											<div className="columns smaller">
												<div className="small">
													<Image image={item.image}/>
												</div>
												<div className="text large">
													<h3>{item.title}</h3>
													<a target="_blank" href={item.link}>Link to podcast</a>
												</div>
											</div>
										}
										</>
									)
								})}
								<span id={'no-results-podcast'}>No results found</span>
							</Collapsible>
						</div>
					</section>
				}
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
	const podcast = await fetchAPI(`/podcast`);
	const contact = await fetchAPI(`/contact`);
	const about = await fetchAPI(`/about`);


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
			podcast: podcast,
    }
  }
}

export default Search
