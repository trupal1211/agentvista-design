/** Concept D – Drag-&-Drop / PDF Form visual (converted from HTML) */
const floatBadges = [
  { emoji: "📄", label: "PDF", color: "#0981B5", border: "rgba(9,129,181,0.2)", pos: { top: -12, left: -8 }, delay: "0s" },
  { emoji: "🖼", label: "Image", color: "#27A8E0", border: "rgba(39,168,224,0.2)", pos: { top: -10, right: -10 }, delay: "0.7s" },
  { emoji: "📋", label: "DOCX", color: "#005C90", border: "rgba(0,92,144,0.18)", pos: { bottom: -10, left: 10 }, delay: "1.4s" },
];

const PdfFormVisual = () => (
  <div className="w-full h-full flex items-center justify-center gap-4 px-5 py-5 overflow-hidden"
    style={{ background: "linear-gradient(145deg,#EBF5FB 0%,#F5FBFF 100%)" }}>
    {/* Drop zone */}
    <div className="relative w-40 h-[105px] rounded-2xl border-2 border-dashed flex flex-col items-center justify-center gap-[7px] shrink-0"
      style={{ borderColor: "rgba(9,129,181,0.35)", background: "rgba(255,255,255,0.8)", boxShadow: "0 4px 20px rgba(0,38,73,0.06)" }}>
      {floatBadges.map((b) => (
        <div key={b.label}
          className="absolute rounded-lg bg-white border px-2 py-1 text-[8px] font-bold flex items-center gap-1 animate-[floatBadge_3s_ease-in-out_infinite] whitespace-nowrap"
          style={{ color: b.color, borderColor: b.border, boxShadow: "0 2px 10px rgba(0,38,73,0.08)", animationDelay: b.delay, ...b.pos } as React.CSSProperties}>
          <span>{b.emoji}</span> {b.label}
        </div>
      ))}
      <div className="w-[34px] h-[34px] rounded-[10px] flex items-center justify-center"
        style={{ background: "linear-gradient(135deg,#0981B5,#27A8E0)", boxShadow: "0 3px 12px rgba(9,129,181,0.3)" }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M12 15V4M12 4L8 8M12 4L16 8" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4 17v1a2 2 0 002 2h12a2 2 0 002-2v-1" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
        </svg>
      </div>
      <span className="text-[9px] font-semibold text-center" style={{ color: "#005C90" }}>Drop your file here</span>
      <span className="text-[7.5px] font-medium text-center uppercase tracking-[0.08em]" style={{ color: "#0981B5" }}>PDF · Image · DOCX</span>
    </div>

    {/* Output */}
    <div className="flex flex-col gap-[7px]">
      <span className="text-[8px] font-bold uppercase tracking-[0.12em]" style={{ color: "#39B44A" }}>Form Generated</span>
      {[50, 65, 40].map((w, i) => (
        <div key={i} className="w-32 bg-white border rounded-lg px-2.5 py-1.5 flex flex-col gap-[3px]"
          style={{ borderColor: "rgba(0,92,144,0.11)", boxShadow: "0 1px 6px rgba(0,38,73,0.04)" }}>
          <div className="h-1 rounded-sm" style={{ width: `${w}%`, background: "rgba(9,129,181,0.2)" }} />
          <div className="rounded-[5px] border" style={{ height: i === 2 ? 20 : 14, background: "#F2F8FC", borderColor: "rgba(9,129,181,0.12)" }} />
        </div>
      ))}
      <div className="w-32 h-[22px] rounded-[7px] flex items-center justify-center text-[8px] font-bold uppercase tracking-[0.1em] text-white"
        style={{ background: "linear-gradient(90deg,#39B44A,#4DC95E)", boxShadow: "0 3px 10px rgba(57,180,74,0.28)" }}>
        Use This Form →
      </div>
    </div>
  </div>
);

export default PdfFormVisual;
