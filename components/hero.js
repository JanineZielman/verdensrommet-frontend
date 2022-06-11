import React from "react"
import ReactMarkdown from "react-markdown";
import Image from "../components/image";
import Link from "next/link"
import TopBar from "../components/topBar"
import PodcastSection from "../components/podcastSection"
import { getStrapiMedia } from "../lib/media";

const Hero = ({ page, homepage, username }) => {

  return (
    <section className="hero">
			<TopBar page={page} homepage={homepage}/>
			<div className="hero-wrapper container">
				{page.Hero &&
					<>
						{page.Hero.background &&
							<div className="hero-bg">
								<video loop={true} autoPlay="autoPlay" preload="none" pointerEvents="none" controls muted playsInline>
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
			`}</style>
    </section>
  )
}

export default Hero
