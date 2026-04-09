/**
 * Conversational Analytics Visual
 * RESPONSIVE: percentage padding/gap + clamp() font sizes.
 * Fills any card size without overflow or tiny text.
 */

const barHeights = [45, 60, 40, 85, 70];

const ConversationalAnalyticsVisual = () => (
  <div
    className="w-full h-full flex flex-col overflow-hidden"
    style={{ background: "#F2F8FC" }}
  >
    {/* ── Top: User Prompt ── */}
    <div
      className="flex flex-col justify-center"
      style={{
        flex: 0.8,
        background: "#EEF7FD",
        borderBottom: "1px solid rgba(0,92,144,0.1)",
        padding: "4% 6%",
        gap: "6%",
      }}
    >
      <span
        style={{
          fontSize: "clamp(7px, 1.5cqw, 11px)",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.14em",
          color: "#0981B5",
          fontFamily: "Poppins, sans-serif",
          flexShrink: 0,
        }}
      >
        You Ask
      </span>

      <div
        style={{
          background: "#fff",
          border: "1.5px solid rgba(9,129,181,0.25)",
          borderRadius: "clamp(6px, 1.2cqw, 12px)",
          borderBottomLeftRadius: 0,
          padding: "3% 4%",
          boxShadow: "0 2px 10px rgba(0,38,73,0.06)",
          alignSelf: "flex-start",
          maxWidth: "85%",
        }}
      >
        <p
          style={{
            fontSize: "clamp(8px, 1.6cqw, 13px)",
            fontStyle: "italic",
            lineHeight: 1.5,
            color: "#002649",
            fontFamily: "Poppins, sans-serif",
            margin: 0,
          }}
        >
          "Show me the CSAT trend for Q3 across all regions."
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
    </div>

    {/* ── Bottom: AI Analytics Response ── */}
    <div
      className="flex flex-col flex-1"
      style={{
        background: "#fff",
        padding: "5% 6%",
        gap: "6%",
      }}
    >
      <span
        style={{
          fontSize: "clamp(7px, 1.5cqw, 11px)",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.14em",
          color: "#39B44A",
          fontFamily: "Poppins, sans-serif",
          alignSelf: "flex-end",
          flexShrink: 0,
        }}
      >
        AI Answers
      </span>

      <div
        style={{
          background: "#F7FBFE",
          border: "1px solid rgba(0,92,144,0.15)",
          borderRadius: "clamp(6px, 1.2cqw, 12px)",
          borderBottomRightRadius: 0,
          padding: "4% 5%",
          alignSelf: "flex-end",
          maxWidth: "90%",
          display: "flex",
          flexDirection: "column",
          gap: "8%",
          boxShadow: "0 2px 8px rgba(0,38,73,0.04)",
        }}
      >
        {/* Insight text */}
        <p
          style={{
            fontSize: "clamp(7px, 1.4cqw, 11px)",
            fontWeight: 600,
            lineHeight: 1.4,
            color: "#005C90",
            fontFamily: "Poppins, sans-serif",
            margin: 0,
          }}
        >
          Overall CSAT is up <span style={{ color: "#39B44A", fontWeight: 800 }}>+12%</span> in Q3, driven primarily by NA and EMEA regions.
        </p>

        {/* Mini Chart */}
        <div style={{ display: "flex", alignItems: "flex-end", gap: "4%", height: "clamp(20px, 6cqw, 40px)", marginTop: "2%" }}>
          {barHeights.map((h, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                height: `${h}%`,
                borderRadius: "2px 2px 0 0",
                background: i === 3 ? "linear-gradient(to top,#39B44A,#27A8E0)" : "linear-gradient(to top,#005C90,#27A8E0)",
                animation: `barUp 1s ease-out ${0.2 + i * 0.1}s forwards`,
                transformOrigin: "bottom",
                transform: "scaleY(0)",
              }}
            />
          ))}
        </div>
      </div>
    </div>

    <style>{`
      @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
      @keyframes barUp { to { transform: scaleY(1); } }
    `}</style>
  </div>
);

export default ConversationalAnalyticsVisual;
