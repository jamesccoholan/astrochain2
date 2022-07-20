import "./FAQs.css";
import { questionContent } from "./faqs-content";

function FAQs() {
  const faqItems = questionContent.map(q => {
    return (
        <div class="faqs-qa-container">
          <b class="faqs-question">{q.question}</b>
          <div class="faqs-answer">{q.answer}</div>
        </div>
    );
  });

  return (
    <div className="faqs-container">
        <section id="faqs-section" />
        <h2 class="faqs-header">FAQs</h2>
        {faqItems}
    </div>
  );
}

export default FAQs;
