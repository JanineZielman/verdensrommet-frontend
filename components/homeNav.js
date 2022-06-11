import Image from "./image"

const HomeNav = ({ homepage, pages }) => {	
  return (
    <section className="homenav">
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
			<div className="logo">
				<video id="video" width="600" height="100%" autoPlay loop muted playsInline>
					<source src="/logo.webm" type="video/webm"/>
          <img src="/fallback.png" title="Your browser does not support the <video> tag"/>
				</video>
				{/* <Image image={homepage.logo} layout='responsive' objectFit='contain'/> */}
			</div>
			<div className="links-wrapper">
				{pages.map((page, i) => {
					return (
						<div id={page.slug} key={'link-'+ i} className="link">
							<a href={`/${page.slug}`}>
								<span>{page.title}</span>
								{page.icon &&
									<div className="hidden-icon">
										<Image image={page.icon}/>
									</div>
								}
							</a>
						</div>
					)
				})}
				<div id='news-link' className="link">
					<a href='#news'>
						news
					</a>
				</div>
			</div>
			<div className="icon2">
				<Image image={homepage.icon2}/>
			</div>
    </section>
  )
}

export default HomeNav
