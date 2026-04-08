/** Sales & Revenue Use Case Visual */
const SalesRevenueVisual = () => (
  <div className="w-full h-full flex flex-col gap-3 p-4 overflow-hidden" style={{ background: "#F7FBFE" }}>
    {/* Top: Meeting to Survey flow */}
    <div className="flex gap-3 items-start h-20">
      {/* Meeting icon */}
      <div className="flex flex-col items-center justify-center w-14 h-14 rounded-lg border-2 shrink-0" 
        style={{ background: "#EBF5FB", borderColor: "rgba(9,129,181,0.2)" }}>
        <span className="text-lg">📞</span>
      </div>
      
      {/* Arrow */}
      <div className="flex-1 flex items-center justify-center">
        <svg width="24" height="2" viewBox="0 0 24 2">
          <line x1="0" y1="1" x2="20" y2="1" stroke="#0981B5" strokeWidth="1.5" strokeDasharray="3,3"/>
          <polygon points="24,1 20,0 20,2" fill="#0981B5"/>
        </svg>
      </div>

      {/* Generated Survey */}
      <div className="flex-1 flex flex-col gap-1 p-2 rounded-lg border bg-white" 
        style={{ borderColor: "rgba(9,129,181,0.15)", boxShadow: "0 1px 6px rgba(0,38,73,0.04)" }}>
        <div className="text-[7px] font-bold uppercase tracking-widest" style={{ color: "#0981B5" }}>Auto-Generated</div>
        <div className="h-1 rounded-sm" style={{ background: "rgba(57,180,74,0.3)", width: "70%" }} />
        <div className="h-1 rounded-sm" style={{ background: "rgba(9,129,181,0.2)", width: "85%" }} />
      </div>
    </div>

    {/* Middle: Pipeline analysis */}
    <div className="flex gap-2 flex-1 min-h-0">
      {/* Pipeline Risk Chart */}
      <div className="flex-1 bg-white border rounded-lg p-2.5 flex flex-col gap-1"
        style={{ borderColor: "rgba(0,92,144,0.11)", boxShadow: "0 1px 6px rgba(0,38,73,0.04)" }}>
        <span className="text-[7px] font-bold uppercase tracking-[0.1em]" style={{ color: "#0981B5" }}>Risk Detection</span>
        <div className="flex items-end gap-1 flex-1">
          {[35, 60, 45, 78, 42].map((h, i) => (
            <div key={i} className="flex-1 rounded-t-sm" 
              style={{ 
                height: `${h}%`, 
                background: h > 65 ? "linear-gradient(to top,#39B44A,#27A8E0)" : "rgba(9,129,181,0.1)"
              }} />
          ))}
        </div>
      </div>

      {/* Sentiment indicator */}
      <div className="flex-1 bg-white border rounded-lg p-2.5 flex flex-col items-center justify-center gap-1"
        style={{ borderColor: "rgba(0,92,144,0.11)", boxShadow: "0 1px 6px rgba(0,38,73,0.04)" }}>
        <div className="text-[24px] font-extrabold" style={{ color: "#39B44A" }}>8</div>
        <span className="text-[6.5px] font-bold uppercase tracking-[0.08em]" style={{ color: "#005C90" }}>Negative</span>
        <span className="text-[6.5px] font-bold uppercase tracking-[0.08em]" style={{ color: "#005C90" }}>Feedback</span>
      </div>
    </div>

    {/* Bottom: Action items */}
    <div className="bg-white border rounded-lg p-2.5 flex items-center gap-2" 
      style={{ borderColor: "rgba(0,92,144,0.11)", boxShadow: "0 1px 6px rgba(0,38,73,0.04)" }}>
      <div className="w-3 h-3 rounded-full" style={{ background: "#39B44A" }} />
      <span className="text-[7px] font-semibold" style={{ color: "#002649" }}>Detected 3 at-risk opportunities</span>
    </div>
  </div>
);

export default SalesRevenueVisual;
