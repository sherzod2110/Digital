import "../Header/Header.css";

import logo from "../Header/img/logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="py-4 d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <img src={logo} alt="" />
            <p className="header-text ms-3">
              Digital <span className="header-spn">Agency</span>
            </p>
          </div>
          <nav>
            <ul className="header-list list-unstyled d-flex align-items-center m-0">
              <li>
                <a className="header-link text-decoration-none" href="">
                  Ana Sayfa
                </a>
              </li>
              <li>
                <a className="header-link text-decoration-none" href="">
                  Kurumsal
                </a>
              </li>
              <li>
                <a className="header-link text-decoration-none" href="">
                  Neler Yapıyoruz?
                </a>
              </li>
              <li>
                <a className="header-link text-decoration-none" href="">
                  Blog
                </a>
              </li>
            </ul>
          </nav>
          <div className="header-box">
            <select className="border-0 bg-transparent outline-none">
              <option value="Uzb">Uzb</option>
              <option value="Eng">Eng</option>
            </select>
            <button className="header-button">Müşteri Girişi</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
