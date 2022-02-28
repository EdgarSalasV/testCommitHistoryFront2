import { FC } from "react";
import Link from "next/link";

const Navbar: FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <i className="bi bi-github"></i>
        <a className="navbar-brand" href="#">
          History Commit (Git Api)
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href={"/front"}>
                <a className="nav-link active" aria-current="page" href="#">
                  Frontend
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href={"/back"}>
                <a className="nav-link" href="#">
                  Backend
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <strong>Account</strong>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
