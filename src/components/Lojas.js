import brastemp from '../images/logo-brastemp.png'
import compraCerta from '../images/logo-compra-certa.png'
import consul from '../images/logo-consul.png'
import thebar from '../images/logo-thebar.png'
function Lojas() {
  return (
    <div className="lojas">
      <p className="lojas__title">Nossas principais lojas VTEX <span>→</span></p>
      <ul className="lojas__list">
        <li className="lojas__list--item">
        <img src={brastemp} />
        </li>
        <li className="lojas__list--item">
        <img src={compraCerta} />
        </li>
        <li className="lojas__list--item">
        <img src={consul} />
        </li>
        <li className="lojas__list--item">
        <img src={thebar} />
        </li>
      </ul>
    </div>
  )
}
export default  Lojas;