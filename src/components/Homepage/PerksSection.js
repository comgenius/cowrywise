import React, { useState, useEffect } from "react";

const PerksSection = () => {
  const [questionVisibleIndex, setQuestionVisibleIndex] = useState(0);
  const [answerVisibleIndex, setAnswerVisibleIndex] = useState(0);

  const perksList = [
    {
      id: Math.random().toLocaleString(),
      question: "Got SEC licence?",
      answer: "Yup!",
    },
    {
      id: Math.random().toLocaleString(),
      question: "Saving Charges?",
      answer: "Nope.",
    },
    {
      id: Math.random().toLocaleString(),
      question: "Great Interest Rates?",
      answer: "Confam.",
    },
    {
      id: Math.random().toLocaleString(),
      question: "Maintenance Fees?",
      answer: "No.",
    },
    {
      id: Math.random().toLocaleString(),
      question: "Convinced?",
      answer: "Sign up now.",
    },
  ];
  useEffect(() => {
    const intervalId = setInterval(() => {
      setQuestionVisibleIndex((questionVisibleIndex + 1) % 5);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [questionVisibleIndex]);

 /*  useEffect(() => {
    const intervalId = setInterval(() => {
      setAnswerVisibleIndex((answerVisibleIndex + 1) % 5);
    }, 3500);
    return () => clearInterval(intervalId);
  }, [answerVisibleIndex]); */
  return (
    <section className="perks-section">
      <div className="container">
        <div className="grid">
          <h6>WHY COWRYWISE ?</h6>
          <div id="perks-column" className="col col-xs-12 col-no-gutter">
            {perksList.map((perks, index) => (
              <div className="perk" key={perks.id}>
                <span
                  className={`perk__question ${
                    index === questionVisibleIndex ? " animate__animated animate__fadeInUp" : ""
                  }`}
                  style={{
                    transform: "translate(0px, 50px) scale(1.02, 1.02)",
                    opacity: 0,
                  }}
                >
                  {perks.question}
                </span>
                <span
                  className={`perk__answer ${
                    index === questionVisibleIndex ? " animate__animated animate__fadeInUp" : ""
                  }`}
                  style={{
                    transform: "translate(0px, 50px) scale(1.06, 1.06)",
                    opacity: 0,
                  }}
                >
                  {perks.answer}
                </span>
              </div>
            ))}
            {/* <div className="perk">
              <span
                className={`perk__question ${visibleIndex === 0 ? ' animate__animated animate__slideOutUp' : ''}`}
                style={{ transform: "translate(0px, -30px)", opacity: 0 }}
              >
                Got SEC licence?
              </span>
              <span
                className="perk__answer"
                style={{ transform: "translate(0px, -30px)", opacity: 0 }}
              >
                Yup!
              </span>
            </div>
            <div className="perk">
              <span
                className={`perk__question ${visibleIndex === 1 ? ' animate__animated animate__slideOutUp' : ''}`}
                style={{ transform: "translate(0px, 0px)", opacity: 1 }}
              >
                Saving Charges?
              </span>
              <span
                className="perk__answer"
                style={{ transform: "translate(0px, 0px)", opacity: 1 }}
              >
                Nope.
              </span>
            </div>
            <div className="perk">
              <span
                className="perk__question"
                style={{
                  transform: "translate(0px, 50px) scale(1.02, 1.02)",
                  opacity: 0,
                }}
              >
                Great Interest Rates?
              </span>
              <span
                className="perk__answer"
                style={{
                  transform: "translate(0px, 50px) scale(1.06, 1.06)",
                  opacity: 0,
                }}
              >
                Confam.
              </span>
            </div>
            <div className="perk">
              <span
                className="perk__question"
                style={{
                  transform: "translate(0px, 50px) scale(1.02, 1.02)",
                  opacity: 0,
                }}
              >
                Maintenance Fees?
              </span>
              <span
                className="perk__answer"
                style={{
                  transform: "translate(0px, 50px) scale(1.06, 1.06)",
                  opacity: 0,
                }}
              >
                No.
              </span>
            </div>
            <div className="perk">
              <span
                className="perk__question"
                style={{
                  transform: "translate(0px, 50px) scale(1.02, 1.02)",
                  opacity: 0,
                }}
              >
                Convinced?
              </span>
              <a
                href="/signup"
                className="perk__answer perk__link"
                style={{
                  transform: "translate(0px, 50px) scale(1.06, 1.06)",
                  opacity: 0,
                }}
              >
                Sign up now.
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerksSection;
