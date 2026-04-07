/** Concept B – AI-Generated Insights Dashboard (converted from HTML) */
const barHeights = [40, 62, 48, 78, 60, 92, 70];
const barDelays = [0.05, 0.12, 0.18, 0.24, 0.3, 0.36, 0.42];

const AiInsightsVisual = () => (
  <div className="w-full aspect-[16/9] flex flex-col gap-[9px] p-3.5 rounded-xl overflow-hidden" style={{ background: "#F2F8FC" }}>
    {/* Top row */}
    <div className="flex gap-[9px] flex-1 min-h-0">
      {/* Bar chart */}
      <div className="flex-[1.4] bg-white border rounded-[11px] px-3 py-2.5 flex flex-col gap-1.5"
        style={{ borderColor: "rgba(0,92,144,0.11)", boxShadow: "0 1px 6px rgba(0,38,73,0.04)" }}>
        <span className="text-[8px] font-bold uppercase tracking-[0.13em]" style={{ color: "#0981B5" }}>Response Trend</span>
        <div className="flex items-end gap-1 flex-1">
          {barHeights.map((h, i) => (
            <div key={i} className="flex-1 rounded-t-[3px] animate-[barUp_1.2s_ease-out_forwards]"
              style={{
                height: `${h}%`,
                background: i === 5 ? "linear-gradient(to top,#39B44A,#27A8E0)" : "linear-gradient(to top,#005C90,#27A8E0)",
                animationDelay: `${barDelays[i]}s`,
                transformOrigin: "bottom",
                transform: "scaleY(0)",
              }} />
          ))}
        </div>
      </div>

      {/* Donut */}
      <div className="flex-1 bg-white border rounded-[11px] px-3 py-2.5 flex flex-col gap-1.5"
        style={{ borderColor: "rgba(0,92,144,0.11)", boxShadow: "0 1px 6px rgba(0,38,73,0.04)" }}>
        <span className="text-[8px] font-bold uppercase tracking-[0.13em]" style={{ color: "#0981B5" }}>Sentiment</span>
        <div className="flex items-center gap-2">
          <svg width="42" height="42" viewBox="0 0 42 42" className="shrink-0">
            <circle cx="21" cy="21" r="16" fill="none" stroke="#EBF5FB" strokeWidth="5.5"/>
            <circle cx="21" cy="21" r="16" fill="none" stroke="#39B44A" strokeWidth="5.5" strokeDasharray="62 39" strokeDashoffset="-4" strokeLinecap="round"/>
            <circle cx="21" cy="21" r="16" fill="none" stroke="#27A8E0" strokeWidth="5.5" strokeDasharray="25 76" strokeDashoffset="-66" strokeLinecap="round"/>
            <circle cx="21" cy="21" r="16" fill="none" stroke="#73CFE1" strokeWidth="5.5" strokeDasharray="14 87" strokeDashoffset="-91" strokeLinecap="round"/>
            <text x="21" y="24" textAnchor="middle" fill="#002649" fontSize="8" fontFamily="Poppins,sans-serif" fontWeight="800">4.3</text>
          </svg>
          <div className="flex flex-col gap-[3px]">
            {[
              { color: "#39B44A", label: "Positive 62%" },
              { color: "#27A8E0", label: "Neutral 25%" },
              { color: "#73CFE1", label: "Mixed 13%" },
            ].map((l) => (
              <div key={l.label} className="flex items-center gap-1 text-[7px] font-semibold" style={{ color: "#002649" }}>
                <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: l.color }} />
                {l.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* Bottom row */}
    <div className="flex gap-[9px] flex-1 min-h-0">
      {/* Actions */}
      <div className="flex-[1.4] bg-white border rounded-[11px] px-3 py-2.5 flex flex-col gap-1.5"
        style={{ borderColor: "rgba(0,92,144,0.11)", boxShadow: "0 1px 6px rgba(0,38,73,0.04)" }}>
        <span className="text-[8px] font-bold uppercase tracking-[0.13em]" style={{ color: "#0981B5" }}>Top Action Areas</span>
        <div className="flex flex-col gap-[5px]">
          {[
            { emoji: "🎯", bg: "rgba(57,180,74,0.1)", bar1: { w: 85, c: "rgba(57,180,74,0.28)" }, bar2: { w: 55 } },
            { emoji: "📊", bg: "rgba(39,168,224,0.1)", bar1: { w: 68, c: "rgba(39,168,224,0.25)" }, bar2: { w: 42 } },
            { emoji: "⚡", bg: "rgba(115,207,225,0.15)", bar1: { w: 52, c: "rgba(115,207,225,0.4)" }, bar2: { w: 35 } },
          ].map((a) => (
            <div key={a.emoji} className="flex items-center gap-1.5">
              <div className="w-4 h-4 rounded-[5px] flex items-center justify-center text-[9px] shrink-0" style={{ background: a.bg }}>{a.emoji}</div>
              <div className="flex-1 flex flex-col gap-0.5">
                <div className="h-[5px] rounded-[3px]" style={{ width: `${a.bar1.w}%`, background: a.bar1.c }} />
                <div className="h-[5px] rounded-[3px]" style={{ width: `${a.bar2.w}%`, background: "rgba(0,92,144,0.1)" }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stat */}
      <div className="flex-1 bg-white border rounded-[11px] flex flex-col items-center justify-center gap-1"
        style={{ borderColor: "rgba(0,92,144,0.11)", boxShadow: "0 1px 6px rgba(0,38,73,0.04)" }}>
        <span className="text-[28px] font-extrabold leading-none" style={{ color: "#0981B5" }}>247</span>
        <span className="text-[7px] font-bold uppercase tracking-[0.14em]" style={{ color: "#005C90", opacity: 0.75 }}>Responses</span>
        <div className="w-7 h-px my-0.5" style={{ background: "rgba(0,92,144,0.15)" }} />
        <span className="text-[7px] font-bold uppercase tracking-[0.09em]" style={{ color: "#39B44A" }}>Done in 3s</span>
      </div>
    </div>
  </div>
);

export default AiInsightsVisual;
