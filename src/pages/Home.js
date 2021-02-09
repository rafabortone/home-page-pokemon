import NewsLetter from '../components/NewsLetter'
import bannerAbout from '../images/image-jussi.png'
function Home() {
  return(
    <div className="home">
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

export default Home;