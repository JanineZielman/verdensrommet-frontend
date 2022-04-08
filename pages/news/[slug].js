import { fetchAPI } from "../../lib/api"
import Layout from "../../components/layout"
import Topbar from "../../components/topBar"
import Content from "../../components/content"
import Image from "../../components/image"
import Seo from "../../components/seo"

const NewsPage = ({pages, page, menu, homepage}) => {
  return (
    <section className="news-page">
      <Topbar page={page} homepage={homepage}/>
      <Layout pages={menu} homepage={homepage}>
				{page.section &&
          <Content page={page}/>
        }
      </Layout>
    </section>
  )
}

export async function getStaticPaths() {
  const pagesRes = await fetchAPI("/news-items");
  return {
    paths: pagesRes.map((page) => ({
      params: {
        slug: page.slug,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const pagesRes = await fetchAPI(
    `/news-items?slug=${params.slug}`
  );

  const allPagesRes = await fetchAPI("/news-items");

	const menu = await fetchAPI("/menus", {
    populate: {
      page: { populate: "*" },
    },
  })

  const homepage = await fetchAPI("/homepage", {
    populate: {
      page: { populate: "*" },
    },
  })

  return {
    props: { page: pagesRes[0], pages: allPagesRes, menu: menu, homepage: homepage },
    revalidate: 1,
  };
}

export default NewsPage
