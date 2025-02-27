import { Link } from "react-router";

const Header = () => {
  return (
    <header>
      <nav className="home__menu">
        <div className="home__logo">
          <img src="./images/logo.png" alt="Logo" />
        </div>

        {/* Menu */}
        <div className="home__links">
          <Link to="/">Accueil</Link>
          <Link to="/faq">À propos</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
