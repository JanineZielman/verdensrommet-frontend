import React from "react"
import Image from "../components/image"
import ReactMarkdown from "react-markdown";
import Collapsible from 'react-collapsible';

const PodcastSection = ({page}) => {
	return (
		<section className="podcast-section">
			{page.podcast_highlight.map((item, i) => {
				return(
						<div className="columns">
							<div className="small">
								<Image image={item.image}/>
								<audio controls>
									<source src={'https://cms.verdensrommet.network' + item.audio.url} type="audio/mpeg"/>
									Your browser does not support the audio element.
								</audio>
								<a target="_blank" href={item.link}>➝ Link to podcast</a>
							</div>
							<div className="text large">
								<h1>{item.title}</h1>
								<ReactMarkdown 
									children={item.description} 
								/>
								<Collapsible trigger={''}>
									{item.podcast.map((item, j) => {
										return(
											<div className="columns smaller">
												<div className="small">
													<Image image={item.image}/>
												</div>
												<div className="text large">
													<h3>{item.title}</h3>
													<a target="_blank" href={item.link}>Link to podcast</a>
												</div>
											</div>
										)
									})}
								</Collapsible>
							</div>
						</div>
				
				)
			})}
		</section>
	)
}

export default PodcastSection
