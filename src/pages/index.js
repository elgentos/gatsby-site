import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerHome from '../components/BannerHome'
import FooterCta from '../components/FooterCta'
import ArticleTile from '../components/ArticleTile'
import GoogleMaps from '../components/GoogleMaps'
import { graphql } from 'gatsby'

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="elgentos ecommerce solutions"
                    meta={[
                        { name: 'description', content: 'magento 2 webshops met een hoge kwaliteit door gebouwd door professionals die u kunt vertrouwen.' },
                        { name: 'keywords', content: 'magento, magento 2, laravel, gatsbyjs' },
                        { name: 'viewport', content: 'width=device-width, initial-scale=1.0'}
                    ]}
                    htmlAttributes={{lang: 'nl'}}
                >
                </Helmet>

                <BannerHome title="e-commerce maatwerk oplossingen" content="die we bouwen met Magento 2 backends gecombineerd met Laravel gebaseerde microservices en React componenten" banner={this.props.data.banner}/>

                <div id="main">
                    <section id="one" className="tiles">
                        {/*<ArticleTile title="Klantcases" content="Mooie projecten verdienen aandacht" link="/klantcases" background={elgentos15}  />*/}
                        <ArticleTile title="Team" content="Techneuten met passie voor code" link="/team" background={this.props.data.splash6}  />
                        <ArticleTile title="Cases" content="Een paar projecten in de schijnwerper" link="/cases" background={this.props.data.splash4}  />
                        <ArticleTile title="Klanten" content="Onze fijne klanten" link="/klanten" background={this.props.data.splash22}  />
                        <ArticleTile title="Blog" content="Kennisdeling vinden we leuk!" link="/blog" background={this.props.data.splashWall}  />
                        {/*<ArticleTile title="Magento 2" content="Waarom overstappen loont" link="/magento2" background={this.props.data.splash22}  />*/}
                        {/*<ArticleTile title="Vacatures" content="Wij zoeken versterking!" link="/vacatures" background={this.props.data.splash22}  />*/}
                        <ArticleTile title="Tech stack" content="Onze favoriete tech om jouw doelen mee te behalen" link="/techstack" background={this.props.data.splash15}  />
                        <ArticleTile title="Contact" content="Koffie?" link="#contact" background={this.props.data.splashCoffee}  />
                    </section>
                    <FooterCta title="Magento 2 webshops" content="Wil je een magento webshop beginnen of je bestaande magento webshop optimaliseren? elgentos is gespecialiseerd in het begeleiden van het 'denkproces over de webshops', het ontwerpen-, het ontwikkelen en onderhouden van webshops. Mooie, stabiele en goed converterende webshops bouwen, dat is het uitgangspunt van waaruit wij werken. We zijn in 2010 begonnen met webshops bouwen op Magento en dit is sindsdien onze primaire focus gebleven." link="/magento2" cta="Waarom Magento 2?" />
                </div>

                <GoogleMaps />

            </Layout>
        )
    }
}

export default HomeIndex

export const pageQuery = graphql`
  query SplashImagesQuery {
    banner: imageSharp(fixed:{originalName: {eq:"banner.jpg"}}) {
        sizes {
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
        }
    }
    splash22: imageSharp(fixed:{originalName: {eq:"elgentos-22.jpg"}}) {
        sizes {
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
        }
    }
    splash15: imageSharp(fixed:{originalName: {eq:"elgentos-15.jpg"}}) {
        sizes {
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
        }
    }
    splash4: imageSharp(fixed:{originalName: {eq:"elgentos-4.jpg"}}) {
        sizes {
          base64
          tracedSVG
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
        }
    }
    splashCoffee: imageSharp(fixed:{originalName: {eq:"elgentos-3.jpg"}}) {
        sizes {
          base64
          tracedSVG
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
        }
    }
    splash6: imageSharp(fixed:{originalName: {eq:"elgentos-6.jpg"}}) {
        sizes {
          base64
          tracedSVG
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
        }
    }
    splashWall: imageSharp(fixed:{originalName: {eq:"elgentos-17.jpg"}}) {
        sizes {
          base64
          tracedSVG
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
        }
    }
  }
`
