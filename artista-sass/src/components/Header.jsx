
import PropTypes from 'prop-types'
import '../styles/header.sass'
import beyonceLogo  from '../assets/beyonce_logo.svg'



const Header = ({ loginLabel = "Login", signupLabel = "Sign Up",logoSrc = beyonceLogo,
  logoAlt = "Logo Beyonce" }) => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logoSrc} alt={logoAlt} title={logoSrc} />
      </div>

      <nav className="nav-header">
        <ul>
          <li className="active"><a href="#">Home</a></li>
          <li><a href="#">Sobre a Beyonce</a></li>
          <li><a href="#">SASS+Beyonce?</a></li>
          <li><a href="#">Melhores músicas</a></li>
 
        </ul>
      </nav>

      <div className="btn-header">
        <button className="btn-login">{loginLabel}</button>
        <button className="btn-signup">{signupLabel}</button>
      </div>

      
    </header>
  )
}


Header.defaultProps = {
  loginLabel: "Login",
  signupLabel: "Sign Up",
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  loginLabel: PropTypes.string,
  signupLabel: PropTypes.string,
}



export default Header

