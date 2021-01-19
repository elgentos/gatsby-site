import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import dutchlabelshop from "../assets/images/cases/dutch-label-shop/custom-labels.jpg";

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
                                <span className="image main"><img src={dutchlabelshop} alt="" /></span>
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
      }
    }
  }
`
