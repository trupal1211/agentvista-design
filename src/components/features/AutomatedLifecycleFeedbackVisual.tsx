/**
 * Automated Lifecycle Feedback Visual
 * Shows: CRM Lifecycle Events → Triggered Surveys
 * RESPONSIVE: Uses container queries for adaptive sizing
 */

const AutomatedLifecycleFeedbackVisual = () => (
  <div
    className="w-full h-full flex flex-col overflow-hidden"
    style={{ background: "#F2F8FC" }}
  >
    {/* ── Top: CRM Lifecycle Events ── */}
    <div
      className="flex flex-col justify-center"
      style={{
        flex: 1,
        background: "#EBF5FB",
        borderBottom: "1px solid rgba(0,92,144,0.11)",
        padding: "clamp(10px, 2.5cqw, 22px) clamp(12px, 2.5cqw, 28px)",
        gap: "clamp(8px, 1.4cqw, 12px)",
      }}
    >
      <span
        style={{
          fontSize: "clamp(9px, 1.1cqw, 11px)",
          fontWeight: 700,
          letterSpacing: "0.13em",
          textTransform: "uppercase",
          color: "#0981B5",
          fontFamily: "Poppins, sans-serif",
          flexShrink: 0,
        }}
      >
        Lifecycle Events
      </span>

      {/* Events grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(clamp(70px, 20%, 140px), 1fr))",
          gap: "clamp(8px, 1.5cqw, 12px)",
          flex: 1,
          minHeight: 0,
        }}
      >
        {/* Event 1: Created */}
        <div
          style={{
            background: "#fff",
            border: "1px solid rgba(0,92,144,0.11)",
            borderRadius: "clamp(8px, 1.5cqw, 14px)",
            padding: "clamp(8px, 1.3cqw, 12px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "clamp(6px, 1cqw, 10px)",
            boxShadow: "0 1px 6px rgba(0,38,73,0.05)",
            animation: "pulse 2s ease-in-out infinite 0s",
          }}
        >
          <div
            style={{
              width: "clamp(24px, 3.5cqw, 36px)",
              height: "clamp(24px, 3.5cqw, 36px)",
              borderRadius: "50%",
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
          <p
            style={{
              fontSize: "clamp(7px, 1cqw, 9px)",
              fontWeight: 600,
              color: "#002649",
              fontFamily: "Poppins, sans-serif",
              margin: 0,
              textAlign: "center",
            }}
          >
            Created
          </p>
        </div>

        {/* Event 2: Qualified */}
        <div
          style={{
            background: "#fff",
            border: "1px solid rgba(0,92,144,0.11)",
            borderRadius: "clamp(8px, 1.5cqw, 14px)",
            padding: "clamp(8px, 1.3cqw, 12px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "clamp(6px, 1cqw, 10px)",
            boxShadow: "0 1px 6px rgba(0,38,73,0.05)",
            animation: "pulse 2s ease-in-out infinite 0.2s",
          }}
        >
          <div
            style={{
              width: "clamp(24px, 3.5cqw, 36px)",
              height: "clamp(24px, 3.5cqw, 36px)",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #27A8E0, #39B44A)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <svg viewBox="0 0 16 16" fill="none" style={{ width: "55%", height: "55%" }}>
              <path d="M2 8l3 3 9-9" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <p
            style={{
              fontSize: "clamp(7px, 1cqw, 9px)",
              fontWeight: 600,
              color: "#002649",
              fontFamily: "Poppins, sans-serif",
              margin: 0,
              textAlign: "center",
            }}
          >
            Qualified
          </p>
        </div>

        {/* Event 3: Won */}
        <div
          style={{
            background: "#fff",
            border: "1px solid rgba(0,92,144,0.11)",
            borderRadius: "clamp(8px, 1.5cqw, 14px)",
            padding: "clamp(8px, 1.3cqw, 12px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "clamp(6px, 1cqw, 10px)",
            boxShadow: "0 1px 6px rgba(0,38,73,0.05)",
            animation: "pulse 2s ease-in-out infinite 0.4s",
          }}
        >
          <div
            style={{
              width: "clamp(24px, 3.5cqw, 36px)",
              height: "clamp(24px, 3.5cqw, 36px)",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #39B44A, #005C90)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <svg viewBox="0 0 16 16" fill="none" style={{ width: "55%", height: "55%" }}>
              <path d="M2 8l3 3 9-9M2 8l3 3 9-9" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <p
            style={{
              fontSize: "clamp(7px, 1cqw, 9px)",
              fontWeight: 600,
              color: "#002649",
              fontFamily: "Poppins, sans-serif",
              margin: 0,
              textAlign: "center",
            }}
          >
            Won
          </p>
        </div>

        {/* Event 4: Churned */}
        <div
          style={{
            background: "#fff",
            border: "1px solid rgba(0,92,144,0.11)",
            borderRadius: "clamp(8px, 1.5cqw, 14px)",
            padding: "clamp(8px, 1.3cqw, 12px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "clamp(6px, 1cqw, 10px)",
            boxShadow: "0 1px 6px rgba(0,38,73,0.05)",
            animation: "pulse 2s ease-in-out infinite 0.6s",
          }}
        >
          <div
            style={{
              width: "clamp(24px, 3.5cqw, 36px)",
              height: "clamp(24px, 3.5cqw, 36px)",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #005C90, #0981B5)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <svg viewBox="0 0 16 16" fill="none" style={{ width: "55%", height: "55%" }}>
              <path d="M3 3l10 10M13 3L3 13" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <p
            style={{
              fontSize: "clamp(7px, 1cqw, 9px)",
              fontWeight: 600,
              color: "#002649",
              fontFamily: "Poppins, sans-serif",
              margin: 0,
              textAlign: "center",
            }}
          >
            Churned
          </p>
        </div>
      </div>
    </div>

    {/* ── Bottom: Triggered Surveys ── */}
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
        Triggered Surveys
      </span>

      {/* Survey cards */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "clamp(6px, 1.2cqw, 10px)",
          flex: 1,
          minHeight: 0,
        }}
      >
        {/* Survey 1: Onboarding */}
        <div
          style={{
            background: "#F7FBFE",
            border: "1px solid rgba(0,92,144,0.15)",
            borderRadius: "clamp(8px, 1.3cqw, 12px)",
            padding: "clamp(8px, 1.2cqw, 12px)",
            display: "flex",
            alignItems: "center",
            gap: "clamp(8px, 1.3cqw, 12px)",
            boxShadow: "0 1px 4px rgba(0,38,73,0.03)",
            animation: "slideRight 0.5s ease-out 0.1s both",
          }}
        >
          <div
            style={{
              width: "clamp(20px, 2.5cqw, 28px)",
              height: "clamp(20px, 2.5cqw, 28px)",
              borderRadius: "4px",
              background: "#0981B5",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <svg viewBox="0 0 16 16" fill="none" style={{ width: "60%", height: "60%" }}>
              <path d="M2 4h12M2 8h8M2 12h5" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <p
              style={{
                fontSize: "clamp(8px, 1.1cqw, 10px)",
                fontWeight: 700,
                color: "#002649",
                fontFamily: "Poppins, sans-serif",
                margin: "0 0 clamp(1px, 0.3cqw, 3px) 0",
              }}
            >
              Onboarding Survey
            </p>
            <p
              style={{
                fontSize: "clamp(7px, 0.95cqw, 9px)",
                color: "#005C90",
                fontFamily: "Poppins, sans-serif",
                margin: 0,
              }}
            >
              Triggered on: Account Created
            </p>
          </div>
        </div>

        {/* Survey 2: Post-Sale */}
        <div
          style={{
            background: "#F7FBFE",
            border: "1px solid rgba(0,92,144,0.15)",
            borderRadius: "clamp(8px, 1.3cqw, 12px)",
            padding: "clamp(8px, 1.2cqw, 12px)",
            display: "flex",
            alignItems: "center",
            gap: "clamp(8px, 1.3cqw, 12px)",
            boxShadow: "0 1px 4px rgba(0,38,73,0.03)",
            animation: "slideRight 0.5s ease-out 0.2s both",
          }}
        >
          <div
            style={{
              width: "clamp(20px, 2.5cqw, 28px)",
              height: "clamp(20px, 2.5cqw, 28px)",
              borderRadius: "4px",
              background: "#27A8E0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <svg viewBox="0 0 16 16" fill="none" style={{ width: "60%", height: "60%" }}>
              <path d="M2 4h12M2 8h8M2 12h5" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <p
              style={{
                fontSize: "clamp(8px, 1.1cqw, 10px)",
                fontWeight: 700,
                color: "#002649",
                fontFamily: "Poppins, sans-serif",
                margin: "0 0 clamp(1px, 0.3cqw, 3px) 0",
              }}
            >
              Post-Sale Survey
            </p>
            <p
              style={{
                fontSize: "clamp(7px, 0.95cqw, 9px)",
                color: "#005C90",
                fontFamily: "Poppins, sans-serif",
                margin: 0,
              }}
            >
              Triggered on: Deal Won
            </p>
          </div>
        </div>

        {/* Survey 3: Churn Prevention */}
        <div
          style={{
            background: "#F7FBFE",
            border: "1px solid rgba(0,92,144,0.15)",
            borderRadius: "clamp(8px, 1.3cqw, 12px)",
            padding: "clamp(8px, 1.2cqw, 12px)",
            display: "flex",
            alignItems: "center",
            gap: "clamp(8px, 1.3cqw, 12px)",
            boxShadow: "0 1px 4px rgba(0,38,73,0.03)",
            animation: "slideRight 0.5s ease-out 0.3s both",
          }}
        >
          <div
            style={{
              width: "clamp(20px, 2.5cqw, 28px)",
              height: "clamp(20px, 2.5cqw, 28px)",
              borderRadius: "4px",
              background: "#39B44A",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <svg viewBox="0 0 16 16" fill="none" style={{ width: "60%", height: "60%" }}>
              <path d="M2 4h12M2 8h8M2 12h5" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <p
              style={{
                fontSize: "clamp(8px, 1.1cqw, 10px)",
                fontWeight: 700,
                color: "#002649",
                fontFamily: "Poppins, sans-serif",
                margin: "0 0 clamp(1px, 0.3cqw, 3px) 0",
              }}
            >
              Churn Prevention Survey
            </p>
            <p
              style={{
                fontSize: "clamp(7px, 0.95cqw, 9px)",
                color: "#005C90",
                fontFamily: "Poppins, sans-serif",
                margin: 0,
              }}
            >
              Triggered on: Account Churned
            </p>
          </div>
        </div>
      </div>
    </div>

    <style>{`
      @keyframes slideRight {
        from {
          opacity: 0;
          transform: translateX(-8px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
      @keyframes pulse {
        0%, 100% {
          opacity: 1;
        }
        50% {
          opacity: 0.7;
        }
      }
    `}</style>
  </div>
);

export default AutomatedLifecycleFeedbackVisual;
