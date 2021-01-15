import React from 'react'
import Helmet from 'react-helmet'
import { Link,graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'

class ClientCaseTemplate extends React.Component {
    render() {

        <h1>OK</h1>
    }
}

export default ClientCaseTemplate

export const pageQuery = graphql`
  query ClientCaseBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      fields {
        readingTime {
          text
        }
      }
      frontmatter {
        title
        date(formatString: "D MMMM YYYY", locale: "nl")
      }
    }
  }
`
