import React from "react"
import Image from "../components/image"

const PodcastSection = ({page}) => {
	console.log(page)
	return (
		<section className="podcast-section">
			<div className="columns" style={{width:'1100px'}}>
				<div className="small">
					<Image image={page.podcast_highlight.image}/>
				</div>
				<div className="text large">
					<h1>{page.podcast_highlight.title}</h1>
					<p>{page.podcast_highlight.subtitle}</p>
				</div>
			</div>	
			
			{page.podcast.map((item, i) => {
				return (
					<iframe key={'podcast-'+i} src={item.podcast_embed} frameBorder="0" scrolling="no"></iframe>
				)
			})}
			{/* {page.link.map((item, i) => {
				return (
					<a key={'link-'+i} href={item.link_url} target="_blank">{item.link_text}</a>
				)
			})} */}
			<style jsx>{`
				iframe{
					display: block;
					width: 1100px;
					margin: 24px 0;
				}
				a{
					color: #fff;
					width: 100%;
					text-align: left;
					display: block;
					text-decoration: underline;
				}
			`}</style>
		</section>
	)
}

export default PodcastSection
