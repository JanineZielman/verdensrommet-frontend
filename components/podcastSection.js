import React from "react"
import ReactMarkdown from "react-markdown";
import { getStrapiMedia } from "../lib/media";
import Image from "../components/image"

const PodcastSection = () => {
	return (
		<section className="container">
			<iframe src="https://anchor.fm/verdensrommet/embed" height="175px" width="900px" frameborder="0" scrolling="no"></iframe>
			
		
			<style jsx>{`
				iframe{
					display: block;
					margin: auto;
				}
			`}</style>
		</section>
	)
}

export default PodcastSection
