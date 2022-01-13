import { fetchAPI } from "../lib/api"
import Layout from "../components/layout"
import TopBar from "../components/topBar"
import Seo from "../components/seo"

const Page = ({pages, page}) => {
  console.log(page);
  return (
    <>
      <TopBar page={page}/>
      <Layout pages={pages.data}>
        {page.Hero &&
          <div className="hero-bg">
            <video loop="true" autoplay="autoplay" controls muted>
              <source src={"http://85.214.72.113:1337" + page.Hero.background.url} type="video/mp4"/>
              Your browser does not support the video tag.
            </video>
          </div>
        }
        {page.intro_title &&
          <h2 className="intro-title">{page.intro_title}</h2>
        }
        {page.intro_text &&
          <div className="intro-text">{page.intro_text}</div>
        }
        <style jsx>{`
          .intro-title{
            font-size: 53px;
            color: #fff;
          }
          .intro-text{
            max-width: 800px;
            color: #fff;
            font-size: 30px;
            margin-top: 24px;
          }
        `}</style>
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
