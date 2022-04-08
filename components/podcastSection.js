import React, {useState, useEffect} from "react"
import Image from "../components/image"

const PodcastSection = ({page}) => {
	return (
		<section className="podcast-section">
			<div className="columns">
				<div className="small">
					<Image image={page.podcast_highlight.image}/>
				</div>
				<div className="text large">
					<h1>{page.podcast_highlight.title}</h1>
					<p>{page.podcast_highlight.subtitle}</p>
				</div>
			</div>	
			
			
			<div>
				{page.podcast.map((item, i) => {
					return (
						<iframe key={'podcast-'+i} src={item.podcast_embed} frameBorder="0" scrolling="no"></iframe>
					)
				})}
			</div>
		</section>
	)
}

export default PodcastSection
