import React from "react"
import Layout from "../components/layout"
import ReactMarkdown from "react-markdown";
import Seo from "../components/seo"
import { fetchAPI } from "../lib/api"
import HomeNav from "../components/homeNav"
import { getStrapiMedia } from "../lib/media"
import Image from "../components/image"
import Link from "next/link"

const Home = ({ homepage, pages, news }) => {
  console.log(pages)
  return (
    <Layout pages={pages} homepage={homepage}>
      <div className="hero-bg">
        <video loop={true} autoPlay="autoPlay" pointerEvents="none" controls muted playsinline>
          <source src={"https://cms.verdensrommet.network/app/public/" + homepage.Hero.background.url} type="video/mp4"/>
          Your browser does not support the video tag.
        </video>
      </div>
      <HomeNav homepage={homepage} pages={pages}/>
      <div className="spacer"> </div>
      {homepage.about &&
        <section className="about-section">
          <h2>
            <span>{homepage.about.title}</span>
            <span>{homepage.about.title}</span>
            <span>{homepage.about.title}</span>
            <span>{homepage.about.title}</span>
            <span>{homepage.about.title}</span>
            <span>{homepage.about.title}</span>
            <span>{homepage.about.title}</span>
            <span>{homepage.about.title}</span>
            <span>{homepage.about.title}</span>
            <span>{homepage.about.title}</span>
            <span>{homepage.about.title}</span>
            <span>{homepage.about.title}</span>
          </h2>
          <p className="intro-text">
            <ReactMarkdown 
              children={homepage.about.text}
            />
          </p>
        </section>
      }
      {homepage.news &&
        <section className="news-section" style={{backgroundImage: homepage.news.background ? "url(" + getStrapiMedia(homepage.news.background) + ")" : "transparent",}} >
          <h2>
            <span>{homepage.news.title}</span>
            <span>{homepage.news.title}</span>
            <span>{homepage.news.title}</span>
            <span>{homepage.news.title}</span>
            <span>{homepage.news.title}</span>
            <span>{homepage.news.title}</span>
            <span>{homepage.news.title}</span>
            <span>{homepage.news.title}</span>
            <span>{homepage.news.title}</span>
            <span>{homepage.news.title}</span>
            <span>{homepage.news.title}</span>
            <span>{homepage.news.title}</span>
            <span>{homepage.news.title}</span>
            <span>{homepage.news.title}</span>
            <span>{homepage.news.title}</span>
            <span>{homepage.news.title}</span>
          </h2>
          <div className="news-container">
            {news.map((item, i) => {
              return(
                <div className="news-item">
                  <Link href={item.external_url ? item.external_url : 'news/' + item.slug }>
                    <a target={item.external_url ? '_blank' : '' }>
                      <div className="image">
                        <Image image={item.cover_image} layout='fill' objectFit='cover'/>
                      </div>
                      <h4>{item.title}</h4>
                      <p>{item.intro_text}</p>
                    </a>
                  </Link>
                </div>
              )
            })}
          </div>
        </section>
      }
      <style jsx>{`
				.about-section{
          background-color: #0000FF;
          color: #00FF3B;
          padding: 5px 0px;
          min-height: 60vh;
          width: 100%;
          overflow: hidden;
        }
        .news-section{
          background-color: #fff;
          color: #0000FF;
          padding: 5px 0px;
          min-height: 100vh;
          width: 100%;
          overflow: hidden;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        }
        h2{
          text-transform: uppercase;
          padding-bottom: 14px;
        }
        .about-section h2{
          border-bottom: 4px solid #00FF3B;
        }
        .news-section h2{
          border-bottom: 4px solid #0000FF;
        }
        span{
          margin: 0 14px;
        }
        .intro-text{
          padding: 0 14px;
        }
			`}</style>
    </Layout>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [homepageRes, newsRes, pagesRes] = await Promise.all([
    fetchAPI("/homepage"),
    fetchAPI("/news-items?_sort=date"),
    fetchAPI("/menus"),
  ])

  return {
    props: {
      homepage: homepageRes,
      news: newsRes,
      pages: pagesRes,
    },
    revalidate: 1,
  }
}

export default Home
