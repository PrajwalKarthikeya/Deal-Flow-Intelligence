export const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyle = "px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2";
  const variants = {
    primary: "bg-amber-600 hover:bg-amber-500 text-white shadow-lg shadow-amber-900/20 border border-amber-500/20",
    outline: "glass-panel border border-white/10 hover:bg-white/[0.06] text-gray-200",
    ghost: "text-gray-400 hover:text-white hover:bg-white/[0.04]"
  };
  return <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>{children}</button>;
};
