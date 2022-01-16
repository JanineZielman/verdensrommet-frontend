import { fetchAPI } from "../lib/api"
import Layout from "../components/layout"
import Hero from "../components/hero"
import BasicSection from "../components/basicSection"
import Seo from "../components/seo"

const Page = ({pages, page}) => {
  return (
    <>
      <Hero page={page}/>
      <Layout pages={pages.data}>
        {page.basic_section &&
          <BasicSection page={page}/>
        }
      </Layout>
    </>
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

  const allPagesRes = await fetchAPI("/pages");

  return {
    props: { page: pagesRes[0], pages: allPagesRes },
    revalidate: 1,
  };
}


// export async function getStaticProps({ params }) {
//   const pagesRes = await fetchAPI("/pages", {
//     filters: { slug: params.slug },
//     // populate: {
//     //   text: "*",
//     //   page: { populate: "*" },
//     //   seo: { populate: "*" },
//     // },
//   })
//   const allPagesRes = await fetchAPI("/pages", {
//     // populate: {
//     //   page: { populate: "*" },
//     // },
//   })
//   return {
//     props: { page: pagesRes[0], pages: allPagesRes },
//     revalidate: 1,
//   }
// }

export default Page
