import React, { useState } from "react";

const BrandingVisual = () => {
  const [showPreview, setShowPreview] = useState(false);

  React.useEffect(() => {
    setShowPreview(true);
  }, []);

  return (
    <div
      className="w-full h-full flex flex-row items-stretch"
      style={{ background: "#F7FBFE" }}
    >
      {/* LEFT PANEL: Brand Source & Tokens */}
      <div
        className="flex-0 flex-basis-[44%] flex flex-col justify-center px-5 py-6 gap-4 border-r"
        style={{
          background: "#EBF5FB",
          borderColor: "rgba(0,92,144,0.11)",
          flexBasis: "44%",
          flexShrink: 0,
        }}
      >
        {/* Brand Source Label */}
        <div className="flex items-center gap-2">
          <div
            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
            style={{ background: "#27A8E0" }}
          ></div>
          <span
            className="text-xs font-bold uppercase tracking-widest"
            style={{ color: "#0981B5" }}
          >
            Brand Source
          </span>
        </div>

        {/* Logo Source Widget */}
        <div
          className="flex items-center gap-3 p-3 rounded-lg border"
          style={{
            background: "#FFFFFF",
            borderColor: "rgba(0,92,144,0.11)",
            boxShadow: "0 1px 6px rgba(0,38,73,0.05)",
          }}
        >
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
            style={{
              background: "linear-gradient(135deg, #1A1A2E, #16213E)",
            }}
          >
            V
          </div>
          <div>
            <div
              className="text-xs font-bold"
              style={{ color: "#002649" }}
            >
              VortexCo
            </div>
            <div
              className="text-xs mt-0.5"
              style={{ color: "#005C90" }}
            >
              logo.svg uploaded
            </div>
          </div>
        </div>

        {/* Tokens Label */}
        <div className="flex items-center gap-2 mt-2">
          <div
            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
            style={{ background: "#27A8E0" }}
          ></div>
          <span
            className="text-xs font-bold uppercase tracking-widest"
            style={{ color: "#0981B5" }}
          >
        Extracted Palette
          </span>
        </div>

        {/* Token Rows */}
        <div className="flex flex-col gap-2">
          {[
            { name: "Primary", value: "#1A1A2E", color: "#1A1A2E" },
            { name: "Accent", value: "#E94560", color: "#E94560" },
            { name: "Background", value: "#F5F5F5", color: "#F5F5F5", border: true },
            { name: "Secondary", value: "#0F3460", color: "#0F3460" },
          ].map((token, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 px-3 py-2 rounded-lg border"
              style={{
                background: "#F7FBFE",
                borderColor: "rgba(0,92,144,0.11)",
              }}
            >
              <div
                className="w-3 h-3 rounded flex-shrink-0"
                style={{
                  background: token.color,
                  border: token.border ? "1px solid rgba(0,0,0,0.08)" : "none",
                }}
              ></div>
              <span
                className="text-xs font-semibold flex-1"
                style={{ color: "#002649" }}
              >
                {token.name}
              </span>
              <span
                className="text-xs font-mono"
                style={{ color: "#005C90" }}
              >
                {token.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* CENTER ARROW */}
      <div
        className="absolute top-1/2 z-10 flex flex-col items-center gap-1"
        style={{ left: "44%", transform: "translate(-50%, -50%)" }}
      >
        <div
          className="w-0.5"
          style={{
            height: "24px",
            background: "linear-gradient(to bottom, transparent, #0981B5)",
          }}
        ></div>
        <div
          className="px-2.5 py-1 rounded-full text-white font-black text-xs uppercase tracking-tight"
          style={{
            background: "linear-gradient(90deg, #0981B5, #27A8E0)",
            boxShadow: "0 2px 8px rgba(9, 129, 181, 0.3)",
          }}
        >
          Apply
        </div>
        <div
          className="w-0.5"
          style={{
            height: "24px",
            background: "linear-gradient(to bottom, #0981B5, transparent)",
          }}
        ></div>
      </div>

      {/* RIGHT PANEL: Preview with Tokens Applied */}
      <div
        className="flex-1 flex flex-col justify-center px-5 py-6 gap-4"
        style={{ background: "#FFFFFF" }}
      >
        {/* Survey Label */}
        <div
          className="flex items-center gap-2"
          style={{ color: "#2a8c39" }}
        >
          <div
            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
            style={{ background: "#39B44A" }}
          ></div>
          <span className="text-xs font-bold uppercase tracking-widest">
            Survey Preview
          </span>
        </div>

        {/* Preview Block */}
        <div
          className="rounded-lg overflow-hidden border"
          style={{
            background: "#F7FBFE",
            borderColor: "rgba(0,92,144,0.11)",
            boxShadow: "0 1px 6px rgba(0,38,73,0.05)",
          }}
        >
          {/* Header */}
          <div
            className="px-4 py-3 flex items-center gap-3"
            style={{ background: "#1A1A2E" }}
          >
            <div
              className="w-5 h-5 rounded flex items-center justify-center font-bold text-white text-xs flex-shrink-0"
              style={{ background: "rgba(233, 69, 96, 0.8)" }}
            >
              V
            </div>
            <span className="text-xs font-bold text-white flex-1">
              VortexCo Survey
            </span>
            <span
              className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
              style={{
                background: "rgba(233, 69, 96, 0.25)",
                color: "#E94560",
              }}
            >
              Live
            </span>
          </div>

          {/* Body */}
          <div className="px-4 py-3 flex flex-col gap-2">
            {[
              { dot: "#E94560", width: "100%" },
              { dot: "#0F3460", width: "75%" },
              { dot: "#E94560", width: "85%" },
            ].map((row, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: row.dot }}
                ></div>
                <div
                  className="h-1.5 rounded-full flex-1"
                  style={{
                    background:
                      row.dot === "#E94560"
                        ? "rgba(26, 26, 46, 0.10)"
                        : "rgba(15, 52, 96, 0.10)",
                    width: row.width,
                  }}
                ></div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div
            className="px-4 py-3 flex items-center justify-between border-t"
            style={{ borderColor: "rgba(26, 26, 46, 0.1)" }}
          >
            <button
              className="px-4 py-1.5 rounded-full text-white font-bold text-xs uppercase tracking-wide"
              style={{
                background: "linear-gradient(90deg, #E94560, #FF6B8A)",
              }}
            >
              Submit →
            </button>
            <span
              className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
              style={{
                background: "rgba(57, 180, 74, 0.12)",
                color: "#2a8c39",
              }}
            >
              ✓ Themed
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 mt-2">
          <button
            className="px-4 py-1.5 rounded-full text-white font-bold text-xs uppercase tracking-wide"
            style={{
              background: "linear-gradient(90deg, #39B44A, #4DC95E)",
              boxShadow: "0 3px 12px rgba(57, 180, 74, 0.28)",
            }}
          >
            Save Theme
          </button>
          <span
            className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
            style={{
              background: "rgba(115, 207, 225, 0.18)",
              color: "#005C90",
            }}
          >
            4 tokens mapped
          </span>
        </div>
      </div>
    </div>
  );
};

export default BrandingVisual;
