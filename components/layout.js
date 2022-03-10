import Nav from "./nav"

const Layout = ({ pages, children, seo}) => (
  <section>
    <Nav pages={pages}/>
    {children}
    <style jsx>{`
      section{
        /* padding: 0 24px;
        background: #D5D5D5; */
      }
    `}</style>
  </section>
)

export default Layout
