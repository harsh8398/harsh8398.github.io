/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

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

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="flex mb-8 text-muted-day dark:text-muted-night">
      <StaticImage
        className="mr-4 mb-0 min-w-50 rounded-[100%]"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/profile-pic.jpg"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      />
      {author?.name && (
        <p className="mb-0">
          Personal blog by{" "}
          <strong>
            <a href={`https://twitter.com/${social?.twitter || ``}`}>
              {author.name}
            </a>
          </strong>
          .
          <br />
          {author?.summary || null}
        </p>
      )}
    </div>
  )
}

export default Bio
