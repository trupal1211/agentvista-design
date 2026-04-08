/** Platform Admin & Ops Use Case Visual */
const AdminOpsVisual = () => (
  <div className="w-full h-full flex flex-col gap-3 p-4 overflow-hidden" style={{ background: "#F7FBFE" }}>
    {/* Top: Command interface */}
    <div className="bg-white border rounded-lg p-2.5 flex flex-col gap-1.5" 
      style={{ borderColor: "rgba(0,92,144,0.11)", boxShadow: "0 1px 6px rgba(0,38,73,0.04)" }}>
      <span className="text-[7px] font-bold uppercase tracking-[0.1em]" style={{ color: "#0981B5" }}>Your Command</span>
      <div className="text-[8px] italic" style={{ color: "#002649" }}>
        "Clone survey, change theme to green, translate to French"
      </div>
    </div>

    {/* Middle: Detection and automation */}
    <div className="flex gap-2 flex-1 min-h-0">
      {/* Issue detection */}
      <div className="flex-1 bg-white border rounded-lg p-2.5 flex flex-col gap-1.5"
        style={{ borderColor: "rgba(0,92,144,0.11)", boxShadow: "0 1px 6px rgba(0,38,73,0.04)" }}>
        <span className="text-[7px] font-bold uppercase tracking-[0.1em]" style={{ color: "#0981B5" }}>Detection</span>
        <div className="flex flex-col gap-1">
          {[
            { emoji: "📋", text: "Duplicates", count: "12" },
            { emoji: "⚠", text: "Unstructured", count: "8" }
          ].map((item) => (
            <div key={item.text} className="flex items-center justify-between text-[6.5px]">
              <div className="flex items-center gap-1">
                <span>{item.emoji}</span>
                <span style={{ color: "#005C90" }}>{item.text}</span>
              </div>
              <span style={{ color: "#39B44A", fontWeight: "bold" }}>{item.count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Actions created */}
      <div className="flex-1 bg-white border rounded-lg p-2.5 flex flex-col gap-1.5"
        style={{ borderColor: "rgba(0,92,144,0.11)", boxShadow: "0 1px 6px rgba(0,38,73,0.04)" }}>
        <span className="text-[7px] font-bold uppercase tracking-[0.1em]" style={{ color: "#0981B5" }}>Executed</span>
        <div className="flex items-end gap-1 flex-1">
          {[45, 62, 51, 76].map((h, i) => (
            <div key={i} className="flex-1 rounded-t-sm" 
              style={{ 
                height: `${h}%`, 
                background: "linear-gradient(to top,#0981B5,#39B44A)"
              }} />
          ))}
        </div>
      </div>
    </div>

    {/* Bottom: Results */}
    <div className="bg-white border rounded-lg p-2.5 flex items-center justify-between gap-2" 
      style={{ borderColor: "rgba(0,92,144,0.11)", boxShadow: "0 1px 6px rgba(0,38,73,0.04)" }}>
      <div className="flex items-center gap-2">
        <div className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white"
          style={{ background: "linear-gradient(135deg,#39B44A,#27A8E0)" }}>✓</div>
        <span className="text-[7px] font-semibold" style={{ color: "#002649" }}>Survey cloned & processed</span>
      </div>
    </div>
  </div>
);

export default AdminOpsVisual;
