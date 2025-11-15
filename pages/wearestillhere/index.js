import React, {useState, useEffect} from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Hero from "../../components/hero"
import Content from "../../components/festival-content"
import { fetchAPI } from "../../lib/api"

const WeAreStillHere = ({ page, pages, homepage, seo }) => {
  console.log(page)
  return (
    <> 
      <a href="/" className="home-link">Verdensrommet</a>
      <div className="festival-hero">
        <h1>{page.title}</h1>
        <img src={`https://cms.verdensrommet.network/${page.Hero.background.url}`}/>
      </div>
      {page.Events.length > 0 &&
        <div className="events">
          <h2>Programme</h2>
          {page.Events.map((item, i) => {
            return(
              <>
              <h3>{item.Date}</h3>
              <a href={item.Link} className="event">
                <p>{item.Category} {item.Time}</p>
                <p className="title">{item.Title}</p>
              </a>
              </>
            )
          })}
        </div>
      }
      {page.section &&
        <Content page={page}/>
      }
    </>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [pageRes, pagesRes, homepageRes, seoRes] = await Promise.all([
    fetchAPI("/pages/8"),
    fetchAPI("/menus"),
    fetchAPI("/homepage"),
    fetchAPI("/global"),
  ])

  return {
    props: {
      page: pageRes,
      pages: pagesRes,
      homepage: homepageRes,
      seo: seoRes,
    },
    revalidate: 1,
  }
}

export default WeAreStillHere
