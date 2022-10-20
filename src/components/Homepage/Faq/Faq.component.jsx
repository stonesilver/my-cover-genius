import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import './Faq.styles.scss';

const options = [
  {
    question: 'Are you an insurance company?',
    answer:
      "Mycovergenius is Africa's first and leading insurtech platform. We are focused on expanding insurance adoption in Africa by creating unique and relevant products for anyone.",
  },
  {
    question: 'How long before my plan becomes active?',
    answer:
      "Mycovergenius is Africa's first and leading insurtech platform. We are focused on expanding insurance adoption in Africa by creating unique and relevant products for anyone.",
  },
  {
    question: 'How do I get covered?',
    answer:
      "Mycovergenius is Africa's first and leading insurtech platform. We are focused on expanding insurance adoption in Africa by creating unique and relevant products for anyone.",
  },
  {
    question: 'Can I get a unique plan for my business?',
    answer:
      "Mycovergenius is Africa's first and leading insurtech platform. We are focused on expanding insurance adoption in Africa by creating unique and relevant products for anyone.",
  },
];

const Faq = () => {
  const [active, setActive] = useState('Are you an insurance company?');

  const toggleAnswer = (answer) => {
    setActive((prevS) => (answer === prevS ? '' : answer));
  };

  return (
    <div className='faq'>
      <div className='faq-left'>
        <p className='faq-left-title'>What would you like to know?</p>
        <div className='faq-left-btns'>
          <Button variant='primary-green' className='text-white px-4'>
            Let's talk
          </Button>
          <Button variant='transparent'>Get Started</Button>
        </div>
      </div>
      <div className='faq-right'>
        {options.map(({ question, answer }) => (
          <div
            key={question}
            className={`faq-right-card ${active === question ? 'active' : ''}`}
          >
            <div className='faq-right-card-question-and-icon'>
              <p className='faq-right-card-question-and-icon-question'>
                {question}
              </p>
              <img
                src='/chevron-down.svg'
                alt='icon'
                className={`faq-right-card-question-and-icon-icon ${
                  active === question ? 'rotate' : ''
                }`}
                onClick={() => toggleAnswer(question)}
              />
            </div>
            <div
              className={`faq-right-card-answer ${
                active === question ? 'active' : ''
              }`}
            >
              {answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
