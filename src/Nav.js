import  Logo  from "./github.png"
import "./App.css"

const Navbar = () => {
  return (
    <nav className ='nav-bar'>
      <div >
      <img className="github-logo" src= {Logo} alt="Github logo"/>
      </div>
      <div>
        <ul className='nav-item'>
          <li>
            <a href="/" className="Home-btn">Home</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar