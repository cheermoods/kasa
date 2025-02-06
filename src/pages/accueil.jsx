import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      {/* Bannière */}
      <div className="home__banner">
        <h1>Chez vous et partout ailleurs</h1>
      </div>

      {/* Section des cartes */}
      <div className="home__grid">
        <div className="home__card">
          <Link to="/logement/0">Titre de la location</Link>
        </div>
        <div className="home__card">
          <Link to="/logement/1">Titre de la location</Link>
        </div>
        <div className="home__card">
          <Link to="/logement/2">Titre de la location</Link>
        </div>
        <div className="home__card">
          <Link to="/logement/3">Titre de la location</Link>
        </div>
        <div className="home__card">
          <Link to="/logement/4">Titre de la location</Link>
        </div>
        <div className="home__card">
          <Link to="/logement/5">Titre de la location</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;


