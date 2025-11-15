import { fetchAPI } from "../../lib/api"
import Content from "../../components/festival-content"

const NewsPage = ({pages, page, menu, homepage}) => {
  const seo = []
  seo.push(
    {
    image: page.cover_image,
    title: page.title,
    description: page.intro_text
    }
  )
  return (
    <section className="event-page">
     {page.section &&
        <Content page={page}/>
      }
    </section>
  )
}

export async function getStaticPaths() {
  const pagesRes = await fetchAPI("/pages");
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
    `/pages?slug=${params.slug}`
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
    props: { 
      page: pagesRes[0], 
      pages: allPagesRes, 
      menu: menu, 
      homepage: homepage,
    },
    revalidate: 1,
  };
}

export default NewsPage
