import Nav from "./nav"

const Layout = ({ children, seo }) => (
  <section>
    <Nav/>
    {children}
    <style jsx>{`
      section{
        padding: 0 24px;
      }
    `}</style>
  </section>
)

export default Layout
