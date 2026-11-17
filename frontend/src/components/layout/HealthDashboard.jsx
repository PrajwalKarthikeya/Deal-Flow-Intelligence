import React, { useState, useEffect } from 'react';
import { Card } from '../ui/Card';

export const HealthDashboard = () => {
  const [status, setStatus] = useState({ database: 'checking', ai_gateway: 'checking' });

  useEffect(() => {
    // In production, fetch from the actual /health endpoint
    const checkHealth = async () => {
      try {
        // Mocking the call for now
        setStatus({ database: 'healthy', ai_gateway: 'healthy' });
      } catch (e) {
        setStatus({ database: 'degraded', ai_gateway: 'degraded' });
      }
    };
    checkHealth();
    const interval = setInterval(checkHealth, 30000); // Poll every 30s
    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="flex items-center gap-4 text-sm">
      <span className="font-semibold text-gray-300">System Health:</span>
      <div className="flex gap-4">
        <span className="flex items-center gap-1.5 text-emerald-500 font-medium capitalize">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            DB: {status.database}
        </span>
        <span className="flex items-center gap-1.5 text-emerald-500 font-medium capitalize">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            AI: {status.ai_gateway}
        </span>
      </div>
    </Card>
  );
};
