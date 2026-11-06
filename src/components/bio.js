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
    <div className="bio" style={{ marginBottom: `var(--spacing-16)` }}>
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/profile-pic.png"
        width={64}
        height={64}
        quality={95}
        alt={author?.name || ``}
        style={{
          marginRight: `var(--spacing-4)`,
          marginBottom: 0,
          minWidth: 64,
          borderRadius: `100%`,
        }}
      />
      <div>
        <h3 style={{ margin: 0, fontSize: `var(--fontSize-3)` }}>
          ⚡ Hello! {author?.name} is a hacker, builder, and researcher.
        </h3>
        <p style={{ marginTop: `var(--spacing-2)`, marginBottom: 0, color: `var(--color-text-light)` }}>
          Hi there! 我是 {author?.name}，也是这个小小站点的站长。
          热衷于大模型 (LLMs)、网络安全攻防对抗、离散数学与开源哲学。
          我在这里记录技术实验与思考。Welcome!
          {social?.twitter && (
            <span>
              {" "}Follow me on{" "}
              <a href={`https://x.com/${social.twitter}`}>Twitter/X</a>.
            </span>
          )}
        </p>
      </div>
    </div>
  )
}

export default Bio
