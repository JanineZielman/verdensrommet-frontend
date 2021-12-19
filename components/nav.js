import React from "react"
import Link from "next/link"

const Nav = ({ pages }) => {
  return (
    <div>
      <nav className="navbar">
        <ul>
          <li>
            <Link href="/">
              <a>Menu</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Search</a>
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link href="/">
              <a>Log in</a>
            </Link>
          </li>
        </ul>
        {/* <div className="uk-navbar-left">
          <ul className="uk-navbar-nav">
            <li>
              <Link href="/">
                <a>Strapi Blog</a>
              </Link>
            </li>
          </ul>
        </div> */}
        {/* <div className="uk-navbar-right">
          <ul className="uk-navbar-nav">
            {pages.map((page, i) => {
              return (
                <li key={i}>
                  <Link href={`/${page.attributes.slug}`}>
                    <a className="uk-link-reset">{page.attributes.title}</a>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div> */}
      </nav>
    </div>
  )
}

export default Nav
