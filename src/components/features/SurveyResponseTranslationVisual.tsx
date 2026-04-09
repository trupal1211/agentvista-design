/**
 * Survey & Response Translation Visual
 * Shows: Survey Content → Multiple Languages & Translated Responses
 * RESPONSIVE: Uses container queries for adaptive sizing
 */

const SurveyResponseTranslationVisual = () => (
  <div
    className="w-full h-full flex flex-col overflow-hidden"
    style={{ background: "#F2F8FC" }}
  >
    {/* ── Top: Survey Content Translation ── */}
    <div
      className="flex flex-col justify-center"
      style={{
        flex: 0.95,
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
        Survey Available In
      </span>

      {/* Language cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(clamp(80px, 22%, 150px), 1fr))",
          gap: "clamp(8px, 1.5cqw, 12px)",
          flex: 1,
          minHeight: 0,
        }}
      >
        {/* Language 1: English */}
        <div
          style={{
            background: "#fff",
            border: "2px solid #0981B5",
            borderRadius: "clamp(8px, 1.5cqw, 14px)",
            padding: "clamp(10px, 1.5cqw, 14px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "clamp(6px, 1cqw, 10px)",
            boxShadow: "0 2px 8px rgba(9,129,181,0.15)",
            animation: "scaleIn 0.5s ease-out 0s both",
          }}
        >
          <div
            style={{
              fontSize: "clamp(20px, 4cqw, 32px)",
              lineHeight: 1,
            }}
          >
            🇺🇸
          </div>
          <p
            style={{
              fontSize: "clamp(8px, 1.1cqw, 10px)",
              fontWeight: 700,
              color: "#002649",
              fontFamily: "Poppins, sans-serif",
              margin: 0,
              textAlign: "center",
            }}
          >
            English
          </p>
          <p
            style={{
              fontSize: "clamp(7px, 0.9cqw, 8px)",
              color: "#39B44A",
              fontFamily: "Poppins, sans-serif",
              margin: 0,
              textAlign: "center",
              fontWeight: 600,
            }}
          >
            Original
          </p>
        </div>

        {/* Language 2: Spanish */}
        <div
          style={{
            background: "#fff",
            border: "1px solid rgba(0,92,144,0.15)",
            borderRadius: "clamp(8px, 1.5cqw, 14px)",
            padding: "clamp(10px, 1.5cqw, 14px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "clamp(6px, 1cqw, 10px)",
            boxShadow: "0 1px 6px rgba(0,38,73,0.05)",
            animation: "scaleIn 0.5s ease-out 0.1s both",
          }}
        >
          <div
            style={{
              fontSize: "clamp(20px, 4cqw, 32px)",
              lineHeight: 1,
            }}
          >
            🇪🇸
          </div>
          <p
            style={{
              fontSize: "clamp(8px, 1.1cqw, 10px)",
              fontWeight: 700,
              color: "#002649",
              fontFamily: "Poppins, sans-serif",
              margin: 0,
              textAlign: "center",
            }}
          >
            Español
          </p>
          <p
            style={{
              fontSize: "clamp(7px, 0.9cqw, 8px)",
              color: "#005C90",
              fontFamily: "Poppins, sans-serif",
              margin: 0,
              textAlign: "center",
              fontWeight: 600,
            }}
          >
            Translated
          </p>
        </div>

        {/* Language 3: French */}
        <div
          style={{
            background: "#fff",
            border: "1px solid rgba(0,92,144,0.15)",
            borderRadius: "clamp(8px, 1.5cqw, 14px)",
            padding: "clamp(10px, 1.5cqw, 14px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "clamp(6px, 1cqw, 10px)",
            boxShadow: "0 1px 6px rgba(0,38,73,0.05)",
            animation: "scaleIn 0.5s ease-out 0.2s both",
          }}
        >
          <div
            style={{
              fontSize: "clamp(20px, 4cqw, 32px)",
              lineHeight: 1,
            }}
          >
            🇫🇷
          </div>
          <p
            style={{
              fontSize: "clamp(8px, 1.1cqw, 10px)",
              fontWeight: 700,
              color: "#002649",
              fontFamily: "Poppins, sans-serif",
              margin: 0,
              textAlign: "center",
            }}
          >
            Français
          </p>
          <p
            style={{
              fontSize: "clamp(7px, 0.9cqw, 8px)",
              color: "#005C90",
              fontFamily: "Poppins, sans-serif",
              margin: 0,
              textAlign: "center",
              fontWeight: 600,
            }}
          >
            Translated
          </p>
        </div>

        {/* Language 4: Japanese */}
        <div
          style={{
            background: "#fff",
            border: "1px solid rgba(0,92,144,0.15)",
            borderRadius: "clamp(8px, 1.5cqw, 14px)",
            padding: "clamp(10px, 1.5cqw, 14px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "clamp(6px, 1cqw, 10px)",
            boxShadow: "0 1px 6px rgba(0,38,73,0.05)",
            animation: "scaleIn 0.5s ease-out 0.3s both",
          }}
        >
          <div
            style={{
              fontSize: "clamp(20px, 4cqw, 32px)",
              lineHeight: 1,
            }}
          >
            🇯🇵
          </div>
          <p
            style={{
              fontSize: "clamp(8px, 1.1cqw, 10px)",
              fontWeight: 700,
              color: "#002649",
              fontFamily: "Poppins, sans-serif",
              margin: 0,
              textAlign: "center",
            }}
          >
            日本語
          </p>
          <p
            style={{
              fontSize: "clamp(7px, 0.9cqw, 8px)",
              color: "#005C90",
              fontFamily: "Poppins, sans-serif",
              margin: 0,
              textAlign: "center",
              fontWeight: 600,
            }}
          >
            Translated
          </p>
        </div>
      </div>
    </div>

    {/* ── Bottom: Response Translation ── */}
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
        Translated Responses
      </span>

      {/* Responses */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "clamp(8px, 1.3cqw, 12px)",
          flex: 1,
          minHeight: 0,
        }}
      >
        {/* Response 1 */}
        <div
          style={{
            background: "#F7FBFE",
            border: "1px solid rgba(0,92,144,0.15)",
            borderRadius: "clamp(8px, 1.3cqw, 12px)",
            padding: "clamp(8px, 1.2cqw, 12px)",
            animation: "slideUp 0.5s ease-out 0.1s both",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "clamp(6px, 1cqw, 10px)",
              marginBottom: "clamp(4px, 0.8cqw, 8px)",
            }}
          >
            <span
              style={{
                fontSize: "clamp(18px, 3cqw, 24px)",
                lineHeight: 1,
              }}
            >
              🇪🇸
            </span>
            <p
              style={{
                fontSize: "clamp(7px, 1cqw, 9px)",
                fontWeight: 600,
                color: "#005C90",
                fontFamily: "Poppins, sans-serif",
                margin: 0,
              }}
            >
              Spanish Response
            </p>
          </div>
          <p
            style={{
              fontSize: "clamp(8px, 1.1cqw, 10px)",
              color: "#002649",
              fontFamily: "Poppins, sans-serif",
              margin: "clamp(4px, 0.8cqw, 8px) 0 0 0",
              lineHeight: 1.4,
              fontStyle: "italic",
            }}
          >
            "Muy satisfecho con la calidad del producto..."
          </p>
          <div
            style={{
              fontSize: "clamp(7px, 1cqw, 9px)",
              color: "#39B44A",
              fontFamily: "Poppins, sans-serif",
              margin: "clamp(4px, 0.8cqw, 8px) 0 0 0",
              fontWeight: 500,
            }}
          >
            ✓ Translated to: "Very satisfied with product quality..."
          </div>
        </div>

        {/* Response 2 */}
        <div
          style={{
            background: "#F7FBFE",
            border: "1px solid rgba(0,92,144,0.15)",
            borderRadius: "clamp(8px, 1.3cqw, 12px)",
            padding: "clamp(8px, 1.2cqw, 12px)",
            animation: "slideUp 0.5s ease-out 0.2s both",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "clamp(6px, 1cqw, 10px)",
              marginBottom: "clamp(4px, 0.8cqw, 8px)",
            }}
          >
            <span
              style={{
                fontSize: "clamp(18px, 3cqw, 24px)",
                lineHeight: 1,
              }}
            >
              🇫🇷
            </span>
            <p
              style={{
                fontSize: "clamp(7px, 1cqw, 9px)",
                fontWeight: 600,
                color: "#005C90",
                fontFamily: "Poppins, sans-serif",
                margin: 0,
              }}
            >
              French Response
            </p>
          </div>
          <p
            style={{
              fontSize: "clamp(8px, 1.1cqw, 10px)",
              color: "#002649",
              fontFamily: "Poppins, sans-serif",
              margin: "clamp(4px, 0.8cqw, 8px) 0 0 0",
              lineHeight: 1.4,
              fontStyle: "italic",
            }}
          >
            "Excellent support technique et mise en œuvre..."
          </p>
          <div
            style={{
              fontSize: "clamp(7px, 1cqw, 9px)",
              color: "#39B44A",
              fontFamily: "Poppins, sans-serif",
              margin: "clamp(4px, 0.8cqw, 8px) 0 0 0",
              fontWeight: 500,
            }}
          >
            ✓ Translated to: "Excellent technical support and implementation..."
          </div>
        </div>

        {/* Response 3 */}
        <div
          style={{
            background: "#F7FBFE",
            border: "1px solid rgba(0,92,144,0.15)",
            borderRadius: "clamp(8px, 1.3cqw, 12px)",
            padding: "clamp(8px, 1.2cqw, 12px)",
            animation: "slideUp 0.5s ease-out 0.3s both",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "clamp(6px, 1cqw, 10px)",
              marginBottom: "clamp(4px, 0.8cqw, 8px)",
            }}
          >
            <span
              style={{
                fontSize: "clamp(18px, 3cqw, 24px)",
                lineHeight: 1,
              }}
            >
              🇯🇵
            </span>
            <p
              style={{
                fontSize: "clamp(7px, 1cqw, 9px)",
                fontWeight: 600,
                color: "#005C90",
                fontFamily: "Poppins, sans-serif",
                margin: 0,
              }}
            >
              Japanese Response
            </p>
          </div>
          <p
            style={{
              fontSize: "clamp(8px, 1.1cqw, 10px)",
              color: "#002649",
              fontFamily: "Poppins, sans-serif",
              margin: "clamp(4px, 0.8cqw, 8px) 0 0 0",
              lineHeight: 1.4,
              fontStyle: "italic",
            }}
          >
            "製品の品質と機能に大変満足しています..."
          </p>
          <div
            style={{
              fontSize: "clamp(7px, 1cqw, 9px)",
              color: "#39B44A",
              fontFamily: "Poppins, sans-serif",
              margin: "clamp(4px, 0.8cqw, 8px) 0 0 0",
              fontWeight: 500,
            }}
          >
            ✓ Translated to: "Very satisfied with the product quality and features..."
          </div>
        </div>
      </div>
    </div>

    <style>{`
      @keyframes scaleIn {
        from {
          opacity: 0;
          transform: scale(0.95);
        }
        to {
          opacity: 1;
          transform: scale(1);
        }
      }
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
    `}</style>
  </div>
);

export default SurveyResponseTranslationVisual;
