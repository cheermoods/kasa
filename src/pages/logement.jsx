import { useParams } from "react-router-dom"; // Récupérer l'ID depuis l'URL
import { useState } from "react"; // Gérer l'image affichée dans le carrousel
import data from "../data.json"; // Importer les données des logements
import Collapse from "../component/collapse"; // Importer le composant Collapse

const Logement = () => {
  // Récupérer l'ID du logement dans l'URL
  const { id } = useParams();

  // Trouver le logement correspondant dans data.json
  const logement = data.find((item) => item.id === id);

  // État pour suivre l'index de l'image affichée
  const [index, setIndex] = useState(0);

  // Si le logement n'est pas trouvé, afficher un message d'erreur
  if (!logement) {
    return <h1>Logement non trouvé</h1>;
  }

  // Nombre total d'images
  const totalImages = logement.pictures.length;

  // Fonction pour afficher l'image suivante
  function nextImage() {
    setIndex(index + 1);
    if (index + 1 >= totalImages) {
      setIndex(0); // Revenir à la première image si on atteint la fin
    }
  }

  // Fonction pour afficher l'image précédente
  function prevImage() {
    setIndex(index - 1);
    if (index - 1 < 0) {
      setIndex(totalImages - 1); // Aller à la dernière image si on est au début
    }
  }

  return (
    <div className="logement">
      {/* Carrousel d'images */}
      <div className="logement__carousel">
        <img
          src={logement.pictures[index]}
          alt={logement.title}
          className="logement__carousel-image"
        />
        {/* Afficher les boutons seulement s'il y a plusieurs images */}
        {totalImages > 1 && (
          <>
            <button className="logement__carousel-prev" onClick={prevImage}>‹</button>
            <button className="logement__carousel-next" onClick={nextImage}>›</button>
            <div className="logement__carousel-count">
              {index + 1} / {totalImages}
            </div>
          </>
        )}
      </div>

      {/* Informations principales */}
      <div className="logement__info">
        <div>
          <h1 className="logement__title">{logement.title}</h1>
          <p className="logement__location">{logement.location}</p>
        </div>
        <div className="logement__host">
          <p className="logement__host-name">{logement.host.name}</p>
          <img
            src={logement.host.picture}
            alt={logement.host.name}
            className="logement__host-image"
          />
        </div>
      </div>

      {/* Tags et notation */}
      <div className="logement__tags-rating">
        <div className="logement__tags">
          {logement.tags.map((tag, i) => (
            <span key={i} className="logement__tag">{tag}</span>
          ))}
        </div>
        <div className="logement__rating">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className={i < logement.rating ? "star filled" : "star"}>★</span>
          ))}
        </div>
      </div>

      {/* Description et équipements */}
      <div className="logement__collapses">
        <Collapse id="desc" question="Description" answer={logement.description} />
        <Collapse id="equip" question="Équipements" answer={logement.equipments.join(", ")} />
      </div>
    </div>
  );
};

export default Logement;
