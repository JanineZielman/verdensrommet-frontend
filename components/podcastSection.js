import React, {useState, useEffect} from 'react';
import Image from "../components/image"
import ReactMarkdown from "react-markdown";
import Collapsible from 'react-collapsible';

const PodcastSection = ({page}) => {

	useEffect(() => {
    var myAudio = document.getElementById("myAudio");
		var toggle = document.getElementById("toggle");
  }, []);

	function togglePlay() {
		myAudio.paused ? myAudio.play() : myAudio.pause();
		myAudio.paused ? toggle.classList.add('pause') : toggle.classList.add('play') ;
		myAudio.paused ? toggle.classList.remove('play') : toggle.classList.remove('pause') ;
	};
	return (
		<section className="podcast-section">
			<audio controls id="myAudio">
				<source src={'https://cms.verdensrommet.network' + page.highlight.audio.url} type="audio/mpeg"/>
				Your browser does not support the audio element.
			</audio>
			<div className="columns">
				<div className="small">
					{page.highlight.podcast.image && 
						<Image image={page.highlight.podcast.image}/>
					}
					<a onClick={togglePlay} className="toggle-sound" id="toggle"><span>On</span><span>Off</span></a><br/>
					<a target="_blank" href={page.highlight.podcast.link}>➝ Link to podcast</a>
				</div>
				<div className="text large">
					<h1>{page.highlight.podcast.title}</h1>
					<ReactMarkdown 
						children={page.highlight.description} 
					/>
				</div>
			</div>
			{page.podcast_item.map((item, i) => {
				return(
						<div className="columns">
							<div className="small">
								{item.image && 
									<Image image={item.image}/>
								}
								<a target="_blank" href={item.link}>➝ Link to podcast</a>
							</div>
							<div className="text large">
								<h1>{item.title}</h1>
								<ReactMarkdown 
									children={item.description} 
								/>
								{item.podcast.length > 0 &&
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
								}
							</div>
						</div>
				
				)
			})}
		</section>
	)
}

export default PodcastSection
