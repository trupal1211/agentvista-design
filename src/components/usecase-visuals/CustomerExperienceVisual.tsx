/** Customer Experience Use Case Visual */
const CustomerExperienceVisual = () => (
  <div className="w-full h-full flex flex-col gap-3 p-4 overflow-hidden" style={{ background: "#F7FBFE" }}>
    {/* Top: Support workflow */}
    <div className="flex gap-2 h-12 items-center">
      <div className="w-12 h-12 rounded-lg border-2 flex items-center justify-center text-xl shrink-0" 
        style={{ background: "#EBF5FB", borderColor: "rgba(9,129,181,0.2)" }}>
        🎫
      </div>
      <div className="flex-1 h-1 rounded-full" style={{ background: "rgba(9,129,181,0.2)" }} />
      <div className="w-12 h-12 rounded-lg border-2 flex items-center justify-center text-xl shrink-0"
        style={{ background: "rgba(57,180,74,0.1)", borderColor: "rgba(57,180,74,0.2)" }}>
        ✓
      </div>
      <div className="flex-1 h-1 rounded-full" style={{ background: "rgba(9,129,181,0.2)" }} />
      <div className="w-12 h-12 rounded-lg border-2 flex items-center justify-center text-xl shrink-0"
        style={{ background: "#EBF5FB", borderColor: "rgba(39,168,224,0.2)" }}>
        📝
      </div>
    </div>

    {/* Middle: CSAT and NPS metrics */}
    <div className="flex gap-2 flex-1 min-h-0">
      {/* CSAT */}
      <div className="flex-1 bg-white border rounded-lg p-2.5 flex flex-col items-center justify-center gap-1"
        style={{ borderColor: "rgba(0,92,144,0.11)", boxShadow: "0 1px 6px rgba(0,38,73,0.04)" }}>
        <div className="text-[20px] font-extrabold" style={{ color: "#0981B5" }}>4.7</div>
        <span className="text-[6.5px] font-bold uppercase tracking-[0.08em]" style={{ color: "#005C90" }}>CSAT</span>
        <div className="w-8 h-px my-0.5" style={{ background: "rgba(0,92,144,0.15)" }} />
        <span className="text-[6.5px] font-semibold" style={{ color: "#39B44A" }}>↑ 12%</span>
      </div>

      {/* Sentiment tags */}
      <div className="flex-1 bg-white border rounded-lg p-2.5 flex flex-col gap-1.5"
        style={{ borderColor: "rgba(0,92,144,0.11)", boxShadow: "0 1px 6px rgba(0,38,73,0.04)" }}>
        <span className="text-[7px] font-bold uppercase tracking-[0.1em]" style={{ color: "#0981B5" }}>Feedback</span>
        <div className="flex flex-col gap-1">
          {[
            { icon: "👍", text: "Helpful", color: "#39B44A" },
            { icon: "🚀", text: "Fast", color: "#27A8E0" }
          ].map((f) => (
            <div key={f.text} className="flex items-center gap-1">
              <span className="text-sm">{f.icon}</span>
              <span className="text-[6.5px] font-semibold" style={{ color: "#005C90" }}>{f.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Bottom: Follow-up action */}
    <div className="bg-white border rounded-lg p-2.5 flex items-center justify-between" 
      style={{ borderColor: "rgba(0,92,144,0.11)", boxShadow: "0 1px 6px rgba(0,38,73,0.04)" }}>
      <span className="text-[7px] font-semibold" style={{ color: "#002649" }}>AI follows up on negative sentiment</span>
      <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs" 
        style={{ background: "linear-gradient(135deg,#0981B5,#27A8E0)" }}>✓</div>
    </div>
  </div>
);

export default CustomerExperienceVisual;
