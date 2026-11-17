export const Card = ({ children, className = '', glow = false }) => (
  <div className={`glass-panel p-6 rounded-2xl border border-white/5 ${glow ? 'glass-panel-glow' : ''} ${className}`}>
    {children}
  </div>
);
