import React, {useRef, useEffect} from "react"
import ReactMarkdown from "react-markdown";
import { getStrapiMedia } from "../lib/media";
import Image from "../components/image"
import Link from "next/link"
import Collapsible from 'react-collapsible';

const Content = ({ page }) => {
	console.log(page)
  return (
	<>
		{/* {page.section[0]?.settings.background &&
			<div className="section-bg">
				<video loop={true} autoPlay="autoPlay" controls muted>
					<source src={getStrapiMedia(page.section[0].settings.background)} type="video/mp4"/>
					Your browser does not support the video tag.
				</video>
			</div>
		} */}
		
			{page.section.map((item, i) => {
				return (
					<section 
						className={`content container ${item.settings?.background ? "moving-bg" : ""} `}
						id={item.settings?.section_id}
						style=
						{{
							backgroundColor: item.settings?.background ? "transparent" : "#D5D5D5",
							color: item.settings?.background ? "#fff" : "#072FDE",
						}} 
					>
						<div className="wrapper">
							{page.cover_image &&
								<div>
									<h2>{page.title}</h2>
									<Image image={page.cover_image}/>
								</div>
							}
							{item.text[0] && 
							<>
								{item.text.map((content, i) => {
									return(
										<>
											{content.title && 
												<h2 key={'title'+i}>{content.title}</h2>
											}
											{content.text && 
												<ReactMarkdown 
													key={'text'+i}
													children={content.text} 
												/>
											}
										</>
									)
								})}
							</>
							}
							{item.image[0] && 
								<>
									{item.image.map((content, i) => {
										return(
											<Image image={content.image}/>
										)
									})}
								</>
							}
							{item.columns[0] && 
								<>
									{item.columns.map((content, i) => {
										return(
											<div className="columns">
												<div className="medium">
													<ReactMarkdown 
														key={'column-1'+i}
														children={content.column_1} 
													/>
												</div>
												<div className="medium">
													<ReactMarkdown 
														key={'column-2'+i}
														children={content.column_2} 
													/>
												</div>
											</div>
										)
									})}
								</>
							}
							{item.links[0] && 
								<div className="sources">
									{item.links.map((content, i) => {
										return(
											<>
											{content.link_url &&
												<Link href={content.file ? 'https://cms.verdensrommet.network/app/public' + content.link_url : content.link_url}>
													<a target="_blank">
														{content.link_text}
														{content.popup &&
															<div className="popup"> 
																<span>?</span> 
																<div className="hidden">{content.popup}</div>
															</div>
														}
													</a>
												</Link>
											}
											</>
										)
									})}
								</div>
							}
							{item.collapsible && 
							<div className="collapsible-wrapper">
								{item.collapsible.map((content, i) => {
									return(
										<>
										{content.title &&
											<>
												<h4>{content.title}</h4>
										
												<div className={`collapsible first ${content.answer ? 'answer' : 'no-answer'}`}>
													<Collapsible trigger={content.question}>
														{content.answer}
													</Collapsible>
												</div>

												<div className="load-more">
													<Collapsible trigger={' '}>
														{item.collapsible.slice(1).map((content, i) => {
															return(
																<div className={`collapsible ${content.answer ? 'answer' : 'no-answer'}`}>
																	<Collapsible trigger={content.question}>
																		{content.answer}
																	</Collapsible>
																</div>
															)
														})}
													</Collapsible>
												</div>
											</>
										}
										</>
									)
								})}
							 </div>
							}
						</div>
						<style jsx>{`
							section{
								background-color: #D5D5D5;
								color: #072FDE;
								background-size: cover;
							}

						`}</style>
					</section>
				)
			})}
	
	</>
  )
}

export default Content
