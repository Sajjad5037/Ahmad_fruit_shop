import { useState } from "react";
import { generateTopic } from "./api";
import Section from "./components/Section";
import RecallQuestion from "./components/RecallQuestion";
import "./styles.css";

export default function App() {
  const [title, setTitle] = useState("");
  const [rawText, setRawText] = useState("");
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState("");
  const [result, setResult] = useState(null);

  const handleGenerate = async () => {
    if (!title.trim() || !rawText.trim()) return;

    setLoading(true);
    setResult(null);

    const steps = [
      "Organizing the core idea...",
      "Connecting mechanisms...",
      "Linking clinical relevance...",
      "Identifying exam traps..."
    ];

    let i = 0;
    const interval = setInterval(() => {
      setProgress(steps[i] || "");
      i++;
    }, 900);

    try {
      const data = await generateTopic({ title, raw_text: rawText });
      setResult(data);
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Try again.");
    } finally {
      clearInterval(interval);
      setLoading(false);
      setProgress("");
    }
  };

  return (
    <div className="container">
      <header className="header">
        <h1>Clinical Recall Notebook</h1>
        <p>Turn study notes into understanding you can recall</p>
      </header>

      <section className="input-section">
        <input
          className="title-input"
          placeholder="Topic title (e.g. Acute Kidney Injury)"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="notes-input"
          placeholder="Paste your lecture notes, textbook text, or exam prep material here.
Don’t edit. Don’t summarize. Raw is fine."
          value={rawText}
          onChange={(e) => setRawText(e.target.value)}
        />

        <button
          className="primary-btn"
          onClick={handleGenerate}
          disabled={loading}
        >
          {loading ? "Clarifying…" : "Clarify this topic"}
        </button>

        {loading && <div className="progress-text">{progress}</div>}
      </section>

      {result && (
        <section className="output-section">
          <Section title="Core Idea" content={result.core_idea} />
          <Section title="Mechanism (Why this happens)" content={result.mechanism} />
          <Section title="Clinical Connection" content={result.clinical_connection} />
          <Section title="Exam Traps" content={result.exam_traps} />

          <div className="recall-section">
            <h3>Test your recall</h3>
            {result.recall_questions.map((q, idx) => (
              <RecallQuestion key={idx} {...q} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
