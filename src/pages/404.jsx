import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1 className="not-found__title">404</h1>
      <p className="not-found__message">Page non trouvée</p>
      <Link to="/" className="not-found__link">
        Retour à l&apos;accueil
      </Link>
    </div>
  );
};

export default NotFound;
