import { useState } from 'react';
import { CaretDown } from '@phosphor-icons/react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`faq-item ${isOpen ? 'active' : ''}`}>
      <button className="faq-question" onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen}>
        {question}
        <CaretDown className="faq-icon" size={20} weight="light" />
      </button>
      <div className="faq-answer">
        <p>{answer}</p>
      </div>
    </div>
  );
};

const FAQS = [
  {
    question: 'Do I own the content?',
    answer:
      'Yes, 100%. All finalised assets, raw footage, scripts, and source files transfer to you on delivery. Full credit, full ownership. Always.',
  },
  {
    question: "What's the turnaround time?",
    answer:
      'First drafts are typically delivered within 48–72 hours. For video edits, a standard 10–15 min video takes 3–5 business days. Rush delivery is available on request.',
  },
  {
    question: 'How does the feedback process work?',
    answer:
      'We use Frame.io for video feedback and Google Docs for written content. You leave timestamped comments without scheduling a call. Every package includes at least one round of revisions.',
  },
  {
    question: 'Do you work with international clients?',
    answer:
      'Yes. Our team works async across IST, EST, GMT, and GST. Timezone is not a bottleneck. We operate on outcomes, not office hours.',
  },
  {
    question: "What's the minimum commitment?",
    answer:
      'The Launch Package is a one-time project. The Ongoing Studio runs monthly. Cancel anytime with 30 days notice. No lock-in contracts.',
  },
  {
    question: 'How many revisions are included?',
    answer:
      'Launch Package includes 2 rounds of revisions per deliverable. Ongoing Studio includes unlimited minor revisions and 3 rounds for full reworks. Additional revision rounds can be added at cost.',
  },
  {
    question: 'Do you use AI to write the content?',
    answer:
      'No. Every script, post, and caption is written by a human editor who studies your voice before writing a single word. That is the whole point.',
  },
  {
    question: 'What information do you need to get started?',
    answer:
      'A 30-minute discovery call, access to existing content or brand references, and a brief on your goals. We send an onboarding questionnaire after the contract is signed. Most clients are producing content within the first week.',
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="section fade-in-on-scroll">
      <div className="section-header">
        <div className="section-label">FAQ</div>
        <h2 className="section-title">Common questions</h2>
      </div>

      <div className="faq-list">
        {FAQS.map((item) => (
          <FAQItem key={item.question} question={item.question} answer={item.answer} />
        ))}
      </div>
    </section>
  );
}
