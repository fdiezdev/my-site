import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Home.css';

import mainIcon from './img/more-clients.svg';
import altIcon from './img/online-prescense.svg';
import thirdIcon from './img/way-sm.svg';

import fourthIcon from './img/profesionals.svg';
import fifthIcon from './img/small-business.svg';
import sixthIcon from './img/big-business.svg';

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <div className="jumbotron-fluid banner text-center">
          <div className="container py-5">
            <h1>Páginas web profesionales</h1>
            <div className="w-8"><hr/></div>
            <p>hacé crecer tu negocio dando a conocer tus productos o servicios de una forma diferente</p>
            <a href="/servicios" className="btn btn-lg btn-outline-light">Ver más</a>
          </div>
        </div>
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-10 col-md-12 col-sm-12">
              <h2>¿Por qué tener una página?</h2>
              <div className="p-2"></div>
              <p>Para cada negocio o empresa, ya sea multinacional o un simple negocio regional, es importante establecer una vía
              de comunicación con los futuros clientes. Actualmente existen redes sociales que funcionan perfectamente como una de estas vías de comunicación pero, ¿de verdad querés dar a conocer tu negocio a través de una mediocre página de Facebook?</p>
            <div className="p-3"></div>
              <div className="row">
                <div className="col-lg-4 col-md-12 col-sm-12 mb-5">
                  <center><img src={mainIcon} alt="" className="whyIcons"/></center>
                  <div className="text-center mt-2">
                    <h2>Más Clientes</h2>
                    <p>muchos más clientes verán tu empresa en internet, les será mucho mas fácil encontrarte y ver tus productos o servicios.</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 mb-5">
                  <center><img src={altIcon} alt="" className="whyIcons"/></center>
                    <div className="text-center mt-2">
                      <h2>Presencia Online</h2>
                      <p>tu imagen corporativa y tu página web son la cara visible de tu marca. Por eso tienen que ser actuales, potentes y presentes en internet.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 mb-5">
                  <center><img src={thirdIcon} alt="" className="whyIcons"/></center>
                    <div className="text-center mt-2">
                      <h2>Otra forma de Conectar</h2>
                      <p>seguramente tu empresa tiene una página de Instagram o Facebook, pero esa no es una forma potente de tener presencia online.</p>
                    </div>
                </div>
            </div>
            <div className="mt-5 d-banner" id="servicios">
              <div className="d-banner-data">
                <h2>¿Quiénes deberían tener una página?</h2>
                <p>Las páginas web <b>no son solo para marcas multinacionales</b>.</p>
                <div className="p-3"></div>
                <div className="row">
                  <div className="col-lg-4 col-md-12 col-sm-12 mb-5">
                    <center><img src={fourthIcon} alt="" className="whyIcons"/></center>
                    <div className="text-center mt-2">
                      <h2>Profesionales</h2>
                      <p>es importante tener una presencia online y una marca personal para profesionales, un portfolio o CV online pueden ser determinantes para tu próximo trabajo.</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-12 col-sm-12 mb-5">
                    <center><img src={fifthIcon} alt="" className="whyIcons"/></center>
                      <div className="text-center mt-2">
                        <h2>Negocios</h2>
                        <p>por más que no sea una multinacional, tu negocio necesita una página para estar presente en el siglo XXI, ampliá las posibilidades de tu negocio a un bajo precio.</p>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-12 col-sm-12 mb-5">
                    <center><img src={sixthIcon} alt="" className="whyIcons"/></center>
                      <div className="text-center mt-2">
                        <h2>Empresas</h2>
                        <p>si tenés una empresa mediana o grande y no tenés una página, no llevaste tus posibilidades al máximo. Dar a conocer tu marca al mundo es importante.</p>
                      </div>
                  </div>
                </div>
              </div>
            </div>
            <hr/>
            <h2 id="contacto">No dudes en contactarme</h2>
            <p>Ante cualquier duda o para concretar un negocio no dudes en contactarme y me pondré en contacto lo antes posible.</p>
            <a href="mailto:frandiezdev@gmail.com" className="btn btn-outline-warning btn-lg"><i className="far fa-envelope"></i> Contactar</a>
            <br/>
            <br/>
            <a href="https://twitter.com/fdiez_?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-show-screen-name="false" data-lang="es" data-show-count="false">Follow @fdiez_</a><span>&nbsp;</span><script type="IN/Share" data-url="https://www.linkedin.com/in/francisco-diez-43967b175/"></script><span>&nbsp;</span>
            <a class="github-button" href="https://github.com/fdiezdev" aria-label="Follow @fdiezdev on GitHub">Follow @fdiezdev</a>
            </div>
            <div className="col-lg-2 col-md-12 col-sm-12">
            public
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Home;
