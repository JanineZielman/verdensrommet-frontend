import { fetchAPI } from "../lib/api"
import Layout from "../components/layout"
import TopBar from "../components/topBar"
import { getStrapiMedia } from "../lib/media";
import ReactMarkdown from "react-markdown";
import ResetPassword from "./auth/reset-password";

const ResetPW = ({page, pages, homepage, seo}) => {
  return(
    <section className="register">
      <TopBar page={page} homepage={homepage}/>
      <Layout pages={pages} homepage={homepage} seo={seo}>
				<div 
					className="content container"
					id="forgot_password"
					style=
					{{
						backgroundColor:"#D5D5D5",
						color: "#072FDE",
						height: "100vh",
						paddingTop: "100px"
					}} 
				>
					
					<ResetPassword />
				</div>
      </Layout>
      <style jsx>{`
				.wrapper{
					max-width: 900px;
				}
			`}</style>
    </section>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [pagesRes, homepageRes, seoRes] = await Promise.all([
    fetchAPI("/menus"),
		fetchAPI("/homepage"),
    fetchAPI("/global"),
  ])

  return {
    props: {
      page: {
				slug: 'Reset Password'
			},
      pages: pagesRes,
			homepage: homepageRes,
      seo: seoRes,
    },
    revalidate: 1,
  }
}

export default ResetPW;