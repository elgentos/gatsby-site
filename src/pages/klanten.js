import { graphql } from "gatsby"
import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'
import Client from "../components/Client";

class ClientClass extends React.Component {
    render() {
        const data = this.props.data.allClientsCsv.edges

        return (
            <Layout>
                <Helmet htmlAttributes={{lang: 'nl'}}>
                    <title>Team | elgentos ecommerce solutions</title>
                    <meta name="description" content="Klanten" />
                </Helmet>

                <BannerLanding title="Klanten" type={'small'} content={'Bekijk onze klanten!'} />

                <div id="main" className="alt">
                    <section id="one">
                        <div className="inner">
                            <div className="box alt">
                                <div className="grid-wrapper">
                                    {data.map((row) => (
                                        <Client client={row.node} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default ClientClass

export const ClientQuery = graphql`
  query {
    allClientsCsv {
      edges {
        node {
          id
          name
          website
          ...client
        }
      }
    }
    allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "klanten" } } },
        sort: { fields: [frontmatter___date], order: DESC }
        ) {
      edges {
        node {
          excerpt
          fields {
            slug
            readingTime {
              text
            }
          }
        }
      }
    }
  }
`
