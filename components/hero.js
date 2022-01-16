import React from "react"
import Link from "next/link"
import TopBar from "../components/topBar"

const Hero = ({ page }) => {
  return (
    <section className="hero">
			<TopBar page={page}/>
			<div className="hero-wrapper container">
				{page.Hero &&
					<div className="hero-bg">
						<video loop={true} autoPlay="autoPlay" controls muted playsInline>
							<source src={"http://85.214.72.113:1337" + page.Hero.background.url} type="video/mp4"/>
							Your browser does not support the video tag.
						</video>
					</div>
				}
				{page.intro_title &&
					<h2 className="intro-title">{page.intro_title}</h2>
				}
				{page.intro_text &&
					<div className="intro-text">{page.intro_text}</div>
				}
			</div>
			<style jsx>{`
				section{
					position: relative;
					height: 100vh;
				}
				.intro-title{
					font-size: 53px;
					color: #fff;
				}
				.intro-text{
					max-width: 800px;
					color: #fff;
					font-size: 30px;
					margin-top: 24px;
				}
			`}</style>
    </section>
  )
}

export default Hero
