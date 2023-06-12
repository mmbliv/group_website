import React from "react"
import Layout from "../component/Layout"
import { graphql } from "gatsby"
import { New } from "../component/New"

const News = ({ data }) => {
  const {
    allMarkdownRemark: { nodes: news },
  } = data
  return (
    <Layout>
      <New news={news} showGrid />
    </Layout>
  )
}
export const query = graphql`
  {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content_data/news/.*/" } }
      sort: { fields: frontmatter___date, order: ASC }
    ) {
      nodes {
        frontmatter {
          date
          content
        }
        id
      }
    }
  }
`
export default News
