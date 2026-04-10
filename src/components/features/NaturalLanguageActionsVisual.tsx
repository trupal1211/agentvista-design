/**
 * Natural Language Actions Visual
 * CONCEPT J — Execution Steps + Live Survey Preview (Split)
 * RESPONSIVE: Uses vw units with clamp() for consistent scaling on all screens
 * Desktop: Horizontal split • Mobile: Stacks vertically
 */

const NaturalLanguageActionsVisual = () => (
  <div
    className="w-full h-full flex overflow-hidden"
    style={{
      background: "#F2F8FC",
    }}
  >
    {/* ── LEFT: Execution Steps ── */}
    <div
      style={{
        flex: "0 0 54%",
        background: "#EBF5FB",
        borderRight: "1px solid rgba(0,92,144,0.11)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "clamp(12px,2.2vw,24px) clamp(10px,1.8vw,20px)",
        gap: "clamp(8px,1.3vw,14px)",
        overflow: "hidden",
        minWidth: 0,
      }}
    >
      {/* Label: Executing */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "5px",
          fontSize: "clamp(7px,0.95vw,10px)",
          fontWeight: 700,
          letterSpacing: "0.13em",
          textTransform: "uppercase",
          color: "#0981B5",
          fontFamily: "Poppins, sans-serif",
        }}
      >
        <div
          style={{
            width: "clamp(5px,0.7vw,7px)",
            height: "clamp(5px,0.7vw,7px)",
            borderRadius: "50%",
            background: "#27A8E0",
          }}
        />
        Executing
      </div>

      {/* Steps List */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "clamp(5px,0.9vw,10px)",
        }}
      >
        {/* Step 1: Done */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "clamp(7px,1.1vw,12px)",
            background: "#fff",
            border: "1px solid rgba(42,154,79,0.28)",
            borderRadius: "clamp(7px,1.1vw,12px)",
            padding: "clamp(6px,1vw,11px) clamp(8px,1.3vw,14px)",
            boxShadow: "0 2px 18px rgba(0,38,73,0.09)",
            animation: `fadeUp 0.45s ease both`,
            animationDelay: "0.08s",
          }}
        >
          {/* Step Number (Done: Check Mark) */}
          <div
            style={{
              width: "clamp(18px,2.8vw,24px)",
              height: "clamp(18px,2.8vw,24px)",
              borderRadius: "50%",
              background: "#2A9A4F",
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "clamp(7px,1vw,10px)",
              fontWeight: 800,
              color: "#fff",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            ✓
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div
              style={{
                fontSize: "clamp(8px,1.05vw,11px)",
                fontWeight: 700,
                color: "#002649",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Survey Created
            </div>
            <div
              style={{
                fontSize: "clamp(7px,0.82vw,9px)",
                color: "#005C90",
                marginTop: "1px",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              12 questions · logic on
            </div>
          </div>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "3px",
              fontSize: "clamp(6px,0.82vw,9px)",
              fontWeight: 700,
              letterSpacing: "0.09em",
              textTransform: "uppercase",
              borderRadius: 20,
              padding: "2px 8px",
              background: "rgba(42,154,79,0.12)",
              color: "#2A9A4F",
              fontFamily: "Poppins, sans-serif",
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
          >
            Done
          </span>
        </div>

        {/* Step 2: Done */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "clamp(7px,1.1vw,12px)",
            background: "#fff",
            border: "1px solid rgba(42,154,79,0.28)",
            borderRadius: "clamp(7px,1.1vw,12px)",
            padding: "clamp(6px,1vw,11px) clamp(8px,1.3vw,14px)",
            boxShadow: "0 2px 18px rgba(0,38,73,0.09)",
            animation: `fadeUp 0.45s ease both`,
            animationDelay: "0.18s",
          }}
        >
          <div
            style={{
              width: "clamp(18px,2.8vw,24px)",
              height: "clamp(18px,2.8vw,24px)",
              borderRadius: "50%",
              background: "#2A9A4F",
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "clamp(7px,1vw,10px)",
              fontWeight: 800,
              color: "#fff",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            ✓
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div
              style={{
                fontSize: "clamp(8px,1.05vw,11px)",
                fontWeight: 700,
                color: "#002649",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Distributed
            </div>
            <div
              style={{
                fontSize: "clamp(7px,0.82vw,9px)",
                color: "#005C90",
                marginTop: "1px",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              348 enterprise · Mon 9am
            </div>
          </div>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "3px",
              fontSize: "clamp(6px,0.82vw,9px)",
              fontWeight: 700,
              letterSpacing: "0.09em",
              textTransform: "uppercase",
              borderRadius: 20,
              padding: "2px 8px",
              background: "rgba(42,154,79,0.12)",
              color: "#2A9A4F",
              fontFamily: "Poppins, sans-serif",
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
          >
            Sent
          </span>
        </div>

        {/* Step 3: Done */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "clamp(7px,1.1vw,12px)",
            background: "#fff",
            border: "1px solid rgba(42,154,79,0.28)",
            borderRadius: "clamp(7px,1.1vw,12px)",
            padding: "clamp(6px,1vw,11px) clamp(8px,1.3vw,14px)",
            boxShadow: "0 2px 18px rgba(0,38,73,0.09)",
            animation: `fadeUp 0.45s ease both`,
            animationDelay: "0.28s",
          }}
        >
          <div
            style={{
              width: "clamp(18px,2.8vw,24px)",
              height: "clamp(18px,2.8vw,24px)",
              borderRadius: "50%",
              background: "#2A9A4F",
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "clamp(7px,1vw,10px)",
              fontWeight: 800,
              color: "#fff",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            ✓
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div
              style={{
                fontSize: "clamp(8px,1.05vw,11px)",
                fontWeight: 700,
                color: "#002649",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Summaries Ready
            </div>
            <div
              style={{
                fontSize: "clamp(7px,0.82vw,9px)",
                color: "#005C90",
                marginTop: "1px",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              68% positive · top theme: onboarding
            </div>
          </div>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "3px",
              fontSize: "clamp(6px,0.82vw,9px)",
              fontWeight: 700,
              letterSpacing: "0.09em",
              textTransform: "uppercase",
              borderRadius: 20,
              padding: "2px 8px",
              background: "rgba(196,122,26,0.12)",
              color: "#C47A1A",
              fontFamily: "Poppins, sans-serif",
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
          >
            Ready
          </span>
        </div>

        {/* Step 4: In Progress */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "clamp(7px,1.1vw,12px)",
            background: "#fff",
            border: "1px solid rgba(0,92,144,0.11)",
            borderRadius: "clamp(7px,1.1vw,12px)",
            padding: "clamp(6px,1vw,11px) clamp(8px,1.3vw,14px)",
            boxShadow: "0 2px 18px rgba(0,38,73,0.09)",
            animation: `fadeUp 0.45s ease both`,
            animationDelay: "0.38s",
          }}
        >
          <div
            style={{
              width: "clamp(18px,2.8vw,24px)",
              height: "clamp(18px,2.8vw,24px)",
              borderRadius: "50%",
              background: "linear-gradient(90deg,#0981B5,#27A8E0)",
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "clamp(7px,1vw,10px)",
              fontWeight: 800,
              color: "#fff",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            4
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div
              style={{
                fontSize: "clamp(8px,1.05vw,11px)",
                fontWeight: 700,
                color: "#002649",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              22 Alerts Raised
            </div>
            <div
              style={{
                fontSize: "clamp(7px,0.82vw,9px)",
                color: "#005C90",
                marginTop: "1px",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Escalated to CS · CRM synced
            </div>
          </div>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "3px",
              fontSize: "clamp(6px,0.82vw,9px)",
              fontWeight: 700,
              letterSpacing: "0.09em",
              textTransform: "uppercase",
              borderRadius: 20,
              padding: "2px 8px",
              background: "rgba(212,67,50,0.10)",
              color: "#D44332",
              fontFamily: "Poppins, sans-serif",
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
          >
            Urgent
          </span>
        </div>
      </div>
    </div>

    {/* ── RIGHT: Live Preview ── */}
    <div
      style={{
        flex: 1,
        background: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "clamp(12px,2.2vw,24px) clamp(10px,1.8vw,20px)",
        gap: "clamp(8px,1.3vw,14px)",
        overflow: "hidden",
        minWidth: 0,
      }}
    >
      {/* Label: Live Preview */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "5px",
          fontSize: "clamp(7px,0.95vw,10px)",
          fontWeight: 700,
          letterSpacing: "0.13em",
          textTransform: "uppercase",
          color: "#2A9A4F",
          fontFamily: "Poppins, sans-serif",
        }}
      >
        <div
          style={{
            width: "clamp(5px,0.7vw,7px)",
            height: "clamp(5px,0.7vw,7px)",
            borderRadius: "50%",
            background: "#2A9A4F",
          }}
        />
        Live Preview
      </div>

      {/* Preview Card */}
      <div
        style={{
          background: "#F7FBFE",
          border: "1px solid rgba(0,92,144,0.11)",
          borderRadius: "clamp(8px,1.3vw,14px)",
          overflow: "hidden",
          boxShadow: "0 2px 18px rgba(0,38,73,0.09)",
        }}
      >
        {/* Card Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "clamp(6px,0.9vw,10px)",
            padding: "clamp(7px,1.1vw,12px) clamp(10px,1.5vw,16px)",
            background: "linear-gradient(90deg,#0981B5,#27A8E0)",
          }}
        >
          {/* Logo */}
          <div
            style={{
              width: "clamp(20px,3.2vw,28px)",
              height: "clamp(20px,3.2vw,28px)",
              borderRadius: "clamp(5px,0.8vw,8px)",
              background: "rgba(255,255,255,0.22)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "clamp(9px,1.2vw,12px)",
              fontWeight: 800,
              color: "#fff",
              flexShrink: 0,
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Q
          </div>
          <span
            style={{
              fontSize: "clamp(9px,1.2vw,12px)",
              fontWeight: 700,
              color: "#fff",
              flex: 1,
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Q4 Satisfaction Survey
          </span>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "3px",
              fontSize: "clamp(6px,0.82vw,9px)",
              fontWeight: 700,
              letterSpacing: "0.09em",
              textTransform: "uppercase",
              borderRadius: 20,
              padding: "2px 8px",
              background: "rgba(255,255,255,0.18)",
              color: "#fff",
              fontFamily: "Poppins, sans-serif",
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
          >
            Live
          </span>
        </div>

        {/* Card Body - Questions */}
        <div
          style={{
            padding: "clamp(7px,1.2vw,12px) clamp(10px,1.5vw,16px)",
            display: "flex",
            flexDirection: "column",
            gap: "clamp(5px,0.85vw,9px)",
          }}
        >
          {[100, 80, 90, 72].map((width, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "clamp(5px,0.8vw,9px)",
              }}
            >
              <div
                style={{
                  width: "clamp(5px,0.7vw,7px)",
                  height: "clamp(5px,0.7vw,7px)",
                  borderRadius: "50%",
                  background: [
                    "#0981B5",
                    "#27A8E0",
                    "#0981B5",
                    "#73CFE1",
                  ][i],
                  flexShrink: 0,
                }}
              />
              <div
                style={{
                  flex: 1,
                  height: "clamp(4px,0.65vw,6px)",
                  borderRadius: 3,
                  background: "rgba(9,129,181,0.13)",
                  width: `${width}%`,
                }}
              />
            </div>
          ))}
        </div>

        {/* Card Footer - Stats */}
        <div
          style={{
            padding: "clamp(6px,1vw,10px) clamp(10px,1.5vw,16px)",
            borderTop: "1px solid rgba(0,92,144,0.11)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            gap: "clamp(5px,0.8vw,9px)",
            minWidth: 0,
            overflow: "hidden",
          }}
        >
          {/* Stats Row */}
          <div
            style={{
              display: "flex",
              gap: "clamp(10px,1.8vw,18px)",
              justifyContent: "space-around",
              width: "100%",
            }}
          >
            {/* Responses Stat */}
            <div style={{ display: "flex", flexDirection: "column", gap: "clamp(2px,0.3vw,3px)" }}>
              <div
                style={{
                  fontSize: "clamp(11px,1.8vw,16px)",
                  fontWeight: 800,
                  color: "#2A9A4F",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                212
              </div>
              <div
                style={{
                  fontSize: "clamp(6px,0.78vw,8px)",
                  color: "#005C90",
                  textTransform: "uppercase",
                  letterSpacing: "0.09em",
                  fontWeight: 700,
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                Responses
              </div>
            </div>

            {/* Positive Stat */}
            <div style={{ display: "flex", flexDirection: "column", gap: "clamp(2px,0.3vw,3px)" }}>
              <div
                style={{
                  fontSize: "clamp(11px,1.8vw,16px)",
                  fontWeight: 800,
                  color: "#C47A1A",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                68%
              </div>
              <div
                style={{
                  fontSize: "clamp(6px,0.78vw,8px)",
                  color: "#005C90",
                  textTransform: "uppercase",
                  letterSpacing: "0.09em",
                  fontWeight: 700,
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                Positive
              </div>
            </div>

            {/* Alerts Stat */}
            <div style={{ display: "flex", flexDirection: "column", gap: "clamp(2px,0.3vw,3px)" }}>
              <div
                style={{
                  fontSize: "clamp(11px,1.8vw,16px)",
                  fontWeight: 800,
                  color: "#D44332",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                22
              </div>
              <div
                style={{
                  fontSize: "clamp(6px,0.78vw,8px)",
                  color: "#005C90",
                  textTransform: "uppercase",
                  letterSpacing: "0.09em",
                  fontWeight: 700,
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                Alerts
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <style>{`
      @keyframes fadeUp {
        from { opacity: 0; transform: translateY(7px); }
        to { opacity: 1; transform: none; }
      }
      @keyframes blink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0; }
      }
    `}</style>
  </div>
);

export default NaturalLanguageActionsVisual;
