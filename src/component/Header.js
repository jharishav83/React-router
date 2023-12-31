import React from 'react'
import { NavLink } from 'react-router-dom'
// import Content from './Content'



const Header = () => {
  return (
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="#">My-App</a>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link active" aria-current="page" >Home</NavLink>
              </li>
              <li className="nav-item">
              <NavLink to="/about" className="nav-link active" aria-current="page" >About</NavLink>
      
              </li>
              <li className="nav-item">
              <NavLink to="/contact" className="nav-link active" aria-current="page" >Contact</NavLink>
      
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      
      
     
      </>
  )
}

export default Header
