/** Knowledge & Insights Use Case Visual */
const KnowledgeInsightsVisual = () => (
  <div className="w-full h-full flex flex-col gap-3 p-4 overflow-hidden" style={{ background: "#F7FBFE" }}>
    {/* Top: Executive dashboard summary */}
    <div className="bg-white border rounded-lg p-2.5 flex items-center justify-between gap-2"
      style={{ borderColor: "rgba(0,92,144,0.11)", boxShadow: "0 1px 6px rgba(0,38,73,0.04)" }}>
      <div className="flex items-center gap-2">
        <span className="text-lg">📊</span>
        <span className="text-[7px] font-bold uppercase tracking-[0.1em]" style={{ color: "#0981B5" }}>AI Summary</span>
      </div>
      <div className="text-[6.5px] font-semibold" style={{ color: "#39B44A" }}>Ready</div>
    </div>

    {/* Middle: Drive detection and patterns */}
    <div className="flex gap-2 flex-1 min-h-0">
      {/* Top drivers */}
      <div className="flex-1 bg-white border rounded-lg p-2.5 flex flex-col gap-1.5"
        style={{ borderColor: "rgba(0,92,144,0.11)", boxShadow: "0 1px 6px rgba(0,38,73,0.04)" }}>
        <span className="text-[7px] font-bold uppercase tracking-[0.1em]" style={{ color: "#0981B5" }}>Low Satisfaction</span>
        <div className="flex flex-col gap-1">
          {[
            { emoji: "🎯", text: "Performance", w: "78%" },
            { emoji: "📞", text: "Support", w: "65%" }
          ].map((d) => (
            <div key={d.text} className="flex items-center gap-1.5">
              <span className="text-sm">{d.emoji}</span>
              <div className="flex-1 h-1.5 rounded-full bg-gray-200" style={{ background: "rgba(9,129,181,0.1)" }}>
                <div className="h-full rounded-full" style={{ width: d.w, background: "linear-gradient(to right,#0981B5,#27A8E0)" }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pattern insights */}
      <div className="flex-1 bg-white border rounded-lg p-2.5 flex flex-col gap-1.5"
        style={{ borderColor: "rgba(0,92,144,0.11)", boxShadow: "0 1px 6px rgba(0,38,73,0.04)" }}>
        <span className="text-[7px] font-bold uppercase tracking-[0.1em]" style={{ color: "#0981B5" }}>Patterns</span>
        <div className="flex flex-col gap-1">
          {[
            { label: "Peak issues", color: "#39B44A" },
            { label: "Trend: ↑", color: "#27A8E0" }
          ].map((p) => (
            <div key={p.label} className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: p.color }} />
              <span className="text-[6.5px] font-semibold" style={{ color: "#005C90" }}>{p.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Bottom: Action suggestion */}
    <div className="bg-white border rounded-lg p-2.5 flex items-center justify-between gap-2" 
      style={{ borderColor: "rgba(0,92,144,0.11)", boxShadow: "0 1px 6px rgba(0,38,73,0.04)" }}>
      <span className="text-[7px] font-semibold" style={{ color: "#002649" }}>AI suggests: Create 5 follow-up tasks</span>
      <div className="text-[7px] font-bold" style={{ color: "#39B44A" }}>⚡</div>
    </div>
  </div>
);

export default KnowledgeInsightsVisual;
