import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Img from "gatsby-image"

import Layout from '../components/layout'

class CaseTemplate extends React.Component {
    render() {
        const post = this.props.data.markdownRemark
        const siteTitle = get(this.props, 'data.site.siteMetadata.title')
        const siteDescription = post.excerpt

        return (
            <Layout location={this.props.location}>
                <Helmet
                    htmlAttributes={{ lang: 'en' }}
                    meta={[{ name: 'description', content: siteDescription }]}
                    title={`${post.frontmatter.title} | ${siteTitle}`}
                />
                <div id="main" className="alt">
                    <section id="one">
                        <div className="inner">
                            <header className="major">
                                <h1>{post.frontmatter.title}</h1>
                            </header>
                            <div className="box alt">
                                {/*<span className="image main"><Img fluid={post.frontmatter.image.childImageSharp.fluid} alt="" /></span>*/}
                                <div dangerouslySetInnerHTML={{ __html: post.html }} />
                            </div>
                        </div>
                    </section>
                </div>
            </Layout>
        )
    }
}

export default CaseTemplate

export const pageQuery = graphql`
  query CaseBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
