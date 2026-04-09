/**
 * Sentiment Intelligence — Chat Transcript + Score Ring
 * RESPONSIVE: uses percentages + clamp() for all sizing
 */

const SentimentIntelligenceVisual = () => (
  <div
    className="w-full h-full flex overflow-hidden"
    style={{ background: "#F2F8FC" }}
  >
    {/* ── LEFT SIDE: Chat Transcript ── */}
    <div
      className="flex flex-col min-w-0"
      style={{
        flex: "0 0 52%",
        background: "#EBF5FB",
        borderRight: "1px solid rgba(0,92,144,0.11)",
        justifyContent: "center",
        padding: "clamp(12px, 2.2%, 24px) clamp(10px, 1.8%, 20px)",
        gap: "clamp(7px, 1.2%, 13px)",
      }}
    >
      {/* Label */}
      <div
        className="flex items-center"
        style={{
          gap: "10px",
          fontSize: "clamp(9px, 1.1cqw, 11px)",
          fontWeight: 700,
          color: "#0981B5",
          fontFamily: "Poppins, sans-serif",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
        }}
      >
        <div
          style={{
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            background: "#27A8E0",
          }}
        />
        Chat Transcript
      </div>

      {/* Chat Bubble Container */}
      <div
        className="bg-white overflow-hidden flex flex-col"
        style={{
          borderRadius: "clamp(8px, 1.3%, 14px)",
          border: "1px solid rgba(0,92,144,0.11)",
          boxShadow: "0 1px 6px rgba(0,38,73,0.05)",
          padding: "clamp(8px, 1.4%, 14px)",
          gap: "clamp(6px, 1%, 10px)",
        }}
      >
        {/* Message 1: User */}
        <div className="flex gap-2 items-start flex-row-reverse">
          <div
            className="flex-shrink-0 flex items-center justify-center text-white font-bold rounded-full"
            style={{
              width: "clamp(18px, 2.8cqw, 26px)",
              height: "clamp(18px, 2.8cqw, 26px)",
              background: "rgba(9,129,181,0.75)",
              fontSize: "clamp(7px, 1cqw, 10px)",
            }}
          >
            U
          </div>
          <div
            className="max-w-[82%] rounded-lg border"
            style={{
              padding: "clamp(5px, 0.85%, 9px) clamp(7px, 1.1%, 12px)",
              fontSize: "clamp(8px, 1.05cqw, 11px)",
              lineHeight: 1.55,
              color: "#002649",
              background: "rgba(9,129,181,0.07)",
              borderColor: "rgba(9,129,181,0.15)",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Setup was{" "}
            <span style={{ background: "rgba(46,155,82,.15)", borderRadius: "3px", padding: "0 3px", fontWeight: 600, color: "#2E9B52" }}>
              surprisingly easy
            </span>
            , but the{" "}
            <span style={{ background: "rgba(217,79,61,.12)", borderRadius: "3px", padding: "0 3px", fontWeight: 600, color: "#D94F3D" }}>
              response time was poor
            </span>
            .
          </div>
        </div>

        {/* Message 2: Support */}
        <div className="flex gap-2 items-start">
          <div
            className="flex-shrink-0 flex items-center justify-center text-white font-bold rounded-full"
            style={{
              width: "clamp(18px, 2.8cqw, 26px)",
              height: "clamp(18px, 2.8cqw, 26px)",
              background: "rgba(0,92,144,0.6)",
              fontSize: "clamp(7px, 1cqw, 10px)",
            }}
          >
            S
          </div>
          <div
            className="max-w-[82%] rounded-lg border"
            style={{
              padding: "clamp(5px, 0.85%, 9px) clamp(7px, 1.1%, 12px)",
              fontSize: "clamp(8px, 1.05cqw, 11px)",
              lineHeight: 1.55,
              color: "#002649",
              background: "#F7FBFE",
              borderColor: "rgba(0,92,144,0.11)",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Sorry about that. Would you recommend us?
          </div>
        </div>

        {/* Message 3: User */}
        <div className="flex gap-2 items-start flex-row-reverse">
          <div
            className="flex-shrink-0 flex items-center justify-center text-white font-bold rounded-full"
            style={{
              width: "clamp(18px, 2.8cqw, 26px)",
              height: "clamp(18px, 2.8cqw, 26px)",
              background: "rgba(9,129,181,0.75)",
              fontSize: "clamp(7px, 1cqw, 10px)",
            }}
          >
            U
          </div>
          <div
            className="max-w-[82%] rounded-lg border"
            style={{
              padding: "clamp(5px, 0.85%, 9px) clamp(7px, 1.1%, 12px)",
              fontSize: "clamp(8px, 1.05cqw, 11px)",
              lineHeight: 1.55,
              color: "#002649",
              background: "rgba(9,129,181,0.07)",
              borderColor: "rgba(9,129,181,0.15)",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            <span style={{ background: "rgba(192,123,42,.13)", borderRadius: "3px", padding: "0 3px", fontWeight: 600, color: "#C07B2A" }}>
              Maybe — good product
            </span>
            , but{" "}
            <span style={{ background: "rgba(192,123,42,.13)", borderRadius: "3px", padding: "0 3px", fontWeight: 600, color: "#C07B2A" }}>
              support needs work
            </span>
            .
          </div>
        </div>
      </div>

      {/* Source Tags */}
      <div className="flex items-stretch" style={{ gap: "clamp(4px, 0.7%, 8px)", flexWrap: "nowrap" }}>
        {[
          { label: "Chat", icon: "📋", active: true },
          { label: "Case", icon: "📄", active: false },
          { label: "Survey", icon: "✓", active: false },
        ].map((src) => (
          <div
            key={src.label}
            className="flex flex-row items-center justify-center cursor-pointer flex-1 min-w-0 border rounded-lg transition-all"
            style={{
              background: src.active ? "linear-gradient(135deg,#1aaecf 0%,#1680b8 100%)" : "#F7FBFE",
              borderColor: src.active ? "transparent" : "rgba(0,92,144,0.11)",
              padding: "clamp(5px, 0.8%, 8px) clamp(8px, 1.3%, 14px)",
              gap: "clamp(4px, 0.6%, 6px)",
            }}
          >
            <div
              style={{
                width: "clamp(12px, 1.8cqw, 15px)",
                height: "clamp(12px, 1.8cqw, 15px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "clamp(8px, 1cqw, 12px)",
                flexShrink: 0,
              }}
            >
              {src.icon}
            </div>
            <span
              style={{
                fontSize: "clamp(7px, 0.85cqw, 9px)",
                fontWeight: 600,
                color: src.active ? "rgba(255,255,255,0.85)" : "#005C90",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              {src.label}
            </span>
          </div>
        ))}
      </div>
    </div>

    {/* ── RIGHT SIDE: Sentiment Score ── */}
    <div
      className="flex flex-col min-w-0 bg-white"
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: "clamp(12px, 2.2%, 24px) clamp(10px, 1.8%, 20px)",
        gap: "clamp(12px, 2%, 20px)",
      }}
    >
      {/* Label */}
      <div
        className="flex items-center w-full"
        style={{
          gap: "10px",
          fontSize: "clamp(9px, 1.1cqw, 11px)",
          fontWeight: 700,
          color: "#2E9B52",
          fontFamily: "Poppins, sans-serif",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
        }}
      >
        <div
          style={{
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            background: "#2E9B52",
          }}
        />
        Sentiment Score
      </div>

      {/* Score Ring + Meta - Side by Side */}
      <div
        className="flex items-center justify-center"
        style={{
          gap: "clamp(12px, 2%, 20px)",
          animation: "scorePop 0.6s 0.3s ease both",
          marginBottom: "clamp(8px, 1.3%, 14px)",
        }}
      >
        {/* Score Ring (Conic Gradient) */}
        <div
          className="flex items-center justify-center rounded-full relative flex-shrink-0"
          style={{
            width: "clamp(64px, 11cqw, 96px)",
            height: "clamp(64px, 11cqw, 96px)",
            background: "conic-gradient(#C07B2A 0% 58%, rgba(192,123,42,0.12) 58% 100%)",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: "clamp(7px, 1%, 10px)",
              borderRadius: "50%",
              background: "#FFFFFF",
            }}
          />
          <span
            style={{
              position: "relative",
              zIndex: 1,
              fontSize: "clamp(18px, 3cqw, 28px)",
              fontWeight: 800,
              color: "#C07B2A",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            58
          </span>
        </div>

        {/* Score Meta */}
        <div className="flex flex-col items-start" style={{ gap: "clamp(3px, 0.5%, 6px)" }}>
          <div
            className="inline-flex items-center"
            style={{
              gap: "clamp(3px, 0.5%, 5px)",
              fontSize: "clamp(7px, 0.85cqw, 9px)",
              fontWeight: 700,
              borderRadius: "20px",
              padding: "clamp(2px, 0.35%, 4px) clamp(7px, 1%, 10px)",
              background: "#FEF6EA",
              color: "#C07B2A",
              fontFamily: "Poppins, sans-serif",
              whiteSpace: "nowrap",
            }}
          >
            <div
              style={{
                width: "clamp(5px, 0.7cqw, 7px)",
                height: "clamp(5px, 0.7cqw, 7px)",
                borderRadius: "50%",
                background: "#C07B2A",
                flexShrink: 0,
              }}
            />
            Mixed
          </div>
          <div
            style={{
              fontSize: "clamp(7px, 0.88cqw, 9px)",
              color: "#005C90",
              fontWeight: 500,
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Confidence: 76%
          </div>
        </div>
      </div>

      {/* Sentiment Bars - Compact */}
      <div
        className="w-full flex flex-col"
        style={{
          gap: "clamp(3px, 0.5%, 5px)",
          maxWidth: "clamp(200px, 60%, 300px)",
          margin: "0 auto",
        }}
      >
        {[
          { label: "Positive", pct: 45, color: "#2E9B52" },
          { label: "Negative", pct: 20, color: "#D94F3D" },
          { label: "Neutral", pct: 10, color: "#0981B5" },
          { label: "Mixed", pct: 25, color: "#C07B2A" },
        ].map((item) => (
          <div key={item.label} className="flex items-center" style={{ gap: "clamp(4px, 0.6%, 7px)" }}>
            <span
              style={{
                fontSize: "clamp(6px, 0.75cqw, 8px)",
                fontWeight: 600,
                width: "clamp(32px, 5.5cqw, 48px)",
                color: item.color,
                fontFamily: "Poppins, sans-serif",
                whiteSpace: "nowrap",
              }}
            >
              {item.label}
            </span>
            <div
              className="flex-1"
              style={{
                height: "clamp(6px,1%, 8px)",
                background: "#EBF5FB",
                borderRadius: "3px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: `${item.pct}%`,
                  borderRadius: "3px",
                  background: item.color,
                }}
              />
            </div>
            <span
              style={{
                fontSize: "clamp(6px, 0.75cqw, 8px)",
                fontWeight: 700,
                width: "clamp(18px, 3cqw, 24px)",
                textAlign: "right",
                color: item.color,
                fontFamily: "Poppins, sans-serif",
              }}
            >
              {item.pct}%
            </span>
          </div>
        ))}
      </div>

      {/* Action Button */}
      <button
        className="text-white font-bold uppercase rounded-full border-none cursor-pointer transition-all hover:opacity-90"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          fontSize: "clamp(8px, 1cqw, 10px)",
          letterSpacing: "0.09em",
          padding: "clamp(5px, 0.9%, 8px) clamp(12px, 2%, 20px)",
          whiteSpace: "nowrap",
          background: "linear-gradient(90deg,#2E9B52,#39B44A)",
          boxShadow: "0 3px 12px rgba(46,155,82,.28)",
          fontFamily: "Poppins, sans-serif",
        }}
      >
        Store Result
      </button>
    </div>

    {/* Animation Keyframes */}
    <style>{`
      @keyframes scorePop {
        from {
          transform: scale(0.8);
          opacity: 0;
        }
        to {
          transform: scale(1);
          opacity: 1;
        }
      }
    `}</style>
  </div>
);

export default SentimentIntelligenceVisual;
