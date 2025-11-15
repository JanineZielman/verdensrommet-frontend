import { fetchAPI } from "../../lib/api"
import Content from "../../components/festival-content"
import Image from "../../components/image"
import ReactMarkdown from "react-markdown";

const NewsPage = ({pages, page, menu, homepage}) => {
  const seo = []
  seo.push(
    {
    image: page.cover_image,
    title: page.title,
    description: page.intro_text
    }
  )

  console.log(page)
  return (
    <section className="event-page">
      <a className="back-link" href="/wearestillhere">Back</a>
     {page.section &&
        <Content page={page}/>
      }
      {page.People.length > 0 &&
        <div className="people">
          {page.People.map((item, i) => {
            return(
              <div className="person">
                {item.Image &&<Image image={item.Image}/>}
                <h3>{item.Name}</h3>
                <ReactMarkdown children={item.Bio}/>
              </div>
            )
          })}
        </div>
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
