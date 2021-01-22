import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from "gatsby"

export default () => (
    <StaticQuery
        query={graphql`
          query CipBadgeQuery {
            cip: imageSharp(fixed:{originalName: {eq:"magento-cip-badge.png"}}) {
                sizes {
                  aspectRatio
                  src
                  srcSet
                  srcWebp
                  srcSetWebp
                  sizes
                }
            }
            hypernode: imageSharp(fixed:{originalName: {eq:"hypernode-badge-horizontal.png"}}) {
                sizes {
                  aspectRatio
                  src
                  srcSet
                  srcWebp
                  srcSetWebp
                  sizes
                }
            }
          }
        `}
        render={data => (
            <footer id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="https://twitter.com/elgentos" rel="noreferrer" className="icon alt fab fa-twitter" alt={'Twitter'}
                               title={'Twitter'} target={'_blank'}><span className="label">Twitter</span></a></li>
                        <li><a href="https://github.com/elgentos" rel="noreferrer" className="icon alt fab fa-github" alt={'GitHub'}
                               title={'GitHub'} target={'_blank'}><span className="label">GitHub</span></a></li>
                        <li><a href="https://www.linkedin.com/company/elgentos/" rel="noreferrer" className="icon alt fab fa-linkedin"
                               alt={'LinkedIn'} title={'LinkedIn'} rel="noreferrer" target={'_blank'}><span className="label">LinkedIn</span></a></li>
                        <li>
                            <a href="https://partners.magento.com/portal/details/partner/id/2070/"
                               alt={'Magento Community Insider Partner'}
                               rel="noreferrer"
                               title={'Magento Community Insider Partner'} target={'_blank'}>
                                <Img
                                    sizes={data.cip.sizes}
                                    className={'magento-cip-badge'}
                                />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.byte.nl/partners/"
                               alt={'Hypernode Certified Agency'} rel="noreferrer" title={'Hypernode Certified Agency'} target={'_blank'}>
                                <Img
                                    sizes={data.hypernode.sizes}
                                    className={'hypernode-certified-badge'}
                                />
                            </a>
                        </li>
                    </ul>
                    <ul className="copyright" aria-hidden={true}>
                        <li>&copy; elgentos</li>
                        <li>Built with: <a href="https://gatsbyjs.org" rel="noreferrer" alt="GatsbyJS" title={'GatsbyJS'}>GatsbyJS</a>
                        </li>
                        <li><a href="https://www.foundedingroningen.com/" rel="noreferrer" alt="Founded in Groningen"
                                title={'Founded in Groningen'}>Founded in Groningen</a></li>
                        <li><a rel="noreferrer" href="https://medium.com/@sexandstartups/zebrasfix-c467e55f9d96"
                                alt="we are a zebra"
                                title="we are a zebra">we are a zebra</a></li>
                    </ul>
                </div>
            </footer>
        )}
    />
)
