/** Cross-Industry Use Case Visual */
const CrossIndustryVisual = () => (
  <div className="w-full h-full flex flex-col gap-3 p-4 overflow-hidden" style={{ background: "#F7FBFE" }}>
    {/* Top: Industry sectors */}
    <div className="grid grid-cols-2 gap-2 h-20">
      {[
        { emoji: "🏛", label: "Public Sector" },
        { emoji: "🏥", label: "Healthcare" },
        { emoji: "🎓", label: "Education" },
        { emoji: "💼", label: "Enterprise" }
      ].map((industry, i) => (
        <div key={i} className="flex items-center gap-1.5 p-1.5 rounded-lg border bg-white"
          style={{ borderColor: "rgba(9,129,181,0.15)", boxShadow: "0 1px 4px rgba(0,38,73,0.04)" }}>
          <span className="text-lg flex-shrink-0">{industry.emoji}</span>
          <span className="text-[6px] font-bold uppercase tracking-[0.06em]" style={{ color: "#0981B5" }}>{industry.label}</span>
        </div>
      ))}
    </div>

    {/* Middle: Use case examples */}
    <div className="flex gap-2 flex-1 min-h-0">
      {/* Feedback triggers */}
      <div className="flex-1 bg-white border rounded-lg p-2.5 flex flex-col gap-1.5"
        style={{ borderColor: "rgba(0,92,144,0.11)", boxShadow: "0 1px 6px rgba(0,38,73,0.04)" }}>
        <span className="text-[7px] font-bold uppercase tracking-[0.1em]" style={{ color: "#0981B5" }}>Triggers</span>
        <div className="flex flex-col gap-1">
          {[
            "Service checkpoint",
            "Post-appointment",
            "Course completion"
          ].map((trigger) => (
            <div key={trigger} className="flex items-center gap-1.5 text-[6.5px]">
              <div className="w-1 h-1 rounded-full" style={{ background: "#39B44A" }} />
              <span style={{ color: "#005C90" }}>{trigger}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Responses collected */}
      <div className="flex-1 bg-white border rounded-lg p-2.5 flex flex-col items-center justify-center gap-1.5"
        style={{ borderColor: "rgba(0,92,144,0.11)", boxShadow: "0 1px 6px rgba(0,38,73,0.04)" }}>
        <div className="text-3xl font-extrabold" style={{ color: "#0981B5" }}>2.3K</div>
        <span className="text-[6.5px] font-bold uppercase tracking-[0.08em]" style={{ color: "#005C90" }}>Responses</span>
        <span className="text-[6px]" style={{ color: "#39B44A" }}>across industries</span>
      </div>
    </div>

    {/* Bottom: Workflow status */}
    <div className="bg-white border rounded-lg p-2.5 flex items-center justify-between gap-2" 
      style={{ borderColor: "rgba(0,92,144,0.11)", boxShadow: "0 1px 6px rgba(0,38,73,0.04)" }}>
      <span className="text-[7px] font-semibold" style={{ color: "#002649" }}>Running on Salesforce CRM</span>
      <div className="flex items-center gap-1">
        <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#39B44A" }} />
        <span className="text-[6px] font-bold" style={{ color: "#39B44A" }}>Active</span>
      </div>
    </div>
  </div>
);

export default CrossIndustryVisual;
