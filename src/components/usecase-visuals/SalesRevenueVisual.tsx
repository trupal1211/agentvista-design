/** Sales & Revenue Use Case Visual */
const SalesRevenueVisual = () => (
  <div className="w-full h-full flex flex-col gap-2 md:gap-3 p-2 md:p-4 overflow-hidden" style={{ background: "#F7FBFE" }}>
    {/* Top: Key Revenue Metrics */}
    <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-2 md:h-16">
      {/* Total Pipeline Value */}
      <div className="bg-white border rounded-lg p-1.5 md:p-2.5 flex flex-col justify-between"
        style={{ borderColor: "rgba(9,129,181,0.15)", boxShadow: "0 1px 6px rgba(0,38,73,0.04)" }}>
        <span className="text-[5px] md:text-[6.5px] font-bold uppercase tracking-[0.08em]" style={{ color: "#0981B5" }}>Pipeline Value</span>
        <div className="text-xs md:text-sm font-extrabold" style={{ color: "#002649" }}>$2.4M</div>
        <span className="text-[5px] md:text-[6px]" style={{ color: "#39B44A" }}>↑ 18% this month</span>
      </div>

      {/* Closed Revenue (MRR) */}
      <div className="bg-white border rounded-lg p-1.5 md:p-2.5 flex flex-col justify-between"
        style={{ borderColor: "rgba(57,180,74,0.15)", boxShadow: "0 1px 6px rgba(0,38,73,0.04)" }}>
        <span className="text-[5px] md:text-[6.5px] font-bold uppercase tracking-[0.08em]" style={{ color: "#39B44A" }}>Closed Revenue</span>
        <div className="text-xs md:text-sm font-extrabold" style={{ color: "#002649" }}>$890K</div>
        <span className="text-[5px] md:text-[6px]" style={{ color: "#39B44A" }}>↑ 24% YoY</span>
      </div>

      {/* Win Rate */}
      <div className="bg-white border rounded-lg p-1.5 md:p-2.5 flex flex-col justify-between md:col-span-1 col-span-2"
        style={{ borderColor: "rgba(255,193,7,0.15)", boxShadow: "0 1px 6px rgba(0,38,73,0.04)" }}>
        <span className="text-[5px] md:text-[6.5px] font-bold uppercase tracking-[0.08em]" style={{ color: "#D97706" }}>Win Rate</span>
        <div className="text-xs md:text-sm font-extrabold" style={{ color: "#002649" }}>42%</div>
        <span className="text-[5px] md:text-[6px]" style={{ color: "#D97706" }}>↑ 6% vs last quarter</span>
      </div>
    </div>

    {/* Middle: Sales Pipeline Stages */}
    <div className="bg-white border rounded-lg p-1.5 md:p-2.5 flex-1 flex flex-col gap-1 md:gap-2"
      style={{ borderColor: "rgba(0,92,144,0.11)", boxShadow: "0 1px 6px rgba(0,38,73,0.04)" }}>
      <span className="text-[6px] md:text-[7px] font-bold uppercase tracking-[0.1em]" style={{ color: "#0981B5" }}>Sales Pipeline by Stage</span>
      
      <div className="flex flex-col gap-1 md:gap-1.5 flex-1 min-h-0">
        {/* Prospecting */}
        <div className="flex items-center gap-1 md:gap-2">
          <span className="text-[5px] md:text-[6.5px] font-semibold w-14 md:w-20 shrink-0" style={{ color: "#005C90" }}>Prospecting</span>
          <div className="flex-1 bg-gray-100 rounded-full h-2 md:h-3 overflow-hidden min-w-0">
            <div className="h-full rounded-full" style={{ width: "35%", background: "#0981B5" }} />
          </div>
          <span className="text-[5px] md:text-[6px] font-bold shrink-0" style={{ color: "#002649" }}>$840K</span>
        </div>

        {/* Qualification */}
        <div className="flex items-center gap-1 md:gap-2">
          <span className="text-[5px] md:text-[6.5px] font-semibold w-14 md:w-20 shrink-0" style={{ color: "#005C90" }}>Qualification</span>
          <div className="flex-1 bg-gray-100 rounded-full h-2 md:h-3 overflow-hidden min-w-0">
            <div className="h-full rounded-full" style={{ width: "55%", background: "#27A8E0" }} />
          </div>
          <span className="text-[5px] md:text-[6px] font-bold shrink-0" style={{ color: "#002649" }}>$1.3M</span>
        </div>

        {/* Proposal */}
        <div className="flex items-center gap-1 md:gap-2">
          <span className="text-[5px] md:text-[6.5px] font-semibold w-14 md:w-20 shrink-0" style={{ color: "#005C90" }}>Proposal</span>
          <div className="flex-1 bg-gray-100 rounded-full h-2 md:h-3 overflow-hidden min-w-0">
            <div className="h-full rounded-full" style={{ width: "48%", background: "#39B44A" }} />
          </div>
          <span className="text-[5px] md:text-[6px] font-bold shrink-0" style={{ color: "#002649" }}>$1.1M</span>
        </div>
      </div>
    </div>

    {/* Bottom: Revenue Forecast & Top Deals */}
    <div className="flex flex-col md:flex-row gap-2 md:gap-2 md:h-20">
      {/* Revenue Trend */}
      <div className="flex-1 bg-white border rounded-lg p-1.5 md:p-2.5 flex flex-col gap-1 md:gap-2 min-h-12"
        style={{ borderColor: "rgba(0,92,144,0.11)", boxShadow: "0 1px 6px rgba(0,38,73,0.04)" }}>
        <span className="text-[5.5px] md:text-[6.5px] font-bold uppercase tracking-[0.08em]" style={{ color: "#0981B5" }}>3-Month Forecast</span>
        <div className="flex items-end gap-0.5 flex-1 min-h-0">
          {[65, 72, 78, 85, 92, 98].map((h, i) => (
            <div key={i} className="flex-1 rounded-t-sm" 
              style={{ 
                height: `${h}%`, 
                background: "linear-gradient(to top, #39B44A, #27A8E0)"
              }} />
          ))}
        </div>
      </div>

      {/* Top Deal */}
      <div className="flex-1 bg-white border rounded-lg p-1.5 md:p-2.5 flex flex-col justify-center gap-0.5 md:gap-1 min-h-12"
        style={{ borderColor: "rgba(0,92,144,0.11)", boxShadow: "0 1px 6px rgba(0,38,73,0.04)" }}>
        <span className="text-[5.5px] md:text-[6.5px] font-bold uppercase tracking-[0.08em]" style={{ color: "#0981B5" }}>Top Deal</span>
        <div className="text-[8px] md:text-[10px] font-semibold" style={{ color: "#002649" }}>TechCorp Inc.</div>
        <div className="text-sm md:text-base font-extrabold" style={{ color: "#39B44A" }}>$320K</div>
      </div>
    </div>
  </div>
);

export default SalesRevenueVisual;
