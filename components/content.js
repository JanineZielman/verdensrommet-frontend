import React from "react"
import ReactMarkdown from "react-markdown";
import { getStrapiMedia } from "../lib/media";
import Image from "../components/image"

const Content = ({ page }) => {
	console.log(page)
  return (
		<>
		{page.content.map((section, i) => {
			return (
				<section 
					className="content container"
					id={section.section_id}
					style=
					{{
						backgroundImage: section.background ? "url(" + getStrapiMedia(section.background) + ")" : "transparent",
						color: section.background ? "#fff" : "#072FDE"
					}} 
				>
					<div className="wrapper">
						{section.title && 
							<h2 key={'title'+i}>{section.title}</h2>
						}
						<ReactMarkdown 
							key={'text'+i}
							children={section.text} 
						/>
					</div>
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
			)
		})}
		</>
  )
}

export default Content
