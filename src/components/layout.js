import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      {/* 顶部导航栏：左边是小巧的标志，右边是链接，彻底干掉中间傻大的黑字 */}
      <header className="global-header" style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "2.5rem",
        paddingBottom: "1rem",
        borderBottom: "1px solid #f3f4f6"
      }}>
        {/* 左上角：像 no.lol 一样的小巧文字+图标 */}
        <Link to="/" style={{
          textDecoration: "none",
          color: "#111827",
          fontWeight: "800",
          fontSize: "1.2rem",
          display: "flex",
          alignItems: "center",
          gap: "8px"
        }}>
          <span>🍩</span>
          <span>yupeng.lol</span>
        </Link>

        {/* 右上角：导航链接 */}
        <nav style={{ display: "flex", gap: "1.25rem", fontSize: "0.95rem" }}>
          <Link to="/" style={{ color: "#4B5563", textDecoration: "none", fontWeight: "500" }}>Writing</Link>
          <a href="https://x.com/yupeng_zha14062" target="_blank" rel="noreferrer" style={{ color: "#4B5563", textDecoration: "none", fontWeight: "500" }}>Twitter</a>
        </nav>
      </header>

      {/* 页面正文内容 */}
      <main>{children}</main>

      {/* 极简底部版权 */}
      <footer style={{ marginTop: "4rem", color: "#9CA3AF", fontSize: "0.85rem", borderTop: "1px solid #f3f4f6", paddingTop: "1.5rem" }}>
        © {new Date().getFullYear()} Yupeng · Built with Gatsby & Vercel
      </footer>
    </div>
  )
}

export default Layout
