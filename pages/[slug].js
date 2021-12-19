// import Articles from "../components/articles"
import { fetchAPI } from "../lib/api"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Page = ({ page, pages }) => {
  const seo = {
    metaTitle: page.attributes.title,
    // metaDescription: `All ${category.attributes.name} articles`,
  }

  console.log('page', page)

  return (
		<Layout pages={pages.data}>
      <Seo seo={seo} />
      <h1>{page.attributes.title}</h1>
    </Layout>
    // <Layout categories={categories.data}>
    //   <Seo seo={seo} />
    //   <div className="uk-section">
    //     <div className="uk-container uk-container-large">
    //       <h1>{category.attributes.name}</h1>
    //       <Articles articles={category.attributes.articles.data} />
    //     </div>
    //   </div>
    // </Layout>
  )
}

export async function getStaticPaths() {
  const pagesRes = await fetchAPI("/pages", { fields: ["slug"] })

  return {
    paths: pagesRes.data.map((page) => ({
      params: {
        slug: page.attributes.slug,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const pagesRes = await fetchAPI("/pages", {
    filters: { slug: params.slug },
    populate: {
      text: "*",
      page: { populate: "*" },
      seo: { populate: "*" },
    },
  })
  const allPagesRes = await fetchAPI("/pages", {
    populate: {
      page: { populate: "*" },
    },
  })
  return {
    props: { page: pagesRes.data[0], pages: allPagesRes },
    revalidate: 1,
  }
}

export default Page
