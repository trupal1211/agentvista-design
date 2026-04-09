/**
 * AI Summary of Responses Visual - Concept F
 * Live Customer Feedback Word Cloud with Sentiment-Based Styling
 * RESPONSIVE: Uses container queries for adaptive sizing
 */

const AiSummaryOfResponsesVisual = () => (
  <div
    className="w-full h-full flex flex-col overflow-hidden"
    style={{ background: "#F7FBFE", position: "relative" }}
  >
    {/* Label */}
    <div
      style={{
        padding: "clamp(8px, 1.2cqw, 12px) clamp(10px, 1.5cqw, 14px)",
        background: "#EBF5FB",
        borderBottom: "1px solid rgba(0,92,144,0.11)",
        fontSize: "clamp(8px, 1.1cqw, 10px)",
        fontWeight: 700,
        letterSpacing: "0.13em",
        textTransform: "uppercase",
        color: "#0981B5",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
        <span
          style={{
            width: "clamp(5px, 0.8cqw, 7px)",
            height: "clamp(5px, 0.8cqw, 7px)",
            borderRadius: "50%",
            background: "#27A8E0",
            display: "inline-block",
          }}
        />
        Customer Feedback Cloud
      </span>
    </div>

    {/* Word Cloud Container */}
    <div
      className="flex-1 flex flex-wrap items-center justify-center content-center overflow-hidden relative"
      style={{
        padding: "clamp(12px, 2.5cqw, 24px)",
        gap: "clamp(6px, 1.2cqw, 14px)",
        perspective: "1000px",
      }}
    >
      {/* Positive Sentiment Words */}
      <div
        style={{
          fontSize: "clamp(18px, 4.5cqw, 42px)",
          fontWeight: 800,
          color: "#2A9A4F",
          textShadow: "0 2px 8px rgba(42,154,79,0.15)",
          animation: "float 6s ease-in-out 0s infinite",
        }}
      >
        excellent service
      </div>

      <div
        style={{
          fontSize: "clamp(16px, 4cqw, 36px)",
          fontWeight: 700,
          color: "#2A9A4F",
          textShadow: "0 2px 8px rgba(42,154,79,0.12)",
          animation: "float 7s ease-in-out 0.5s infinite",
        }}
      >
        love it
      </div>

      <div
        style={{
          fontSize: "clamp(14px, 3.5cqw, 32px)",
          fontWeight: 600,
          color: "#39B44A",
          textShadow: "0 2px 8px rgba(57,180,74,0.12)",
          animation: "float 6.5s ease-in-out 1s infinite",
        }}
      >
        highly recommend
      </div>

      {/* Negative Sentiment Words */}
      <div
        style={{
          fontSize: "clamp(15px, 3.8cqw, 34px)",
          fontWeight: 700,
          color: "#D44332",
          textShadow: "0 2px 8px rgba(212,67,50,0.12)",
          animation: "float 7.2s ease-in-out 0.3s infinite",
        }}
      >
        too slow
      </div>

      <div
        style={{
          fontSize: "clamp(13px, 3.2cqw, 30px)",
          fontWeight: 600,
          color: "#D44332",
          textShadow: "0 2px 8px rgba(212,67,50,0.10)",
          animation: "float 6.8s ease-in-out 1.2s infinite",
        }}
      >
        keeps crashing
      </div>

      <div
        style={{
          fontSize: "clamp(12px, 3cqw, 28px)",
          fontWeight: 600,
          color: "#39B44A",
          textShadow: "0 2px 8px rgba(57,180,74,0.10)",
          animation: "float 6.3s ease-in-out 0.8s infinite",
        }}
      >
        easy to use
      </div>

      <div
        style={{
          fontSize: "clamp(14px, 3.5cqw, 32px)",
          fontWeight: 700,
          color: "#2A9A4F",
          textShadow: "0 2px 8px rgba(42,154,79,0.12)",
          animation: "float 7.1s ease-in-out 1.5s infinite",
        }}
      >
        great support
      </div>

      <div
        style={{
          fontSize: "clamp(11px, 2.7cqw, 26px)",
          fontWeight: 600,
          color: "#D44332",
          textShadow: "0 2px 8px rgba(212,67,50,0.10)",
          animation: "float 6.6s ease-in-out 0.6s infinite",
        }}
      >
        poor support
      </div>

      <div
        style={{
          fontSize: "clamp(13px, 3.2cqw, 30px)",
          fontWeight: 600,
          color: "#39B44A",
          textShadow: "0 2px 8px rgba(57,180,74,0.12)",
          animation: "float 6.9s ease-in-out 1.3s infinite",
        }}
      >
        fantastic
      </div>

      {/* Neutral Sentiment Words */}
      <div
        style={{
          fontSize: "clamp(10px, 2.4cqw, 22px)",
          fontWeight: 500,
          color: "#0981B5",
          textShadow: "0 2px 6px rgba(9,129,181,0.10)",
          animation: "float 6.4s ease-in-out 0.9s infinite",
        }}
      >
        average
      </div>

      <div
        style={{
          fontSize: "clamp(12px, 3cqw, 28px)",
          fontWeight: 600,
          color: "#2A9A4F",
          textShadow: "0 2px 8px rgba(42,154,79,0.12)",
          animation: "float 7s ease-in-out 1.7s infinite",
        }}
      >
        reliable
      </div>

      {/* Mixed Sentiment Words */}
      <div
        style={{
          fontSize: "clamp(11px, 2.7cqw, 26px)",
          fontWeight: 600,
          color: "#C47A1A",
          textShadow: "0 2px 6px rgba(196,122,26,0.12)",
          animation: "float 6.7s ease-in-out 0.4s infinite",
        }}
      >
        could be better
      </div>

      <div
        style={{
          fontSize: "clamp(14px, 3.5cqw, 32px)",
          fontWeight: 700,
          color: "#D44332",
          textShadow: "0 2px 8px rgba(212,67,50,0.12)",
          animation: "float 6.5s ease-in-out 1.1s infinite",
        }}
      >
        very frustrating
      </div>

      <div
        style={{
          fontSize: "clamp(12px, 2.9cqw, 27px)",
          fontWeight: 600,
          color: "#39B44A",
          textShadow: "0 2px 8px rgba(57,180,74,0.11)",
          animation: "float 7.3s ease-in-out 0.7s infinite",
        }}
      >
        smooth experience
      </div>

      <div
        style={{
          fontSize: "clamp(10px, 2.5cqw, 24px)",
          fontWeight: 500,
          color: "#D44332",
          textShadow: "0 2px 6px rgba(212,67,50,0.10)",
          animation: "float 6.8s ease-in-out 1.4s infinite",
        }}
      >
        confusing UI
      </div>

      <div
        style={{
          fontSize: "clamp(9px, 2.2cqw, 21px)",
          fontWeight: 500,
          color: "#0981B5",
          textShadow: "0 2px 6px rgba(9,129,181,0.10)",
          animation: "float 6.6s ease-in-out 0.2s infinite",
        }}
      >
        nothing special
      </div>

      <div
        style={{
          fontSize: "clamp(11px, 2.8cqw, 26px)",
          fontWeight: 600,
          color: "#2A9A4F",
          textShadow: "0 2px 8px rgba(42,154,79,0.12)",
          animation: "float 7.1s ease-in-out 1.6s infinite",
        }}
      >
        intuitive
      </div>

      <div
        style={{
          fontSize: "clamp(10px, 2.4cqw, 22px)",
          fontWeight: 500,
          color: "#C47A1A",
          textShadow: "0 2px 6px rgba(196,122,26,0.11)",
          animation: "float 6.9s ease-in-out 0.5s infinite",
        }}
      >
        mixed feelings
      </div>

      <div
        style={{
          fontSize: "clamp(13px, 3.2cqw, 30px)",
          fontWeight: 700,
          color: "#D44332",
          textShadow: "0 2px 8px rgba(212,67,50,0.12)",
          animation: "float 6.4s ease-in-out 1.25s infinite",
        }}
      >
        billing issues
      </div>

      <div
        style={{
          fontSize: "clamp(12px, 3cqw, 28px)",
          fontWeight: 600,
          color: "#39B44A",
          textShadow: "0 2px 8px rgba(57,180,74,0.11)",
          animation: "float 7.2s ease-in-out 0.9s infinite",
        }}
      >
        friendly team
      </div>
    </div>

    {/* Legend separator */}
    <div
      style={{
        padding: "clamp(8px, 1.2cqw, 12px) clamp(10px, 1.5cqw, 14px)",
        background: "#EBF5FB",
        borderTop: "1px solid rgba(0,92,144,0.11)",
        display: "flex",
        gap: "clamp(12px, 2cqw, 24px)",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
        <div
          style={{
            width: "clamp(8px, 1.2cqw, 12px)",
            height: "clamp(8px, 1.2cqw, 12px)",
            borderRadius: "50%",
            background: "#2A9A4F",
          }}
        />
        <span
          style={{
            fontSize: "clamp(7px, 0.95cqw, 9px)",
            fontWeight: 600,
            color: "#005C90",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          Positive (62%)
        </span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
        <div
          style={{
            width: "clamp(8px, 1.2cqw, 12px)",
            height: "clamp(8px, 1.2cqw, 12px)",
            borderRadius: "50%",
            background: "#D44332",
          }}
        />
        <span
          style={{
            fontSize: "clamp(7px, 0.95cqw, 9px)",
            fontWeight: 600,
            color: "#005C90",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          Negative (21%)
        </span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
        <div
          style={{
            width: "clamp(8px, 1.2cqw, 12px)",
            height: "clamp(8px, 1.2cqw, 12px)",
            borderRadius: "50%",
            background: "#0981B5",
          }}
        />
        <span
          style={{
            fontSize: "clamp(7px, 0.95cqw, 9px)",
            fontWeight: 600,
            color: "#005C90",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          Neutral (11%)
        </span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
        <div
          style={{
            width: "clamp(8px, 1.2cqw, 12px)",
            height: "clamp(8px, 1.2cqw, 12px)",
            borderRadius: "50%",
            background: "#C47A1A",
          }}
        />
        <span
          style={{
            fontSize: "clamp(7px, 0.95cqw, 9px)",
            fontWeight: 600,
            color: "#005C90",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          Mixed (6%)
        </span>
      </div>
    </div>

    <style>{`
      @keyframes float {
        0%, 100% {
          transform: translateY(0px) translateX(0px);
          opacity: 1;
        }
        25% {
          transform: translateY(-clamp(8px, 2cqw, 16px)) translateX(clamp(4px, 1cqw, 8px));
          opacity: 0.95;
        }
        50% {
          transform: translateY(0px) translateX(clamp(8px, 2cqw, 16px));
          opacity: 1;
        }
        75% {
          transform: translateY(clamp(8px, 2cqw, 16px)) translateX(-clamp(4px, 1cqw, 8px));
          opacity: 0.95;
        }
      }
    `}</style>
  </div>
);

export default AiSummaryOfResponsesVisual;
