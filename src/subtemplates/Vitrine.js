import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
 class Vitrine extends Component {

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
    this.setState({list: this.state.list.concat(data)});
  }

  componentDidMount() {
    this.fetchApi();
  }
  
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      infinite:false,
      slidesToShow: 4,
      slidesToScroll: 2
    };

    const list = this.state.list
    console.log(list);
    return(
      
      <section className="vitrine">
      
        <div className="container">
          <div className="vitrine__wrapper">
            <div className="vitrine__title">
              <strong>//</strong>
              <h2>Nossas Soluções</h2>
            </div>
              <ul className="vitrine__content">
                <Slider {...settings}>
                  {list.map(item => {
                    return (
                    <li className="vitrine__content--item">
                      <article>
                        <img src={item.sprites.front_default} className="home__vitrine--item--image"></img>
                        <p className="vitrine__content--item--nome">{item.name}</p>
                        <p className="vitrine__content--item--descricao">
                          {item.types.map(item => {
                              return(
                                <span>{item.type.name+" "}</span>
                              )
                          })}
                        </p>
                        <ul className="vitrine__content--item--list">
                          {item.abilities.map(item => {
                              return(
                                <li className="vitrine__content--item--feature">{item.ability.name}</li>
                              )
                            })}
                        </ul>
                      <a href="">Ver Solução</a>
                      </article>
                    </li>
                    )
                  })}
                </Slider>
              </ul>
            
          </div>
        </div>
      </section>
    )
  }
}

export default Vitrine;