/** Concept C – AI Survey Generation visual (converted from HTML) */
const AiSurveyVisual = () => (
  <div className="w-full aspect-[16/9] flex flex-row items-stretch overflow-hidden rounded-xl"
    style={{ background: "#F7FBFE" }}>
    {/* Left – prompt */}
    <div className="flex-1 flex flex-col justify-center gap-2.5 px-4 py-5 border-r"
      style={{ background: "#EEF7FD", borderColor: "rgba(0,92,144,0.1)" }}>
      <span className="text-[8.5px] font-bold uppercase tracking-[0.14em]" style={{ color: "#0981B5" }}>
        You type
      </span>
      <p className="text-[11.5px] italic leading-relaxed" style={{ color: "#002649" }}>
        "Employee engagement survey, 5&nbsp;questions, Likert scale"
        <span className="inline-block w-0.5 h-3.5 align-middle ml-0.5 animate-pulse" style={{ background: "#0981B5" }} />
      </p>
    </div>

    {/* Right – generated fields */}
    <div className="flex-[1.1] flex flex-col justify-center gap-[7px] px-3.5 py-4 bg-white">
      <span className="text-[8.5px] font-bold uppercase tracking-[0.14em]" style={{ color: "#39B44A" }}>
        AI Generates
      </span>
      {["Q1 · Satisfaction", "Q2 · Work-Life Balance", "Q3 · Team Collaboration"].map((q) => (
        <div key={q} className="rounded-[7px] border px-2.5 py-1.5 flex flex-col gap-1"
          style={{ borderColor: "rgba(0,92,144,0.15)", background: "#F7FBFE" }}>
          <span className="text-[7.5px] font-bold uppercase tracking-[0.1em]" style={{ color: "#0981B5" }}>{q}</span>
          <div className="h-1.5 rounded-sm" style={{ background: "rgba(9,129,181,0.12)", border: "1px solid rgba(9,129,181,0.15)" }} />
        </div>
      ))}
      <button className="self-start text-[8px] font-bold uppercase tracking-[0.1em] text-white px-3.5 py-1 rounded-full border-none cursor-pointer"
        style={{ background: "linear-gradient(90deg,#0981B5,#27A8E0)", boxShadow: "0 3px 10px rgba(9,129,181,0.25)" }}>
        Generate Survey →
      </button>
    </div>
  </div>
);

export default AiSurveyVisual;
