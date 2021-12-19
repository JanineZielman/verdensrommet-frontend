import Nav from "./nav"

const Layout = ({ children, pages, seo }) => (
  <>
    <Nav pages={pages} />
    {children}
  </>
)

export default Layout
