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
      {/* 左侧：大标题 + 纯矢量图标 + 自我介绍 */}
      <div style={{ flex: `1 1 340px`, minWidth: `280px` }}>
        <h1 style={{
          fontSize: `2.2rem`,
          fontWeight: `800`,
          lineHeight: `1.25`,
          color: `#1E80FF`,
          marginBottom: `1rem`,
          marginTop: 0
        }}>
          ⚡ Hello! {author?.name} is a hacker, builder, and researcher ✨
        </h1>

        {/* 原版同款：纯黑白 SVG 矢量小图标 */}
        <div style={{ display: `flex`, alignItems: `center`, gap: `16px`, marginBottom: `1.25rem` }}>
          <a href="https://github.com/z28579304198-stack" target="_blank" rel="noreferrer" aria-label="GitHub" style={{ color: `#4B5563`, display: `flex` }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>
          <a href={`https://x.com/${social?.twitter || 'yupeng_zha14062'}`} target="_blank" rel="noreferrer" aria-label="Twitter" style={{ color: `#4B5563`, display: `flex` }}>
            <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
        </div>

        {/* 详细自我介绍正文 */}
        <p style={{
          fontSize: `1rem`,
          lineHeight: `1.7`,
          color: `#374151`,
          margin: 0
        }}>
          Hi there! 我是 {author?.name}，也是这个小小站点的站长。热衷于大模型 (LLMs) 与 Agent 架构、网络安全攻防对抗、离散数学与开源哲学。这里是我记录技术实验、系统重构与理想主义的自留地。Welcome!
        </p>
      </div>

      {/* 右侧：修复正圆对齐的青蓝色边框 + 相机小角标 */}
      <div style={{
        position: `relative`,
        width: `202px`,
        height: `202px`,
        borderRadius: `50%`,
        padding: `6px`,
        background: `linear-gradient(135deg, #38BDF8, #1E80FF)`,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
        boxSizing: `border-box`
      }}>
        <StaticImage
          layout="fixed"
          formats={["auto", "webp", "avif"]}
          src="../images/profile-pic.png"
          width={190}
          height={190}
          quality={95}
          alt={author?.name || ``}
          style={{
            borderRadius: `50%`,
            margin: 0,
            display: `block`
          }}
        />
        {/* 左下角原版同款相机小徽章 */}
        <div style={{
          position: `absolute`,
          bottom: `10px`,
          left: `10px`,
          background: `#111827`,
          color: `#fff`,
          width: `28px`,
          height: `28px`,
          borderRadius: `50%`,
          display: `flex`,
          alignItems: `center`,
          justifyContent: `center`,
          fontSize: `13px`,
          border: `2px solid #fff`,
          boxShadow: `0 2px 4px rgba(0,0,0,0.2)`
        }}>
          📷
        </div>
      </div>
    </div>
  )
}

export default Bio
