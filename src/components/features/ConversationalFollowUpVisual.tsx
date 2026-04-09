/**
 * Conversational Follow-Up Visual
 * Shows: Participant Response → AI Clarification Questions
 * RESPONSIVE: Uses container queries for adaptive sizing
 */

const ConversationalFollowUpVisual = () => (
  <div
    className="w-full h-full flex flex-col overflow-hidden"
    style={{ background: "#F2F8FC" }}
  >
    {/* ── Top: Participant Response ── */}
    <div
      className="flex flex-col justify-center"
      style={{
        flex: 0.9,
        background: "#EEF7FD",
        borderBottom: "1px solid rgba(0,92,144,0.1)",
        padding: "clamp(12px, 2.5cqw, 24px) clamp(12px, 2.5cqw, 28px)",
        gap: "clamp(8px, 1.5cqw, 14px)",
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
        Participant Response
      </span>

      {/* Response bubble */}
      <div
        style={{
          background: "#fff",
          border: "1.5px solid rgba(9,129,181,0.25)",
          borderRadius: "clamp(8px, 1.5cqw, 14px)",
          borderBottomLeftRadius: 0,
          padding: "clamp(8px, 1.5cqw, 14px)",
          boxShadow: "0 2px 10px rgba(0,38,73,0.06)",
          alignSelf: "flex-start",
          maxWidth: "80%",
        }}
      >
        <p
          style={{
            fontSize: "clamp(8px, 1.4cqw, 12px)",
            lineHeight: 1.5,
            color: "#002649",
            fontFamily: "Poppins, sans-serif",
            margin: 0,
          }}
        >
          "We've been having issues with the product stability lately."
        </p>
      </div>
    </div>

    {/* ── Bottom: AI Follow-Up Questions ── */}
    <div
      className="flex flex-col flex-1"
      style={{
        background: "#fff",
        padding: "clamp(10px, 2.5cqw, 20px) clamp(12px, 2.5cqw, 28px)",
        gap: "clamp(8px, 1.3cqw, 12px)",
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
          alignSelf: "flex-end",
          flexShrink: 0,
        }}
      >
        AI Asks
      </span>

      {/* Follow-up questions container */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "clamp(6px, 1.2cqw, 11px)",
          flex: 1,
          minHeight: 0,
        }}
      >
        {/* Question 1 */}
        <div
          style={{
            background: "#F7FBFE",
            border: "1px solid rgba(0,92,144,0.15)",
            borderRadius: "clamp(6px, 1.2cqw, 12px)",
            borderBottomRightRadius: 0,
            padding: "clamp(8px, 1.3cqw, 12px)",
            alignSelf: "flex-end",
            maxWidth: "85%",
            boxShadow: "0 2px 8px rgba(0,38,73,0.04)",
            animation: "slideUp 0.5s ease-out 0.1s both",
          }}
        >
          <p
            style={{
              fontSize: "clamp(8px, 1.3cqw, 11px)",
              lineHeight: 1.4,
              color: "#005C90",
              fontFamily: "Poppins, sans-serif",
              margin: 0,
              fontWeight: 500,
            }}
          >
            Which features are most affected?
          </p>
        </div>

        {/* Question 2 */}
        <div
          style={{
            background: "#F7FBFE",
            border: "1px solid rgba(0,92,144,0.15)",
            borderRadius: "clamp(6px, 1.2cqw, 12px)",
            borderBottomRightRadius: 0,
            padding: "clamp(8px, 1.3cqw, 12px)",
            alignSelf: "flex-end",
            maxWidth: "82%",
            boxShadow: "0 2px 8px rgba(0,38,73,0.04)",
            animation: "slideUp 0.5s ease-out 0.2s both",
          }}
        >
          <p
            style={{
              fontSize: "clamp(8px, 1.3cqw, 11px)",
              lineHeight: 1.4,
              color: "#005C90",
              fontFamily: "Poppins, sans-serif",
              margin: 0,
              fontWeight: 500,
            }}
          >
            How long has this been an issue?
          </p>
        </div>

        {/* Question 3 */}
        <div
          style={{
            background: "#F7FBFE",
            border: "1px solid rgba(0,92,144,0.15)",
            borderRadius: "clamp(6px, 1.2cqw, 12px)",
            borderBottomRightRadius: 0,
            padding: "clamp(8px, 1.3cqw, 12px)",
            alignSelf: "flex-end",
            maxWidth: "79%",
            boxShadow: "0 2px 8px rgba(0,38,73,0.04)",
            animation: "slideUp 0.5s ease-out 0.3s both",
          }}
        >
          <p
            style={{
              fontSize: "clamp(8px, 1.3cqw, 11px)",
              lineHeight: 1.4,
              color: "#005C90",
              fontFamily: "Poppins, sans-serif",
              margin: 0,
              fontWeight: 500,
            }}
          >
            What impact has this had on your team?
          </p>
        </div>

        {/* Question 4 - with cursor */}
        <div
          style={{
            background: "#F7FBFE",
            border: "1px solid rgba(0,92,144,0.15)",
            borderRadius: "clamp(6px, 1.2cqw, 12px)",
            borderBottomRightRadius: 0,
            padding: "clamp(8px, 1.3cqw, 12px)",
            alignSelf: "flex-end",
            maxWidth: "75%",
            boxShadow: "0 2px 8px rgba(0,38,73,0.04)",
            animation: "slideUp 0.5s ease-out 0.4s both",
            position: "relative",
          }}
        >
          <p
            style={{
              fontSize: "clamp(8px, 1.3cqw, 11px)",
              lineHeight: 1.4,
              color: "#005C90",
              fontFamily: "Poppins, sans-serif",
              margin: 0,
              fontWeight: 500,
            }}
          >
            Would you like to schedule a follow-up call?
            <span
              style={{
                display: "inline-block",
                width: "1.5px",
                height: "clamp(8px, 1.2cqw, 12px)",
                background: "#0981B5",
                borderRadius: "1px",
                marginLeft: "2px",
                verticalAlign: "middle",
                animation: "blink 1s step-end infinite",
              }}
            />
          </p>
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

export default ConversationalFollowUpVisual;
