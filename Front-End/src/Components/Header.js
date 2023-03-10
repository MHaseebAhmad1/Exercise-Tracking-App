import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "black" }}>
        <Link to="/"><img src="/pics/C1.PNG" alt="logo" /></Link>
        <h4 className="navbar-brand ml-3">Exercise Tracking App</h4>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link active" to="/">Home</Link>
            <Link className="nav-item nav-link" to="/Add">Add Activities</Link>
            <Link className="nav-item nav-link" to="/Show">Show Activities</Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header