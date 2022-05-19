import Nav from "./nav"
import Seo from "../components/seo"

const Layout = ({ pages, homepage, children, seo}) => {
  return(
    <>
      <Seo seo={seo}/>
      <section>
        <Nav pages={pages} homepage={homepage}/>
        {children}
      </section>
    </>
  )
}

export default Layout
