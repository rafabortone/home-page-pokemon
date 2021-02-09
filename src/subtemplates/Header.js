import Logo from '../components/Logo'
import Menu from '../components/MenuNavBar'
import cartIcon from '../icons/cart.svg'
import Search from '../components/Search/Search'
const Header = () => {
  return(
    <div className="container">
      <header className="header">
        <Logo/>
        <Menu></Menu>
        <Search/>
        <span>Login</span>
        <img src={cartIcon} />
      </header>
    </div>

  )
}

export default Header;