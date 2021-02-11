import { Component } from 'react';
import NewsLetter from '../components/NewsLetter'
import bannerAbout from '../images/image-jussi.png'
import Vitrine from '../subtemplates/Vitrine'
import banner from '../images/image-banner-home.png'
import Lojas from '../components/Lojas'
class Home extends Component {

  state = {
    list: []
  }

  async fetchApi() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
    const data = await response.json();  
    data.results.map(async item => {
      this.getPokemon(item.url);
    })
  }

  async getPokemon(url) {
    const response = await fetch(url);
    const data = await response.json();
    if(!data) return null
    this.setState({list: this.state.list.concat(data)});
  }

  componentDidMount() {
    this.fetchApi();
  }

  render () {
    return(
      <div className="home">
        <section className="home__banner">
          <div className="container">
            <div className="home__banner--wrapper">
              <div className="home__banner--left">
                <div className="home__banner--title"><span>//</span><h1>Criamos lojas que vendem mais.</h1></div>
                <div className="home__banner--text">A Jüssi é especialista na criação de lojas usando a plataforma VTEX. Precisa criar sua loja ou migrar de plataforma?</div>
                <div className="home__banner--button" >
                  <a href="#solucoes">Veja nossas soluções</a>
                </div>
              </div>
              <div className="home__banner--right">
                <img className="home__banner--img" src={banner} alt="img"/>
              </div>
            </div>
          </div>
        </section>
        <section className="home__lojas">
          <Lojas></Lojas>
        </section>
        <Vitrine
          list = {this.state.list}
        ></Vitrine>
        <section className="home__about">
          <div className="home__about--left"></div>
          <div className="home__about--right"></div>
          <div className="container">  
            <div className="home__about--wrapper">
              <div className="home__about--text">
                <h3>
                  Olá, somos a Jüssi
                </h3>
                <p>
                  A Jüssi é uma agência integrante do grupo global WPP que vem há 10 anos consolidando o pensamento voltado para produtos e resolução de problemas. Nosso área dedicada exclusivamente para Produtos Digitais é organizada em 6 especialidades: Product Managamenet, User Experience Design, SEO, Tecnologia, Agile e User Behavior Analytics.
                </p>
                <a href="">
                  Conheça a Jüssi
                </a>
              </div>
              <div className="home__about--banner">
                <img src={bannerAbout}></img>
              </div>
            </div>
          </div>
        </section>
        <section className="home__contato">
          <div className="container">
            <h2>Essa loja foi construída usando uma das nossas soluções da plataforma VTEX. tenha a sua.</h2>
            <span>entre em contato</span>
            <p>comercial@jussi.com.br</p>
          </div>
        </section>
        <NewsLetter/>
      </div>
    )
  }
}

export default Home;