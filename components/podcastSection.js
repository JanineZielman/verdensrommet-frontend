import React, {useState, useEffect} from "react"
import Image from "../components/image"
import Link from "next/link"

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
				{page.podcast.slice(0,3).map((item, i) => {
					return (
						<iframe key={'podcast-'+i} src={item.podcast_embed} frameBorder="0" scrolling="no"></iframe>
					)
				})}
			</div>
			{page.link?.link_url &&
				<a target="_blank" href={page.link.file ? 'https://cms.verdensrommet.network/' + page.link.link_url : page.link.link_url}>
					➝ {page.link.link_text}
					{page.link.popup &&
						<div className="popup"> 
							<span>?</span> 
							<div className="hidden">{page.link.popup}</div>
						</div>
					}
				</a>
			}
		</section>
	)
}

export default PodcastSection
