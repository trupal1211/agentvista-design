/**
 * Natural Language Actions Visual
 * Shows: Natural Language Command → AI Processing → Multiple Actions
 * RESPONSIVE: Uses container queries for adaptive sizing
 */

const NaturalLanguageActionsVisual = () => (
  <div
    className="w-full h-full flex flex-col overflow-hidden"
    style={{ background: "#F2F8FC" }}
  >
    {/* ── Top: Command Input ── */}
    <div
      className="flex flex-col justify-center"
      style={{
        flex: 1,
        background: "#EBF5FB",
        borderBottom: "1px solid rgba(0,92,144,0.11)",
        padding: "clamp(12px, 3cqw, 28px) clamp(12px, 2.5cqw, 28px)",
        gap: "clamp(10px, 1.8cqw, 16px)",
      }}
    >
      <div
        style={{
          fontSize: "clamp(9px, 1.1cqw, 11px)",
          fontWeight: 700,
          letterSpacing: "0.13em",
          textTransform: "uppercase",
          color: "#0981B5",
          display: "flex",
          alignItems: "center",
          gap: "6px",
          fontFamily: "Poppins, sans-serif",
        }}
      >
        <span
          style={{
            width: "clamp(5px, 0.8cqw, 7px)",
            height: "clamp(5px, 0.8cqw, 7px)",
            borderRadius: "50%",
            background: "#27A8E0",
            display: "inline-block",
            flexShrink: 0,
          }}
        />
        Your Command
      </div>

      {/* Command bubble */}
      <div
        style={{
          background: "#fff",
          border: "1px solid rgba(0,92,144,0.11)",
          borderRadius: "clamp(8px, 1.5cqw, 14px)",
          padding: "clamp(8px, 1.5cqw, 14px)",
          boxShadow: "0 1px 6px rgba(0,38,73,0.05)",
        }}
      >
        <div
          style={{
            fontSize: "clamp(9px, 1.2cqw, 12px)",
            color: "#005C90",
            lineHeight: "1.6",
            background: "rgba(9,129,181,0.07)",
            borderLeft: "2.5px solid #27A8E0",
            borderRadius: "0 7px 7px 0",
            padding: "clamp(5px, 0.9cqw, 9px) clamp(7px, 1.2cqw, 12px)",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          Send survey to all VIP customers and summarize responses by region.
          <span
            style={{
              display: "inline-block",
              width: "2px",
              height: "clamp(9px, 1.3cqw, 13px)",
              background: "#0981B5",
              borderRadius: "1px",
              marginLeft: "2px",
              verticalAlign: "middle",
              animation: "blink 1s step-end infinite",
            }}
          />
        </div>
      </div>
    </div>

    {/* ── Bottom: Actions Output ── */}
    <div
      className="flex flex-col flex-1"
      style={{
        background: "#fff",
        padding: "clamp(10px, 2.5cqw, 20px) clamp(12px, 2.5cqw, 28px)",
        gap: "clamp(8px, 1.5cqw, 14px)",
      }}
    >
      <span
        style={{
          fontSize: "clamp(9px, 1.1cqw, 11px)",
          fontWeight: 700,
          letterSpacing: "0.13em",
          textTransform: "uppercase",
          color: "#39B44A",
          fontFamily: "Poppins, sans-serif",
          flexShrink: 0,
        }}
      >
        Actions Executed
      </span>

      {/* Action cards grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "clamp(8px, 1.5cqw, 14px)",
          flex: 1,
          minHeight: 0,
        }}
      >
        {/* Action 1: Create */}
        <div
          style={{
            background: "#F7FBFE",
            border: "1px solid rgba(0,92,144,0.15)",
            borderRadius: "clamp(8px, 1.3cqw, 12px)",
            padding: "clamp(10px, 1.5cqw, 14px)",
            display: "flex",
            flexDirection: "column",
            gap: "clamp(6px, 1cqw, 10px)",
            boxShadow: "0 1px 4px rgba(0,38,73,0.03)",
            animation: "slideUp 0.6s ease-out 0.1s both",
          }}
        >
          <div
            style={{
              width: "clamp(28px, 4cqw, 40px)",
              height: "clamp(28px, 4cqw, 40px)",
              borderRadius: "clamp(6px, 1cqw, 10px)",
              background: "linear-gradient(135deg, #0981B5, #27A8E0)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <svg viewBox="0 0 16 16" fill="none" style={{ width: "55%", height: "55%" }}>
              <path d="M8 1v14M1 8h14" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <div>
            <p
              style={{
                fontSize: "clamp(8px, 1.2cqw, 11px)",
                fontWeight: 700,
                color: "#002649",
                fontFamily: "Poppins, sans-serif",
                margin: "0 0 clamp(2px, 0.5cqw, 4px) 0",
              }}
            >
              Create
            </p>
            <p
              style={{
                fontSize: "clamp(7px, 1cqw, 9px)",
                color: "#005C90",
                fontFamily: "Poppins, sans-serif",
                margin: 0,
                lineHeight: 1.4,
              }}
            >
              Survey created & recipients added
            </p>
          </div>
        </div>

        {/* Action 2: Distribute */}
        <div
          style={{
            background: "#F7FBFE",
            border: "1px solid rgba(0,92,144,0.15)",
            borderRadius: "clamp(8px, 1.3cqw, 12px)",
            padding: "clamp(10px, 1.5cqw, 14px)",
            display: "flex",
            flexDirection: "column",
            gap: "clamp(6px, 1cqw, 10px)",
            boxShadow: "0 1px 4px rgba(0,38,73,0.03)",
            animation: "slideUp 0.6s ease-out 0.2s both",
          }}
        >
          <div
            style={{
              width: "clamp(28px, 4cqw, 40px)",
              height: "clamp(28px, 4cqw, 40px)",
              borderRadius: "clamp(6px, 1cqw, 10px)",
              background: "linear-gradient(135deg, #27A8E0, #39B44A)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <svg viewBox="0 0 16 16" fill="none" style={{ width: "55%", height: "55%" }}>
              <path d="M2 4h12M8 4v8M8 12l-3-3m3 3l3-3" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div>
            <p
              style={{
                fontSize: "clamp(8px, 1.2cqw, 11px)",
                fontWeight: 700,
                color: "#002649",
                fontFamily: "Poppins, sans-serif",
                margin: "0 0 clamp(2px, 0.5cqw, 4px) 0",
              }}
            >
              Distribute
            </p>
            <p
              style={{
                fontSize: "clamp(7px, 1cqw, 9px)",
                color: "#005C90",
                fontFamily: "Poppins, sans-serif",
                margin: 0,
                lineHeight: 1.4,
              }}
            >
              Emails sent to all VIP contacts
            </p>
          </div>
        </div>

        {/* Action 3: Insights */}
        <div
          style={{
            background: "#F7FBFE",
            border: "1px solid rgba(0,92,144,0.15)",
            borderRadius: "clamp(8px, 1.3cqw, 12px)",
            padding: "clamp(10px, 1.5cqw, 14px)",
            display: "flex",
            flexDirection: "column",
            gap: "clamp(6px, 1cqw, 10px)",
            boxShadow: "0 1px 4px rgba(0,38,73,0.03)",
            animation: "slideUp 0.6s ease-out 0.3s both",
          }}
        >
          <div
            style={{
              width: "clamp(28px, 4cqw, 40px)",
              height: "clamp(28px, 4cqw, 40px)",
              borderRadius: "clamp(6px, 1cqw, 10px)",
              background: "linear-gradient(135deg, #39B44A, #005C90)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <svg viewBox="0 0 16 16" fill="none" style={{ width: "55%", height: "55%" }}>
              <path d="M2 14h12M6 10v4M10 6v8M14 2v12" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div>
            <p
              style={{
                fontSize: "clamp(8px, 1.2cqw, 11px)",
                fontWeight: 700,
                color: "#002649",
                fontFamily: "Poppins, sans-serif",
                margin: "0 0 clamp(2px, 0.5cqw, 4px) 0",
              }}
            >
              Insights
            </p>
            <p
              style={{
                fontSize: "clamp(7px, 1cqw, 9px)",
                color: "#005C90",
                fontFamily: "Poppins, sans-serif",
                margin: 0,
                lineHeight: 1.4,
              }}
            >
              Generated by region summary
            </p>
          </div>
        </div>
      </div>
    </div>

    <style>{`
      @keyframes slideUp {
        from {
          opacity: 0;
          transform: translateY(8px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      @keyframes blink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0; }
      }
    `}</style>
  </div>
);

export default NaturalLanguageActionsVisual;
