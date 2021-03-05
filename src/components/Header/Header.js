import './Header.scss'
import logo from '../../y18.gif'

const Header = ()=> {
  return (
  <header className="main-header">
      <img src={logo} alt="hacker rank logo"/>

      <strong>Hacker News</strong>

      <nav>
          <a href="#">new</a>|
          <a href="#">past</a>|
          <a href="#">comments</a>|
          <a href="#">ask</a>|
          <a href="#">show</a>|
          <a href="#">jobs</a>|
          <a href="#">submit</a>
      </nav>

      <div className="login">
        <a href="#">login</a>
      </div>
  </header>
  )
}

export default Header