import React from 'react'

export default function NavBar() {
  return (
        <>
         <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" >
      <img src="" alt=""  />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="mynavbar">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          {/* <Link className="nav-link" to="/home">HOME</Link> */}
        </li>
        <li className="nav-item">
        {/* <Link className="nav-link" to="/about">About</Link> */}
        </li>
        <li className="nav-item">
        {/* <Link class="nav-link" to="/effect"></Link> */}
        </li>
      </ul>
      <div className="d-flex">
        <input className="form-control me-2" type="text" placeholder="Search"/>
        <button className="btn btn-primary" >Search</button>
      </div>
    </div>
  </div>
</nav>
        </>
  )
}
