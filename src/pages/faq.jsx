import faqData from '../faq.json';
import Banner from '../component/banner';
import Collapse from '../component/collapse';

const urlimg = "https://shorturl.at/YBv6y";
const Faq = () => {
  return (
    <div className="faq">
      <Banner img={urlimg} />

      {/* Liste des questions et réponses */}
      <div className="faq__questions">
        {faqData.map(({ id, question, answer }) => (
          <Collapse  id2={id} question={"!" + question} answer={answer} key={id} />
        ))}
      </div>
    </div>
  );
};

export default Faq;
