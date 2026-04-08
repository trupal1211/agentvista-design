/** Employee Experience Use Case Visual */
const EmployeeExperienceVisual = () => (
  <div className="w-full h-full flex flex-col gap-3 p-4 overflow-hidden" style={{ background: "#F7FBFE" }}>
    {/* Top: Lifecycle stages */}
    <div className="flex gap-1.5 h-14 items-center">
      {[
        { emoji: "🎯", label: "Onboard" },
        { emoji: "👥", label: "Engage" },
        { emoji: "⭐", label: "Feedback" },
        { emoji: "🚀", label: "Exit" }
      ].map((stage, i) => (
        <div key={i} className="flex-1 flex flex-col items-center gap-1">
          <div className="text-xl">{stage.emoji}</div>
          <div className="text-[6px] font-bold uppercase tracking-[0.06em]" style={{ color: "#0981B5" }}>{stage.label}</div>
        </div>
      ))}
    </div>

    {/* Middle: Engagement metrics */}
    <div className="flex gap-2 flex-1 min-h-0">
      {/* Engagement trend */}
      <div className="flex-1 bg-white border rounded-lg p-2.5 flex flex-col gap-1.5"
        style={{ borderColor: "rgba(0,92,144,0.11)", boxShadow: "0 1px 6px rgba(0,38,73,0.04)" }}>
        <span className="text-[7px] font-bold uppercase tracking-[0.1em]" style={{ color: "#0981B5" }}>Engagement</span>
        <div className="flex items-end gap-1 h-8 flex-1">
          {[45, 52, 58, 75, 81, 88].map((h, i) => (
            <div key={i} className="flex-1 rounded-t-sm" 
              style={{ 
                height: `${h}%`, 
                background: "linear-gradient(to top,#27A8E0,#39B44A)"
              }} />
          ))}
        </div>
      </div>

      {/* Manager effectiveness */}
      <div className="flex-1 bg-white border rounded-lg p-2.5 flex flex-col gap-1.5"
        style={{ borderColor: "rgba(0,92,144,0.11)", boxShadow: "0 1px 6px rgba(0,38,73,0.04)" }}>
        <span className="text-[7px] font-bold uppercase tracking-[0.1em]" style={{ color: "#0981B5" }}>Manager</span>
        <div className="flex items-center gap-2">
          <div className="text-2xl font-extrabold" style={{ color: "#39B44A" }}>8.2</div>
          <span className="text-[7px] font-semibold" style={{ color: "#005C90" }}>Score</span>
        </div>
      </div>
    </div>

    {/* Bottom: Pulse survey */}
    <div className="bg-white border rounded-lg p-2.5 flex items-center justify-between" 
      style={{ borderColor: "rgba(0,92,144,0.11)", boxShadow: "0 1px 6px rgba(0,38,73,0.04)" }}>
      <div className="flex items-center gap-2">
        <span className="text-lg">📋</span>
        <span className="text-[7px] font-semibold" style={{ color: "#002649" }}>Quick pulse triggered</span>
      </div>
      <div className="text-[7px] font-bold uppercase tracking-[0.08em]" style={{ color: "#39B44A" }}>Active</div>
    </div>
  </div>
);

export default EmployeeExperienceVisual;
