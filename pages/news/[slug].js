import { fetchAPI } from "../../lib/api"
import Layout from "../../components/layout"
import Topbar from "../../components/topBar"
import Content from "../../components/content"
import Image from "../../components/image"
import Seo from "../../components/seo"

const Page = ({pages, page, menu}) => {
  return (
    <>
      {/* <Topbar page={page}/> */}
      <Layout pages={menu}>
				{page.section &&
          <Content page={page}/>
        }
      </Layout>
    </>
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

  return {
    props: { page: pagesRes[0], pages: allPagesRes, menu: menu },
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
