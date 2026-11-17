import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import TopBar from './TopBar';

export default function RootLayout() {
  return (
    <div className="flex min-h-screen bg-[#07080a] text-[#f4f5f7] selection:bg-sky-500/30 selection:text-sky-200">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0 relative">
        {/* Ambient top glow */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[300px] bg-sky-500/[0.04] blur-[120px] pointer-events-none"></div>
        <TopBar />
        <main className="flex-1 p-8 md:p-10 overflow-y-auto relative z-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
