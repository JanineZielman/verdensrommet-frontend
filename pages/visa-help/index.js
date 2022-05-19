import React, {useState, useEffect} from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Hero from "../../components/hero"
import Content from "../../components/content"
import { fetchAPI } from "../../lib/api"

const VisaHelp = ({ page, pages, homepage, seo }) => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const username = localStorage.getItem("name");
    setUsername(username)
  }, []);

  return (
		<>
			<Hero page={page} homepage={homepage} username={username}/>
			<Layout pages={pages} homepage={homepage} seo={seo}>
        {page.section && username &&
          <Content page={page}/>
        }
			</Layout>
		</>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [pageRes, pagesRes, homepageRes, seoRes] = await Promise.all([
    fetchAPI("/visa-help"),
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

export default VisaHelp
