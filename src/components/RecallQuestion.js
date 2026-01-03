import { useState } from "react";

export default function RecallQuestion({ question, answer }) {
  const [show, setShow] = useState(false);

  return (
    <div className="recall-item">
      <div className="recall-question">Q: {question}</div>

      {!show && (
        <button className="reveal-btn" onClick={() => setShow(true)}>
          Reveal answer
        </button>
      )}

      {show && <div className="recall-answer">A: {answer}</div>}
    </div>
  );
}
