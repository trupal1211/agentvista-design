/**
 * AI-Based Response Mapping Visual
 * Shows: Response Input → AI Analysis → Task/Record Decision
 * RESPONSIVE: Uses container queries for adaptive sizing
 */

const AiResponseMappingVisual = () => (
  <div
    className="w-full h-full flex flex-col overflow-hidden"
    style={{ background: "#F2F8FC" }}
  >
    {/* ── Top: Incoming Response ── */}
    <div
      className="flex flex-col justify-center"
      style={{
        flex: 0.85,
        background: "#EEF7FD",
        borderBottom: "1px solid rgba(0,92,144,0.1)",
        padding: "clamp(10px, 2.5cqw, 20px) clamp(12px, 2.5cqw, 28px)",
        gap: "clamp(8px, 1.4cqw, 12px)",
      }}
    >
      <span
        style={{
          fontSize: "clamp(9px, 1.1cqw, 11px)",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.13em",
          color: "#0981B5",
          fontFamily: "Poppins, sans-serif",
          flexShrink: 0,
        }}
      >
        Response Analysis
      </span>

      {/* Response bubble */}
      <div
        style={{
          background: "#fff",
          border: "1.5px solid rgba(9,129,181,0.25)",
          borderRadius: "clamp(8px, 1.5cqw, 14px)",
          borderBottomLeftRadius: 0,
          padding: "clamp(8px, 1.3cqw, 12px) clamp(10px, 1.5cqw, 14px)",
          boxShadow: "0 2px 10px rgba(0,38,73,0.06)",
          alignSelf: "flex-start",
          maxWidth: "85%",
        }}
      >
        <p
          style={{
            fontSize: "clamp(8px, 1.3cqw, 11px)",
            lineHeight: 1.5,
            color: "#002649",
            fontFamily: "Poppins, sans-serif",
            margin: 0,
          }}
        >
          "The implementation took longer than expected and blocked our team's progress for a week. We need immediate support."
        </p>
      </div>

      {/* AI Analysis indicator */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "clamp(8px, 1.3cqw, 12px)",
          marginTop: "clamp(4px, 0.8cqw, 8px)",
        }}
      >
        <div
          style={{
            width: "clamp(18px, 2.5cqw, 24px)",
            height: "clamp(18px, 2.5cqw, 24px)",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #0981B5, #27A8E0)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <svg viewBox="0 0 16 16" fill="none" style={{ width: "55%", height: "55%" }}>
            <path d="M2 8h12M8 2v12" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
        </div>
        <p
          style={{
            fontSize: "clamp(7px, 1cqw, 9px)",
            color: "#005C90",
            fontFamily: "Poppins, sans-serif",
            margin: 0,
            fontWeight: 500,
          }}
        >
          AI Mapping: Detecting urgency, issue impact, customer sentiment...
        </p>
      </div>
    </div>

    {/* ── Bottom: Mapped Actions ── */}
    <div
      className="flex flex-col flex-1"
      style={{
        background: "#fff",
        padding: "clamp(10px, 2.5cqw, 20px) clamp(12px, 2.5cqw, 28px)",
        gap: "clamp(8px, 1.4cqw, 12px)",
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
        Mapping Outcome
      </span>

      {/* Actions grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(clamp(140px, 45%, 260px), 1fr))",
          gap: "clamp(10px, 1.5cqw, 14px)",
          flex: 1,
          minHeight: 0,
        }}
      >
        {/* Action 1: Create Task */}
        <div
          style={{
            background: "#F7FBFE",
            border: "2px solid #39B44A",
            borderRadius: "clamp(8px, 1.5cqw, 14px)",
            padding: "clamp(10px, 1.5cqw, 14px)",
            display: "flex",
            flexDirection: "column",
            gap: "clamp(8px, 1.3cqw, 12px)",
            boxShadow: "0 2px 8px rgba(57,180,74,0.10)",
            animation: "slideUp 0.6s ease-out 0.2s both",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "clamp(6px, 1cqw, 10px)",
            }}
          >
            <div
              style={{
                width: "clamp(28px, 4cqw, 36px)",
                height: "clamp(28px, 4cqw, 36px)",
                borderRadius: "clamp(6px, 1cqw, 10px)",
                background: "linear-gradient(135deg, #39B44A, #27A8E0)",
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
                  color: "#39B44A",
                  fontFamily: "Poppins, sans-serif",
                  margin: 0,
                }}
              >
                Create Task
              </p>
            </div>
          </div>
          <div
            style={{
              background: "#fff",
              borderRadius: "clamp(6px, 1cqw, 10px)",
              border: "1px solid rgba(57,180,74,0.15)",
              padding: "clamp(8px, 1.2cqw, 11px)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
                marginBottom: "clamp(4px, 0.7cqw, 7px)",
              }}
            >
              <div
                style={{
                  width: "clamp(14px, 1.8cqw, 18px)",
                  height: "clamp(14px, 1.8cqw, 18px)",
                  borderRadius: "3px",
                  background: "#39B44A",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg viewBox="0 0 12 12" fill="none" style={{ width: "60%", height: "60%" }}>
                  <path d="M2 6l3 3 5-5" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p
                style={{
                  fontSize: "clamp(7px, 1cqw, 9px)",
                  fontWeight: 600,
                  color: "#39B44A",
                  fontFamily: "Poppins, sans-serif",
                  margin: 0,
                }}
              >
                High Priority
              </p>
            </div>
            <p
              style={{
                fontSize: "clamp(7px, 0.95cqw, 9px)",
                color: "#005C90",
                fontFamily: "Poppins, sans-serif",
                margin: 0,
                lineHeight: 1.3,
              }}
            >
              Assigned to Support team for immediate follow-up
            </p>
          </div>
        </div>

        {/* Action 2: Update Record */}
        <div
          style={{
            background: "#F7FBFE",
            border: "2px solid #0981B5",
            borderRadius: "clamp(8px, 1.5cqw, 14px)",
            padding: "clamp(10px, 1.5cqw, 14px)",
            display: "flex",
            flexDirection: "column",
            gap: "clamp(8px, 1.3cqw, 12px)",
            boxShadow: "0 2px 8px rgba(9,129,181,0.10)",
            animation: "slideUp 0.6s ease-out 0.3s both",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "clamp(6px, 1cqw, 10px)",
            }}
          >
            <div
              style={{
                width: "clamp(28px, 4cqw, 36px)",
                height: "clamp(28px, 4cqw, 36px)",
                borderRadius: "clamp(6px, 1cqw, 10px)",
                background: "linear-gradient(135deg, #0981B5, #27A8E0)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <svg viewBox="0 0 16 16" fill="none" style={{ width: "55%", height: "55%" }}>
                <path d="M2 3h12M2 7h12M2 11h8" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <p
                style={{
                  fontSize: "clamp(8px, 1.2cqw, 11px)",
                  fontWeight: 700,
                  color: "#0981B5",
                  fontFamily: "Poppins, sans-serif",
                  margin: 0,
                }}
              >
                Update Record
              </p>
            </div>
          </div>
          <div
            style={{
              background: "#fff",
              borderRadius: "clamp(6px, 1cqw, 10px)",
              border: "1px solid rgba(9,129,181,0.15)",
              padding: "clamp(8px, 1.2cqw, 11px)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
                marginBottom: "clamp(4px, 0.7cqw, 7px)",
              }}
            >
              <div
                style={{
                  width: "clamp(14px, 1.8cqw, 18px)",
                  height: "clamp(14px, 1.8cqw, 18px)",
                  borderRadius: "3px",
                  background: "#0981B5",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg viewBox="0 0 12 12" fill="none" style={{ width: "60%", height: "60%" }}>
                  <path d="M2 6l3 3 5-5" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p
                style={{
                  fontSize: "clamp(7px, 1cqw, 9px)",
                  fontWeight: 600,
                  color: "#0981B5",
                  fontFamily: "Poppins, sans-serif",
                  margin: 0,
                }}
              >
                Log Issue
              </p>
            </div>
            <p
              style={{
                fontSize: "clamp(7px, 0.95cqw, 9px)",
                color: "#005C90",
                fontFamily: "Poppins, sans-serif",
                margin: 0,
                lineHeight: 1.3,
              }}
            >
              Add to Account: "Implementation Delay - 1 week"
            </p>
          </div>
        </div>
      </div>
    </div>

    <style>{`
      @keyframes slideUp {
        from {
          opacity: 0;
          transform: translateY(10px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `}</style>
  </div>
);

export default AiResponseMappingVisual;
