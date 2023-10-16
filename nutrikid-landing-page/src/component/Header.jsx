function Header() {
    return(
        <header className="navigation bar">
        <nav className="navbar fixed-top navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><img src="src\assets\images\logo-nutrikid-vertical.png" alt="logo"/></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse  justify-content-between" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">Program</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Konsultasi</a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#">Artikel</a>
              </li>
            </ul>
            <form className="form-inline">
              <a className="btn btn-md" id="navbutton" role="button" aria-pressed="true">Login</a>
            </form>
          </div>
        </div>
      </nav>
      </header>
    );
}

export default Header