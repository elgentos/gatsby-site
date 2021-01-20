import React from 'react';
import { graphql } from "gatsby"
import Img from "gatsby-image";

class Client extends React.Component {
    render() {
        const data = this.props.client

        return (
            <div className="col-3 client">
                <span className="clients">
                    <Img fluid={data.image.childImageSharp.fluid} />
                </span>
            </div>
        );
    }
}

export default Client;

export const ClientFragment = graphql`
   fragment client on ClientsCsv {
        image {
            childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`;
