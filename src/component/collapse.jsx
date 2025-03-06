import PropTypes from "prop-types";
import { useState } from "react";
import "../styles/collapse.scss"; // Import du CSS

const Collapse = ({ id2, question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Fonction qui gère l'affichage
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq__question">
      {/* Question cliquable */}
      <div className="faq__question-header" onClick={handleClick}>
        <h3 className="faq__question-title">{question}</h3>
        {/* Petite flèche qui tourne */}
        <span className={`faq__arrow ${isOpen ? "up" : "down"}`}>▼</span>
      </div>

      {/* Réponse affichée seulement si isOpen est vrai */}
      <div id={`answer-${id2}`} className="faq__answer" style={{ display: isOpen ? "block" : "none" }}>
        <p>{answer}</p>
      </div>
    </div>
  );
};

// Vérification des props
Collapse.propTypes = {
  id2: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};

export default Collapse;
