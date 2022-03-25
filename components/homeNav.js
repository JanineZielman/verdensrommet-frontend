import React from "react"
import Link from "next/link"
import Image from "./image"

const HomeNav = ({ homepage, pages }) => {
  return (
    <section className="homenav">
			<div className="icon">
				<Image image={homepage.Hero.icon}/>
			</div>
			<div className="logo">
				<Image image={homepage.image}/>
			</div>
			{pages.map((page, i) => {
				return (
					<div id={page.slug} key={'link-'+ i} className="link">
						<Link href={`/${page.slug}`}>
							<a>{page.title}</a>
						</Link>
					</div>
				)
			})}
			<style jsx>{`
        .homenav {
          font-size: 40px;
        }
				.logo{
					position: absolute;
					top: 42%;
					left: 50%;
					transform: translate(-50%, -50%);
					width: 50vw;
					height: auto;
					align-items: center;
				}
				a{
					color: #fff;
					text-transform: uppercase;
				}
				.link{
					position: absolute;
					max-width: 15vw;
					text-align: center;
					line-height: 1;
				}
				#about{
					top: 10vh;
					left: 5vw;
				}
				#contact{
					top: 5vh;
					left: 25vw;
				}
				#profile{
					top: 5vh;
					right: 25vw;
				}
				#visa-help{
					top: 30vh;
					right: 5vw;
				}
				#faq{
					top: 60vh;
					right: 12vw;
				}
				#podcast{
					top: 80vh;
					right: 30vw;
				}
				#value-exchange{
					top: 35vh;
					left: 5vw;
				}
				#alternative-economies{
					top: 70vh;
					left: 10vw;
				}
      `}</style>
    </section>
  )
}

export default HomeNav
