import React from 'react'
// import link from 'react-router-dom'

 export default function Navbar(props){
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active"  href="/">Home</a>
        </li>
        <li className="nav-item">
          <link className="nav-link" href="/About.js">{props.aboutText}</link>
        </li>
       
        <li className="nav-item">
          <a className="nav-link disabled" href="/">Disabled</a>
        </li>
      </ul>
      {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      {/* <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick= {props.toggleMode}/>
  <label className="form-check-label" htmlfor="flexSwitchCheckDefault">{props.mode ==='dark' ?  'Enable Light Mode':  'Enable Dark Mode'}</label>
</div> */}
 {/* <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick= {props.toggleMode}/>
  <label className="form-check-label" for="flexSwitchCheckDefault">{props.mode ==='dark' ?  'Enable Light Mode':  'Enable Green Mode'}</label>
</div>
 <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick= {props.toggleMode}/>
  <label className="form-check-label" for="flexSwitchCheckDefault">{props.mode ==='dark' ?  'Enable Light Mode':  'Enable Dark Mode'}</label>
</div>
 <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick= {props.toggleMode}/>
  <label className="form-check-label" for="flexSwitchCheckDefault">{props.mode ==='dark' ?  'Enable Light Mode':  'Enable Dark Mode'}</label>
</div> */}
    </div>
  </div>
</nav>
    );
    
}

// Navbar.propTypes  = {
//   title: PropTypes.string,
//   aboutText: PropTypes.string
// }
Navbar.defaultProps = {
title: 'Set title here',
aboutText: 'set abouttext here'
}

