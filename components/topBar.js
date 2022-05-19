import React from "react"
import Link from "next/link"
import Image from "../components/image"

const TopBar = ({ page, homepage }) => {

  return (
    <>
    <div className="top-bar-wrap"></div>
    <section className="top-bar">
			<h1>
        <a href={'/'}>
          <span className="default-link">{page.order ? 'news' : page.slug}</span>
          <span className="hidden-link">⭠ Back to home</span>
        </a>
      </h1>
      <div className="icon">
				<a href={`mailto:info@verdensrommet.network?subject=${homepage.mail_subject}`}>
					<div className="default-icon">
						<Image image={homepage.icon}/>
					</div>
					<div className="hidden-icon">
						<Image image={homepage.icon_pressed}/>
						<div className="tooltiptext">
							This is an emergency button, use it to trigger immigration-emergency response from Verdensrommet
						</div>
					</div>
				</a>
			
			</div>
			<style jsx>{`
        h1{
          width: 100%;
          border-bottom: 4px solid #fff;
          color: #fff;
					padding: 0 0 10px 10px;
          text-transform: uppercase;
        }
      `}</style>
    </section>
    </>
  )
}

export default TopBar
