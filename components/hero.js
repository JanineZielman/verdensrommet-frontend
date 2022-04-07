import React from "react"
import ReactMarkdown from "react-markdown";
import Image from "../components/image";
import Link from "next/link"
import TopBar from "../components/topBar"
import PodcastSection from "../components/podcastSection"
import { getStrapiMedia } from "../lib/media";

const Hero = ({ page, homepage, username }) => {
	console.log(page)
  return (
    <section className="hero">
			<TopBar page={page} homepage={homepage}/>
			<div className="hero-wrapper container">
				{page.Hero &&
					<>
						{page.Hero.background &&
							<div className="hero-bg">
								<video loop={true} autoPlay="autoPlay" controls muted>
									<source src={getStrapiMedia(page.Hero?.background)} type="video/mp4"/>
									Your browser does not support the video tag.
								</video>
							</div>
						}
					
						{page.Hero.text &&
							<div className="intro-text">
								<ReactMarkdown 
									children={page.Hero.text}
								/>
							</div>
						}
						{page.Hero.links &&
							<div className="links">
								{username == undefined ? 
									<ReactMarkdown 
										children={page.Hero.links}
									/>
									: 
									<ReactMarkdown 
										children={page.links_logged_in}
									/>
								}
							</div>
						}
					</>
				}
				{page.podcast &&
					<PodcastSection page={page}/>
				}
			</div>
			<style jsx>{`
				section{
					position: relative;
					height: calc(100vh - 60px);
				}
				/* .back{
					position: fixed;
					top: 200px;
					right: 48px;
					background-color: #fff;
					padding: 5px 20px 10px 20px;
					border-radius: 24px;
					color: #0000FF;
					font-size: 18px;
				}
				.intro-text{
					color: #fff;
					font-size: 30px;
				}
				.links{
					position: fixed;
					right: 24px;
					bottom: 84px;
					width: 350px;
					font-size: 40px;
				} */
			`}</style>
    </section>
  )
}

export default Hero
