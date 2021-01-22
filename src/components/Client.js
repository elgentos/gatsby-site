import React from 'react';
import { graphql } from "gatsby"
import Img from "gatsby-image"

class Client extends React.Component {
    render() {
        const data = this.props.client

        return (
            <div className="col-3 teammember">
                <span className="image fit teammember">
                    <Img className="client-image" fluid={data.image.childImageSharp.fluid} />
                </span>
                <span>{data.name}</span>
            </div>
        );
    }
};

export default Client;

export const ClientFragment = graphql`
   fragment client on ClientsCsv {
        image {
            childImageSharp {
                fluid(maxWidth: 150) {
                  ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`;
