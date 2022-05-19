import RegisterComponent from "../components/registerComponent";
import { fetchAPI } from "../lib/api"
import Layout from "../components/layout"
import TopBar from "../components/topBar"
import { getStrapiMedia } from "../lib/media";
import ReactMarkdown from "react-markdown";

const Register = ({page, pages, homepage, seo}) => {

  return(
    <section className="register">
      <TopBar page={page} homepage={homepage}/>
      <Layout pages={pages} homepage={homepage} seo={seo}>
        {page.content &&
          <>
            <div className="section-bg">
              {/* <video loop={true} autoPlay="autoPlay" controls muted>
                <source src={getStrapiMedia(page.content[0].background)} type="video/mp4"/>
                Your browser does not support the video tag.
              </video> */}
            </div>
		
            <div 
              className="content container"
              id={page.content[0].section_id}
              style=
              {{
                backgroundColor: page.content[0].background ? "transparent" : "#D5D5D5",
                color: page.content[0].background ? "#fff" : "#072FDE"
              }} 
            >
              {page.content.map((section, i) => {
                return (
                  <div className="wrapper">
                    {/* {section.title && 
                      <h2 key={'title'+i}>{section.title}</h2>
                    } */}
                    <ReactMarkdown 
                      key={'text'+i}
                      children={section.text} 
                    />
                  </div>
                )
              })}
              <RegisterComponent />
		        </div>
	        </>
        }
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
  const [pageRes, pagesRes, homepageRes, seoRes] = await Promise.all([
    fetchAPI("/register"),
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

export default Register;