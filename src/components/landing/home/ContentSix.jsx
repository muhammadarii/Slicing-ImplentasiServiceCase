// ./src/components/FAQ.js
import React, { useState } from "react";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 mb-4 border-2 rounded-lg py-4">
      <div className="flex justify-between items-center mt-4 ">
        <h3 className="text-lg font-semibold -mt-4 ml-4">{question}</h3>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl font-bold -mt-5 mr-4"
        >
          {isOpen ? "-" : "+"}
        </button>
      </div>
      {isOpen && <p className="mt-2 text-gray-700 mx-4">{answer}</p>}
    </div>
  );
};

const FAQ = () => {
  const faqData = [
    {
      question: "What do tou mean by public-facing usage?",
      answer:
        "We define public-facing usage as leveraging CARTO to power enterprise-scale applications that are made available to external parties such as clients or the public, as opposed to internal demonstration-only applications.",
    },
    {
      question: "Can i  buy more storage for my individual plan?",
      answer:
        "TailwindCSS is a utility-first CSS framework for rapidly building custom user interfaces.",
    },
    {
      question:
        "What happens to my data after the trial or if i cancel my subscription?",
      answer:
        "We define public-facing usage as leveraging CARTO to power enterprise-scale applications that are made available to external parties such as clients or the public, as opposed to internal demonstration-only applications.",
    },
    {
      question: "Can i cancel my monthly or annual subscription?",
      answer:
        "We define public-facing usage as leveraging CARTO to power enterprise-scale applications that are made available to external parties such as clients or the public, as opposed to internal demonstration-only applications.",
    },
  ];

  return (
    <div className="constainer mx-auto my-10">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Frequently Asked Questions
        </h1>
        {faqData.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
      <div className="flex justify-center">
        <button className="text-blue-500 font-extrabold border-2 border-blue-500 tracking-normal px-10 py-3 rounded-full">
          Add Question
        </button>
      </div>
    </div>
  );
};

export default FAQ;
