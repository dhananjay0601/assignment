import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <header className="col-12 p-0">
        <nav className="navbar navbar-expand-lg bg-light px-2">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              Students
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    end
                    className={({ isActive }) =>
                      isActive ? 'n-active nav-link' : 'nav-link'
                    }
                    aria-current="page"
                    to="/user/add"
                  >
                    <i className="fa fa-plus-circle" aria-hidden="true"></i> Add
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    end
                    className={({ isActive }) =>
                      isActive ? 'n-active nav-link' : 'nav-link'
                    }
                    to="/user"
                  >
                    <i className="fa fa-list" aria-hidden="true"></i> List
                  </NavLink>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <button className="btn btn-outline-danger btn-sm">
                  <i className="fa fa-sign-out" aria-hidden="true"></i> Logout
                </button>
              </form>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
