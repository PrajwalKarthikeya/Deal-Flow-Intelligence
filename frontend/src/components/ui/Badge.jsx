export const Badge = ({ children, variant = 'default' }) => {
  const variants = {
    default: "bg-white/[0.05] text-gray-300",
    amber: "bg-amber-500/10 text-amber-500 border border-amber-500/20",
    emerald: "bg-emerald-500/10 text-emerald-500 border border-emerald-500/20"
  };
  return (
    <span className={`px-2.5 py-0.5 rounded-lg text-[10px] font-semibold tracking-wider uppercase border ${variants[variant]}`}>
      {children}
    </span>
  );
};
