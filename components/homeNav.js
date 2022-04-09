import React from "react"
import Link from "next/link"
import Image from "./image"

const HomeNav = ({ homepage, pages }) => {
	
  return (
    <section className="homenav">
			<div className="icon">
				<Link href={`mailto:info@verdensrommet.network?subject=${homepage.mail_subject}`}>
					<a>
						<div className="default-icon">
							<Image image={homepage.icon}/>
						</div>
						<div className="hidden-icon">
							<Image image={homepage.icon_pressed}/>
							<div class="tooltiptext">
								This is an emergency button, use it to trigger immigration-emergency response from Verdensrommet
							</div>
						</div>
					</a>
				</Link>
			
			</div>
			<div className="logo">
				<Image image={homepage.logo} layout='responsive' objectFit='contain'/>
			</div>
			<div className="links-wrapper">
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
				<div id='news' className="link">
					<Link href='#news'>
						<a>
							news
						</a>
					</Link>
				</div>
			</div>
			<div className="icon2">
				<Image image={homepage.icon2}/>
			</div>
    </section>
  )
}

export default HomeNav
