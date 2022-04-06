import React from "react"
import ReactMarkdown from "react-markdown";
import { getStrapiMedia } from "../lib/media";
import Image from "../components/image"

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
						className="content container"
						id={item.settings?.section_id}
						style=
						{{
							backgroundColor: item.settings?.background ? "transparent" : "#D5D5D5",
							color: item.settings?.background ? "#fff" : "#072FDE"
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
										<Image image={content.image}/>
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
						</div>
						<style jsx>{`
							section{
								background-color: #D5D5D5;
								color: #072FDE;
								background-size: cover;
							}
							/* h2{
								font-size: 120px;
								line-height: 1;
								margin: 0;
								padding-bottom: 48px;
								text-transform: uppercase;
							} */
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
