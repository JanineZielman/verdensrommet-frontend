import React from "react"
import Link from "next/link"
import Image from "../components/image"

const TopBar = ({ page, homepage }) => {
  console.log(homepage)
  return (
    <section className="top-bar">
			<h1>
        <Link href={'/'}>
          <a><span>{page.order ? 'news' : page.slug}</span></a>
        </Link>
      </h1>
      <div className="icon">
        <Image image={homepage.icon}/>
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
  )
}

export default TopBar
