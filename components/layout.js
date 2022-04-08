import Nav from "./nav"

const Layout = ({ pages, homepage, children, seo}) => {
  return(
    <section>
      <Nav pages={pages} homepage={homepage}/>
      {children}
    </section>
  )
}

export default Layout
