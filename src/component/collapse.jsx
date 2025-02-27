import PropTypes from "prop-types";

const Collapse = ({ id2, question, answer}) => {
     // Gérer l'affichage des réponses avec du JavaScript simple
    const handleAnswerClick = (id2) => {
        const answer = document.getElementById(`answer-${id2}`);
        if (answer.style.display === "none") {
        answer.style.display = "block";  // Afficher la réponse
        } else {
        answer.style.display = "none";   // Masquer la réponse
        }
    };
    return (
        <div className="faq__question">
            <div
              className="faq__question-header"
              onClick={() => handleAnswerClick(id2)} // Gère le clic pour afficher/masquer la réponse
            >
              <h3 className="faq__question-title">{question}</h3>
            </div>
            {/* La réponse est cachée par défaut */}
            <div id={`answer-${id2}`} className="faq__answer">
              <p>{answer}</p>
            </div>
        </div>
    )
  };

// 📌 Définition des PropTypes pour éviter l'erreur
Collapse.propTypes = {
  id2: PropTypes.number.isRequired,
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};
  
export default Collapse;



        