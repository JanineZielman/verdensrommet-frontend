import React from "react"
import Link from "next/link"
import Image from "./image"

const HomeNav = ({ homepage, pages }) => {
	console.log(homepage)
	
  return (
    <section className="homenav">
			<div className="icon">
				<Image image={homepage.icon}/>
			</div>
			<div className="logo">
				<Image image={homepage.logo}/>
			</div>
			{pages.map((page, i) => {
				return (
					<div id={page.slug} key={'link-'+ i} className="link">
						<Link href={`/${page.slug}`}>
							<a>
								{page.title}
								{page.icon &&
									<div className="hidden-icon">
										<Image image={page.icon}/>
									</div>
								}
							</a>
						</Link>
					</div>
				)
			})}
    </section>
  )
}

export default HomeNav
