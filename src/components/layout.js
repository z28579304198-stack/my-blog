import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
    <nav style={{ 
  display: 'flex', 
  gap: '12px', 
  fontSize: 'var(--fontSize-0)', 
  color: 'var(--color-text-light)', 
  marginBottom: 'var(--spacing-8)' 
}}>
  <span style={{ fontWeight: 'bold', color: 'var(--color-heading)' }}>yupeng.lol</span>
  <span>·</span>
  <a href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Writing</a>
  <span>·</span>
  <a href="https://x.com/yupeng_zha14062" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>Twitter</a>
</nav>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
