import { graphql, Link } from "gatsby"
import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import get from 'lodash/get'
import BannerLanding from "../components/BannerLanding";
import dutchlabelshop from "../assets/images/cases/dutch-label-shop/custom-labels.jpg";

class CasesIndex extends React.Component {
    render() {
        const siteTitle = get(this, 'props.data.site.siteMetadata.title')
        const siteDescription = get(
            this,
            'props.data.site.siteMetadata.description'
        )
        const cases = get(this, 'props.data.allMarkdownRemark.edges')

        return (
            <Layout location={this.props.location}>
                <Helmet
                    htmlAttributes={{ lang: 'nl' }}
                    meta={[{ name: 'description', content: siteDescription }]}
                    title={siteTitle}
                />
                <BannerLanding title="Cases" content="" type={'small'} />

                <div id="main" className="alt cases">
                    <section id="one">
                        <div className="inner">
                            <div className="box alt">
                                <div className="grid-wrapper">
                                    {cases.map(({ node }) => {
                                        const title = get(node, 'frontmatter.title') || node.fields.slug
                                        return (
                                            <div key={node.fields.slug} className="col-6 case">
                                                <h3>
                                                    <Link style={{ boxShadow: 'none' }} to={node.frontmatter.permalink}>
                                                        {title}
                                                        <span className="image case-tile"><img src={dutchlabelshop} alt="" /></span>
                                                    </Link>
                                                </h3>

                                                <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                                                <Link style={{ boxShadow: 'none' }} to={node.frontmatter.permalink}>
                                                    Lees de case ➔
                                                </Link>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </Layout>
        )
    }
}

export default CasesIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "case" } } },
        sort: { fields: [frontmatter___date], order: DESC }
        ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            permalink
          }
        }
      }
    }
  }
`
