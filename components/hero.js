import React from "react"
import ReactMarkdown from "react-markdown";
import Image from "../components/image";
import Link from "next/link"
import TopBar from "../components/topBar"
import PodcastSection from "../components/podcastSection"

const Hero = ({ page, homepage }) => {
	console.log(page)
  return (
    <section className="hero">
			<TopBar page={page}/>
			<div className="hero-wrapper container">
				<div className="icon">
					<Image image={homepage.Hero.icon}/>
				</div>
				<div className="back">
					<Link href={'/'}>
						<a>Back to index</a>
					</Link>
				</div>
				{page.Hero &&
					<>
						<div className="hero-bg">
							<video loop={true} autoPlay="autoPlay" controls muted>
								<source src={"https://cms.verdensrommet.network/app/public" + page.Hero?.background?.url} type="video/mp4"/>
								Your browser does not support the video tag.
							</video>
						</div>
						{page.Hero.text &&
							<div className="intro-text">
								<ReactMarkdown 
									children={page.Hero.text}
								/>
							</div>
						}
						{page.Hero.links &&
							<div className="links">
								<ReactMarkdown 
									children={page.Hero.links}
								/>
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
					height: calc(100vh - 79px);
				}
				.back{
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
				}
			`}</style>
    </section>
  )
}

export default Hero
