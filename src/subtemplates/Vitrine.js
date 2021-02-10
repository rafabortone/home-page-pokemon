import React, { Component } from "react";

const products = [
  {
    nome:"Produto 1",
    descricao:"Descrição do produto1",
    image:'http://localhost:3000/images/p1.png',
    features: [
      {
        nome:'Feature 1'
      },
      {
        nome:'Feature 2'
      },
      {
        nome:'Feature 3'
      }
    ],
    url:'#'
  },
  {
    nome:"Produto 2",
    descricao:"Descrição do produto2",
    image:'http://localhost:3000/images/p2.png',
    features: [
      {
        nome:'Feature 1'
      },
      {
        nome:'Feature 2'
      },
      {
        nome:'Feature 3'
      }
    ],
    url:'#'
  },
  {
    nome:"Produto 3",
    descricao:"Descrição do produto3",
    image:'http://localhost:3000/images/p3.png',
    features: [
      {
        nome:'Feature 1'
      },
      {
        nome:'Feature 2'
      },
      {
        nome:'Feature 3'
      }
    ],
    url:'#'
  },
  {
    nome:"Produto 4",
    descricao:"Descrição do produto4",
    image:'http://localhost:3000/images/p4.png',
    features: [
      {
        nome:'Feature 1'
      },
      {
        nome:'Feature 2'
      },
      {
        nome:'Feature 3'
      }
    ],
    url:'#'
  }
]


class Vitrine extends Component {

  render() {
    const listProducts = products

    if(!listProducts) return null

    return(
      <section className="vitrine">
        <div className="container">
          <div className="vitrine__wrapper">
            <div className="vitrine__title">
              <strong>//</strong>
              <h2>Nossas Soluções</h2>
            </div>
            <ul className="vitrine__content">
              {listProducts.map(item => {
                return (
                <li className="vitrine__content--item">
                  <article>
                    <img src={item.image} className="home__vitrine--item--image"></img>
                    <p className="vitrine__content--item--nome">{item.nome}</p>
                    <p className="vitrine__content--item--descricao">{item.descricao}</p>
                    <ul className="vitrine__content--item--list">
                      {item.features.map(feature => {
                        return(
                          <li className="vitrine__content--item--feature">{feature.nome}</li>
                        )
                      })}
                    </ul>
                    <a href={item.url}>Ver Solução</a>
                  </article>
                </li>
                )
              })}
            </ul>
          </div>
        </div>
      </section>
    )
  }
}
export default Vitrine;