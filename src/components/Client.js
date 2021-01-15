import React from 'react';
import { graphql } from "gatsby"
import Img from "gatsby-image";

class Client extends React.Component {
    render() {
        const data = this.props.client

        return (
            <div className="col-3 teammember">
                <span className="image fit teammember">
                    <Img fluid={data.image.childImageSharp.fluid} />
                </span>
                <span>
                    {data.website && data.website.length > 0 &&
                        <a href={data.website} target="_blank" class="icon" rel="noopener noreferrer">
                            {data.name}
                        </a>
                    }
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
