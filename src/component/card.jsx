import { Link } from "react-router-dom";
import data from "../data.json";
import Banner from "./banner";

function Card() {
  const urlimg = "https://shorturl.at/YBv6y";
  return (
  <>
    <div className="home">
      <Banner img={urlimg} />
      {/* Grille des cartes */}
      <div className="home__grid">
        {data.map((logement) => (
          <div className="home__card" key={logement.id}>
            <Link to={`/logement/${logement.id}`}>
              <div className="home__card-content">
                {/* Image de couverture */}
                <img
                  src={logement.cover}
                  alt={logement.title}
                  className="home__card-image"
                />
                {/* Titre */}
                <h3 className="home__card-title">{logement.title}</h3>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  </>
  );
}

export default Card;



