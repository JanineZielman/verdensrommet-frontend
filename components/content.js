import React from "react"
import ReactMarkdown from "react-markdown";
import { getStrapiMedia } from "../lib/media";
import Image from "../components/image"

const Content = ({ page }) => {
	console.log(page)
  return (
	<>
		{page.content[0]?.background &&
			<div className="section-bg">
				<video loop={true} autoPlay="autoPlay" controls muted>
					<source src={getStrapiMedia(page.content[0].background)} type="video/mp4"/>
					Your browser does not support the video tag.
				</video>
			</div>
		}
		
		<section 
			className="content container"
			id={page.content[0].section_id}
			style=
			{{
				backgroundColor: page.content[0].background ? "transparent" : "#D5D5D5",
				color: page.content[0].background ? "#fff" : "#072FDE"
			}} 
		>
			{page.content.map((section, i) => {
				return (
					<div className="wrapper">
						{section.title && 
							<h2 key={'title'+i}>{section.title}</h2>
						}
						{section.text && 
							<ReactMarkdown 
								key={'text'+i}
								children={section.text} 
							/>
						}
						{section.image && 
							<Image image={section.image}/>
						}
					</div>
				)
			})}
			<style jsx>{`
				section{
					background-color: #D5D5D5;
					color: #072FDE;
					background-size: cover;
				}
				h2{
					font-size: 120px;
					line-height: 1;
					margin: 0;
					padding-bottom: 48px;
					text-transform: uppercase;
				}
				.wrapper{
					max-width: 900px;
				}
			`}</style>
		</section>
	</>
  )
}

export default Content
