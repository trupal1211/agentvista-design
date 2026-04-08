/** Marketing & Campaign Use Case Visual */
const MarketingCampaignVisual = () => (
  <div className="w-full h-full flex flex-col gap-3 p-4 overflow-hidden" style={{ background: "#F7FBFE" }}>
    {/* Top: Campaign stages */}
    <div className="flex gap-1 h-16 items-center">
      {[
        { label: "Webinar", icon: "🎥", color: "#0981B5" },
        { label: "Sent", icon: "📧", color: "#27A8E0" },
        { label: "Response", icon: "✓", color: "#39B44A" }
      ].map((stage, i) => (
        <div key={i} className="flex-1 flex flex-col items-center justify-center gap-1">
          <div className="text-2xl">{stage.icon}</div>
          <div className="text-[6.5px] font-bold uppercase tracking-[0.08em]" style={{ color: stage.color }}>{stage.label}</div>
        </div>
      ))}
    </div>

    {/* Middle: Response metrics */}
    <div className="flex gap-2 flex-1 min-h-0">
      {/* Campaign conversion */}
      <div className="flex-1 bg-white border rounded-lg p-2.5 flex flex-col gap-1.5"
        style={{ borderColor: "rgba(0,92,144,0.11)", boxShadow: "0 1px 6px rgba(0,38,73,0.04)" }}>
        <span className="text-[7px] font-bold uppercase tracking-[0.1em]" style={{ color: "#0981B5" }}>Conversion</span>
        <div className="flex items-center gap-2">
          <div className="flex-1 h-2 rounded-full bg-white border" style={{ borderColor: "rgba(9,129,181,0.2)" }}>
            <div className="h-full rounded-full" style={{ width: "72%", background: "linear-gradient(to right,#0981B5,#39B44A)" }} />
          </div>
          <span className="text-[8px] font-bold" style={{ color: "#39B44A" }}>72%</span>
        </div>
      </div>

      {/* Event satisfaction */}
      <div className="flex-1 bg-white border rounded-lg p-2.5 flex flex-col gap-1.5"
        style={{ borderColor: "rgba(0,92,144,0.11)", boxShadow: "0 1px 6px rgba(0,38,73,0.04)" }}>
        <span className="text-[7px] font-bold uppercase tracking-[0.1em]" style={{ color: "#0981B5" }}>Score</span>
        <div className="flex items-center justify-center gap-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="text-lg" style={{ opacity: i <= 4 ? 1 : 0.3 }}>⭐</div>
          ))}
        </div>
      </div>
    </div>

    {/* Bottom: Sentiment breakdown */}
    <div className="bg-white border rounded-lg p-2.5 flex items-center gap-2" 
      style={{ borderColor: "rgba(0,92,144,0.11)", boxShadow: "0 1px 6px rgba(0,38,73,0.04)" }}>
      <div className="text-[7px] font-bold uppercase tracking-[0.08em]" style={{ color: "#0981B5" }}>Sentiment:</div>
      {[
        { color: "#39B44A", label: "Pos 58%" },
        { color: "#27A8E0", label: "Neu 32%" },
        { color: "#73CFE1", label: "Mix 10%" }
      ].map((s) => (
        <div key={s.label} className="flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: s.color }} />
          <span className="text-[6.5px] font-semibold" style={{ color: "#005C90" }}>{s.label}</span>
        </div>
      ))}
    </div>
  </div>
);

export default MarketingCampaignVisual;
