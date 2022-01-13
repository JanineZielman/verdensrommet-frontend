import React from "react"

const TopBar = ({ page }) => {
  return (
    <section className="top-bar">
			<h1>{page.title}</h1>
			<style jsx>{`
        h1{
          width: 100%;
          border-bottom: 4px solid #fff;
          color: #fff;
					padding: 0 0 10px 10px;
        }
      `}</style>
    </section>
  )
}

export default TopBar
