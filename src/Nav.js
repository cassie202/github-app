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
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar