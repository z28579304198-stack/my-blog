import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div style={{
      display: `flex`,
      flexWrap: `wrap`,
      alignItems: `center`,
      justifyContent: `space-between`,
      gap: `2rem`,
      marginTop: `1rem`,
      marginBottom: `3.5rem`
    }}>
      {/* 左侧：文字与社交链接 */}
      <div style={{ flex: `1 1 340px`, minWidth: `280px` }}>
        <h1 style={{
          fontSize: `2.2rem`,
          fontWeight: `800`,
          lineHeight: `1.2`,
          color: `#1E80FF`, /* 你的官方品牌蓝！也可以用深蓝渐变 */
          marginBottom: `1rem`,
          marginTop: 0
        }}>
          ⚡ Hello! {author?.name} is a hacker, builder, and researcher.
        </h1>

        {/* 社交小标签行 */}
        <div style={{ display: `flex`, gap: `12px`, marginBottom: `1.2rem`, fontSize: `0.9rem` }}>
          <a href={`https://x.com/${social?.twitter}`} target="_blank" rel="noreferrer" style={{ color: `#666`, textDecoration: `none`, fontWeight: `bold` }}>𝕏 Twitter</a>
          <span style={{ color: `#ccc` }}>/</span>
          <a href="https://github.com/z28579304198-stack" target="_blank" rel="noreferrer" style={{ color: `#666`, textDecoration: `none`, fontWeight: `bold` }}>GitHub</a>
        </div>

        {/* 详细自我介绍正文 */}
        <p style={{
          fontSize: `1rem`,
          lineHeight: `1.65`,
          color: `#374151`,
          margin: 0
        }}>
          Hi there! 我是 {author?.name}，也是这个小小站点的站长。热衷于大模型 (LLMs) 与 Agent 架构、网络安全攻防对抗、离散数学与开源哲学。这里是我记录技术实验、系统重构与理想主义的自留地。Welcome!
        </p>
      </div>

      {/* 右侧：高质感大圆头像（带品牌蓝光圈） */}
      <div style={{
        flexShrink: 0,
        borderRadius: `50%`,
        padding: `6px`,
        background: `linear-gradient(135deg, #1E80FF, #00D2FF)`, /* 极具科技感的蓝青色渐变光环 */
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
        boxShadow: `0 10px 25px -5px rgba(30, 128, 255, 0.3)`
      }}>
        <StaticImage
          className="bio-avatar"
          layout="fixed"
          formats={["auto", "webp", "avif"]}
          src="../images/profile-pic.png"
          width={180}
          height={180}
          quality={95}
          alt={author?.name || ``}
          style={{
            borderRadius: `50%`,
            display: `block`
          }}
        />
      </div>
    </div>
  )
}

export default Bio
