import React from "react"
import Link from "next/link"

const TopBar = ({ page }) => {
  return (
    <section className="top-bar">
			<h1><Link href={'/'}><a>{page.slug}</a></Link></h1>
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
