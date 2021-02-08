import Logo from '../components/Logo'
import Menu from '../components/MenuNavBar'

const Header = () => {
  return(
    <header className="header">
      <Logo/>
      <Menu></Menu>
    </header>

  )
}

export default Header;