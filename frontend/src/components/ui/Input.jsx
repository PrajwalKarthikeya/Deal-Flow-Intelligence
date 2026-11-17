export const Input = ({ label, className = '', ...props }) => (
  <div className="space-y-1.5">
    {label && <label className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">{label}</label>}
    <input
      className={`w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-amber-500/50 focus:bg-white/[0.06] focus:ring-4 focus:ring-amber-500/10 transition-all ${className}`}
      {...props}
    />
  </div>
);
