import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import elgentos39 from '../assets/images/splash/elgentos-39.jpg'
import elgentos15 from '../assets/images/splash/elgentos-15.jpg'
import elgentos17 from '../assets/images/splash/elgentos-17.jpg'
import elgentos22 from '../assets/images/splash/elgentos-22.jpg'

const Landing = (props) => (
    <Layout>
        <Helmet>
            <title>Over ons | elgentos ecommerce solutions</title>
            <meta name="description" content="Over ons" />
        </Helmet>

        <BannerLanding title="Over ons" content="Hoge kwaliteit Magento 2 webshops gebouwd door professionals die u kunt vertrouwen. Met local talent bouwen wij voor local heroes!" />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Werkwijze</h2>
                    </header>
                    <p>Wij kunnen voor jou het hele traject van het bouwen van een webshop verzorgen. Wireframing, design, product import, koppelingen met third party systemen, etcetera. Elk proces is anders, maar toch proberen we je hier uit te leggen hoe we over het algemeen te werk gaan.</p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <Link to="/generic" className="image">
                        <img src={elgentos39} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Usability & functional design</h3>
                            </header>
                            <p>De eerste stap is het uitdenken van de globale functionaliteiten en structuur van de webwinkel. In deze stap wordt een fundering gelegd voor het proces.</p>
                            {/*<ul className="actions">*/}
                                {/*<li><Link to="/generic" className="button">Learn more</Link></li>*/}
                            {/*</ul>*/}
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={elgentos15} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Design & templating</h3>
                            </header>
                            <p>Na het leggen van de fundering wordt een design uitgewerkt. Ook worden in deze fase de templates voor Magento gebouwd.</p>
                            {/*<ul className="actions">*/}
                                {/*<li><Link to="/generic" className="button">Learn more</Link></li>*/}
                            {/*</ul>*/}
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={elgentos17} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Imports & koppelingen</h3>
                            </header>
                            <p>Met de vorige stap voltooid worden de producten geïmporteerd. Dit wordt gecombineerd met het leggen van koppelingen met backend systemen. De webwinkel is nu bijna klaar voor gebruik.</p>
                            {/*<ul className="actions">*/}
                                {/*<li><Link to="/generic" className="button">Learn more</Link></li>*/}
                            {/*</ul>*/}
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={elgentos22} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Finetuning & doorontwikkeling</h3>
                            </header>
                            <p>Tijdens finetuning worden de laatste plooien gladgestreken om de webshop te laten functioneren naar de kwaliteitseisen van elgentos. Nu begint het echte werk eigenlijk pas; samen de schouders onder het uitbouwen, doorontwikkelen en groeien van de shop!</p>
                            {/*<ul className="actions">*/}
                                {/*<li><Link to="/generic" className="button">Learn more</Link></li>*/}
                            {/*</ul>*/}
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Landing