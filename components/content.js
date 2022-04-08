import React, {useRef, useEffect, useState} from "react"
import ReactMarkdown from "react-markdown";
import { getStrapiMedia } from "../lib/media";
import Image from "../components/image"
import Link from "next/link"
import Collapsible from 'react-collapsible';
import Slider from "react-slick";

const Content = ({ page }) => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1
	};

  return (
	<div className={page.slug}>		
			{page.section.map((item, i) => {
				return (
					<section 
						className={`content container ${item.settings?.background ? "moving-bg" : "normal-bg"} `}
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
												<h2 className={`${content.big_title ? 'big-title' : ''}`} key={'title'+i}>{content.title}</h2>
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
											<div className={`content-image ${content.small ? 'small': ''}`}>
												<Image image={content.image}/>
											</div>
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
								{item.collapsible.filter(list => list.title !== null && list.title !== '').map((content, i) => {
									return(
										<>
											<h4>{content.title}</h4>
									
											<div className={`collapsible first ${content.answer ? 'answer' : 'no-answer'}`}>
												<Collapsible trigger={content.question}>
													{content.answer ?
														<ReactMarkdown 
															children={content.answer} 
														/>
														: 'Answer will be added soon...'
													}
													
												</Collapsible>
											</div>

											<div className="load-more">
												<Collapsible trigger={' '}>
													{item.collapsible.filter(list => parseInt(list.number) === i + 1).slice(1).map((content, i) => {
														return(
															<div className={`collapsible ${content.answer ? 'answer' : 'no-answer'}`}>
																<Collapsible trigger={content.question}>
																	<ReactMarkdown 
																		children={content.answer} 
																	/>
																</Collapsible>
															</div>
														)
													})}
												</Collapsible>
											</div>
										</>
									)
								})}
							 </div>
							}
							{item.slider?.slider && 
								<div className="image-slider">
									<Slider {...settings}>
										{item.slider.slider.map((content, i) => {
											return(
												<div className={`${item.slider.small ? 'small': ''}`}>
													<Image image={content}/>
												</div>
											)
										})}
									</Slider>
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
	
	</div>
  )
}

export default Content
