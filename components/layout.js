import Nav from "./nav"

const Layout = ({ children, seo }) => (
  <>
    <Nav/>
    {children}
  </>
)

export default Layout
