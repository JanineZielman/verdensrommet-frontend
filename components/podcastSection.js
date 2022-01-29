import React from "react"

const PodcastSection = ({page}) => {
	return (
		<section className="podcast-section">	
			{page.podcast.map((item, i) => {
				return (
					<iframe key={'podcast-'+i} src={item.podcast_embed} height="auto" width="900px" frameBorder="0" scrolling="no"></iframe>
				)
			})}
			{page.link.map((item, i) => {
				return (
					<a key={'link-'+i} href={item.link_url} target="_blank">{item.link_text}</a>
				)
			})}
			<style jsx>{`
				iframe{
					display: block;
					max-width: 80vw;
					margin: 24px auto;
				}
				a{
					color: #fff;
					width: 100%;
					text-align: center;
					display: block;
					text-decoration: underline;
				}
			`}</style>
		</section>
	)
}

export default PodcastSection
