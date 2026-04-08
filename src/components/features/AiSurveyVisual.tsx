/**
 * Concept C – AI Survey Generation
 * RESPONSIVE: percentage padding/gap + clamp() font sizes.
 * Fills any card size without overflow or tiny text.
 */

const AiSurveyVisual = () => (
  <div
    className="w-full h-full flex flex-row items-stretch overflow-hidden"
    style={{ background: "#F7FBFE" }}
  >
    {/* ── Left: Prompt ── */}
    <div
      className="flex flex-col justify-center"
      style={{
        flex: 1,
        background: "#EEF7FD",
        borderRight: "1px solid rgba(0,92,144,0.1)",
        padding: "6% 7%",
        gap: "6%",
      }}
    >
      <span
        style={{
          fontSize: "clamp(7px, 1.5cqw, 12px)",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.14em",
          color: "#0981B5",
          fontFamily: "Poppins, sans-serif",
          flexShrink: 0,
        }}
      >
        You type
      </span>

      {/* Prompt bubble */}
      <div
        style={{
          background: "#fff",
          border: "1.5px solid rgba(9,129,181,0.25)",
          borderRadius: "clamp(6px, 1.2cqw, 12px)",
          padding: "4% 5%",
          boxShadow: "0 2px 10px rgba(0,38,73,0.06)",
        }}
      >
        <p
          style={{
            fontSize: "clamp(8px, 1.8cqw, 14px)",
            fontStyle: "italic",
            lineHeight: 1.6,
            color: "#002649",
            fontFamily: "Poppins, sans-serif",
            margin: 0,
          }}
        >
          "Employee engagement survey, 5&nbsp;questions, Likert scale"
          <span
            style={{
              display: "inline-block",
              width: 2,
              height: "1.1em",
              verticalAlign: "middle",
              marginLeft: 3,
              background: "#0981B5",
              animation: "blink 1s step-end infinite",
            }}
          />
        </p>
      </div>

      {/* File type chips */}
      <div className="flex flex-wrap" style={{ gap: "4%" }}>
        {["PDF", "Image", "DOCX"].map((t) => (
          <span
            key={t}
            style={{
              fontSize: "clamp(6px, 1.2cqw, 10px)",
              fontWeight: 600,
              fontFamily: "Poppins, sans-serif",
              color: "#005C90",
              background: "#fff",
              border: "1px solid rgba(0,92,144,0.18)",
              borderRadius: 20,
              padding: "2% 5%",
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </div>

    {/* ── Right: Generated Fields ── */}
    <div
      className="flex flex-col justify-center"
      style={{
        flex: 1.1,
        background: "#fff",
        padding: "5% 6%",
        gap: "5%",
      }}
    >
      <span
        style={{
          fontSize: "clamp(7px, 1.5cqw, 12px)",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.14em",
          color: "#39B44A",
          fontFamily: "Poppins, sans-serif",
          flexShrink: 0,
        }}
      >
        AI Generates
      </span>

      {["Q1 · Satisfaction", "Q2 · Work-Life Balance", "Q3 · Team Collaboration"].map((q) => (
        <div
          key={q}
          style={{
            borderRadius: "clamp(5px, 1cqw, 10px)",
            border: "1px solid rgba(0,92,144,0.15)",
            background: "#F7FBFE",
            padding: "3% 4%",
            display: "flex",
            flexDirection: "column",
            gap: "12%",
          }}
        >
          <span
            style={{
              fontSize: "clamp(6px, 1.3cqw, 11px)",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "#0981B5",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            {q}
          </span>
          <div
            style={{
              height: "clamp(5px, 1cqw, 9px)",
              borderRadius: 3,
              background: "rgba(9,129,181,0.12)",
              border: "1px solid rgba(9,129,181,0.15)",
            }}
          />
        </div>
      ))}

      <button
        style={{
          alignSelf: "flex-start",
          fontSize: "clamp(7px, 1.4cqw, 11px)",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          color: "#fff",
          background: "linear-gradient(90deg,#0981B5,#27A8E0)",
          border: "none",
          borderRadius: 30,
          padding: "3% 8%",
          cursor: "pointer",
          boxShadow: "0 3px 10px rgba(9,129,181,0.28)",
          fontFamily: "Poppins, sans-serif",
          flexShrink: 0,
        }}
      >
        Generate Survey →
      </button>
    </div>

    <style>{`
      @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
    `}</style>
  </div>
);

export default AiSurveyVisual;
