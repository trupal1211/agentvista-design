/**
 * Smart Record Targeting Visual
 * Shows: Search/Filter Records → Survey Assignment
 * RESPONSIVE: Uses container queries for adaptive sizing
 */

const SmartRecordTargetingVisual = () => (
  <div
    className="w-full h-full flex flex-col overflow-hidden"
    style={{ background: "#F2F8FC" }}
  >
    {/* ── Top: Search & Filter ── */}
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
        Search & Target
      </span>

      {/* Search input */}
      <div
        style={{
          background: "#fff",
          border: "1px solid rgba(0,92,144,0.15)",
          borderRadius: "clamp(8px, 1.5cqw, 14px)",
          padding: "clamp(8px, 1.2cqw, 12px) clamp(10px, 1.5cqw, 14px)",
          display: "flex",
          alignItems: "center",
          gap: "clamp(8px, 1.3cqw, 12px)",
          boxShadow: "0 1px 6px rgba(0,38,73,0.05)",
        }}
      >
        <svg viewBox="0 0 16 16" fill="none" style={{ width: "clamp(14px, 1.8cqw, 18px)", height: "clamp(14px, 1.8cqw, 18px)", flexShrink: 0 }}>
          <circle cx="6.5" cy="6.5" r="5" stroke="#005C90" strokeWidth="1.2" />
          <path d="M10 10l4 4" stroke="#005C90" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
        <input
          type="text"
          placeholder="Search contacts, leads, accounts..."
          style={{
            flex: 1,
            border: "none",
            outline: "none",
            fontSize: "clamp(8px, 1.2cqw, 11px)",
            color: "#002649",
            fontFamily: "Poppins, sans-serif",
            background: "transparent",
          }}
          readOnly
        />
      </div>

      {/* Filter chips */}
      <div className="flex flex-wrap" style={{ gap: "clamp(6px, 1cqw, 10px)" }}>
        {["Contacts", "VIP Tier", "Region: NA"].map((f) => (
          <span
            key={f}
            style={{
              fontSize: "clamp(7px, 1cqw, 9px)",
              fontWeight: 600,
              fontFamily: "Poppins, sans-serif",
              color: "#005C90",
              background: "#fff",
              border: "1px solid rgba(0,92,144,0.18)",
              borderRadius: 20,
              padding: "clamp(4px, 0.7cqw, 7px) clamp(10px, 1.5cqw, 14px)",
              display: "inline-flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            {f}
            <svg viewBox="0 0 12 12" fill="none" style={{ width: 10, height: 10 }}>
              <path d="M3 9L9 3M9 9L3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </span>
        ))}
      </div>
    </div>

    {/* ── Bottom: Matching Records & Assignment ── */}
    <div
      className="flex flex-col flex-1"
      style={{
        background: "#fff",
        padding: "clamp(10px, 2.5cqw, 20px) clamp(12px, 2.5cqw, 28px)",
        gap: "clamp(8px, 1.4cqw, 12px)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "clamp(8px, 1.5cqw, 12px)",
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
          Matching Records
        </span>
        <span
          style={{
            fontSize: "clamp(9px, 1.2cqw, 12px)",
            fontWeight: 700,
            color: "#0981B5",
            fontFamily: "Poppins, sans-serif",
            background: "#EBF5FB",
            borderRadius: "20px",
            padding: "clamp(2px, 0.5cqw, 4px) clamp(10px, 1.5cqw, 12px)",
          }}
        >
          47 Results
        </span>
      </div>

      {/* Records list */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "clamp(6px, 1.1cqw, 10px)",
          flex: 1,
          minHeight: 0,
          overflowY: "auto",
        }}
      >
        {/* Record 1 */}
        <div
          style={{
            background: "#F7FBFE",
            border: "1px solid rgba(0,92,144,0.15)",
            borderRadius: "clamp(8px, 1.3cqw, 12px)",
            padding: "clamp(8px, 1.2cqw, 12px)",
            display: "flex",
            alignItems: "center",
            gap: "clamp(10px, 1.5cqw, 14px)",
            boxShadow: "0 1px 4px rgba(0,38,73,0.03)",
            animation: "slideRight 0.5s ease-out 0.1s both",
          }}
        >
          <div
            style={{
              width: "clamp(32px, 4cqw, 44px)",
              height: "clamp(32px, 4cqw, 44px)",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #0981B5, #27A8E0)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <svg viewBox="0 0 16 16" fill="none" style={{ width: "55%", height: "55%" }}>
              <path d="M8 8a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM2 14c0-2.2 2.7-4 6-4s6 1.8 6 4" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <p
              style={{
                fontSize: "clamp(8px, 1.1cqw, 10px)",
                fontWeight: 700,
                color: "#002649",
                fontFamily: "Poppins, sans-serif",
                margin: "0 0 clamp(2px, 0.3cqw, 4px) 0",
              }}
            >
              Sarah Johnson
            </p>
            <p
              style={{
                fontSize: "clamp(7px, 0.95cqw, 9px)",
                color: "#005C90",
                fontFamily: "Poppins, sans-serif",
                margin: 0,
              }}
            >
              Acme Corporation • Contact
            </p>
          </div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "clamp(20px, 2.5cqw, 28px)",
              height: "clamp(20px, 2.5cqw, 28px)",
              borderRadius: "4px",
              background: "#39B44A",
              flexShrink: 0,
              cursor: "pointer",
            }}
          >
            <svg viewBox="0 0 16 16" fill="none" style={{ width: "60%", height: "60%" }}>
              <path d="M2 8l3 3 9-9" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* Record 2 */}
        <div
          style={{
            background: "#F7FBFE",
            border: "1px solid rgba(0,92,144,0.15)",
            borderRadius: "clamp(8px, 1.3cqw, 12px)",
            padding: "clamp(8px, 1.2cqw, 12px)",
            display: "flex",
            alignItems: "center",
            gap: "clamp(10px, 1.5cqw, 14px)",
            boxShadow: "0 1px 4px rgba(0,38,73,0.03)",
            animation: "slideRight 0.5s ease-out 0.2s both",
          }}
        >
          <div
            style={{
              width: "clamp(32px, 4cqw, 44px)",
              height: "clamp(32px, 4cqw, 44px)",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #27A8E0, #39B44A)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <svg viewBox="0 0 16 16" fill="none" style={{ width: "55%", height: "55%" }}>
              <path d="M8 8a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM2 14c0-2.2 2.7-4 6-4s6 1.8 6 4" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <p
              style={{
                fontSize: "clamp(8px, 1.1cqw, 10px)",
                fontWeight: 700,
                color: "#002649",
                fontFamily: "Poppins, sans-serif",
                margin: "0 0 clamp(2px, 0.3cqw, 4px) 0",
              }}
            >
              Tech Solutions Inc.
            </p>
            <p
              style={{
                fontSize: "clamp(7px, 0.95cqw, 9px)",
                color: "#005C90",
                fontFamily: "Poppins, sans-serif",
                margin: 0,
              }}
            >
              Account • $2.5M ARR
            </p>
          </div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "clamp(20px, 2.5cqw, 28px)",
              height: "clamp(20px, 2.5cqw, 28px)",
              borderRadius: "4px",
              background: "#27A8E0",
              flexShrink: 0,
              cursor: "pointer",
            }}
          >
            <svg viewBox="0 0 16 16" fill="none" style={{ width: "60%", height: "60%" }}>
              <path d="M8 1v14M1 8h14" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        {/* Record 3 */}
        <div
          style={{
            background: "#F7FBFE",
            border: "1px solid rgba(0,92,144,0.15)",
            borderRadius: "clamp(8px, 1.3cqw, 12px)",
            padding: "clamp(8px, 1.2cqw, 12px)",
            display: "flex",
            alignItems: "center",
            gap: "clamp(10px, 1.5cqw, 14px)",
            boxShadow: "0 1px 4px rgba(0,38,73,0.03)",
            animation: "slideRight 0.5s ease-out 0.3s both",
          }}
        >
          <div
            style={{
              width: "clamp(32px, 4cqw, 44px)",
              height: "clamp(32px, 4cqw, 44px)",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #39B44A, #005C90)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <svg viewBox="0 0 16 16" fill="none" style={{ width: "55%", height: "55%" }}>
              <path d="M8 8a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM2 14c0-2.2 2.7-4 6-4s6 1.8 6 4" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <p
              style={{
                fontSize: "clamp(8px, 1.1cqw, 10px)",
                fontWeight: 700,
                color: "#002649",
                fontFamily: "Poppins, sans-serif",
                margin: "0 0 clamp(2px, 0.3cqw, 4px) 0",
              }}
            >
              Michael Chen
            </p>
            <p
              style={{
                fontSize: "clamp(7px, 0.95cqw, 9px)",
                color: "#005C90",
                fontFamily: "Poppins, sans-serif",
                margin: 0,
              }}
            >
              Enterprise Leads • Contact
            </p>
          </div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "clamp(20px, 2.5cqw, 28px)",
              height: "clamp(20px, 2.5cqw, 28px)",
              borderRadius: "4px",
              background: "#39B44A",
              flexShrink: 0,
              cursor: "pointer",
            }}
          >
            <svg viewBox="0 0 16 16" fill="none" style={{ width: "60%", height: "60%" }}>
              <path d="M2 8l3 3 9-9" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
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
    `}</style>
  </div>
);

export default SmartRecordTargetingVisual;
