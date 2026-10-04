import React, { useState } from 'react';
import { Layers, Shield, Database, Terminal, CheckCircle2 } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <header className="border-b border-slate-800 bg-slate-900/60 backdrop-blur px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-teal-600 flex items-center justify-center font-bold text-white shadow-lg shadow-teal-500/20">
            FA
          </div>
          <div>
            <h1 className="font-bold text-base text-white">FastAPI & React Business Platform</h1>
            <p className="text-xs text-teal-400">High Performance REST API & SPA</p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-sm font-semibold text-slate-200">Manish Lalotra</div>
          <div className="text-xs text-slate-400">Full Stack & DevOps Engineer</div>
        </div>
      </header>

      <main className="max-w-6xl w-full mx-auto p-6 md:p-8 space-y-6 flex-1">
        <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4">
          <h2 className="text-2xl font-bold text-white tracking-tight">Enterprise Service Management</h2>
          <p className="text-sm text-slate-400 max-w-3xl leading-relaxed">
            Engineered with Python 3.12 FastAPI backend for asynchronous I/O and Pydantic schema validation, combined with a responsive React TypeScript frontend for real-time operational management.
          </p>
          <div className="flex gap-4 pt-2">
            <a href="/api/v1/docs" target="_blank" rel="noreferrer" className="bg-teal-600 hover:bg-teal-500 text-white font-medium text-xs px-4 py-2 rounded-lg transition inline-flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5" /> Swagger API Docs
            </a>
            <a href="/healthz" target="_blank" rel="noreferrer" className="bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-xs px-4 py-2 rounded-lg transition inline-flex items-center gap-2">
              Health Probe
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { title: 'Asynchronous Python', desc: 'ASGI architecture via Uvicorn & FastAPI with native async/await endpoints.', icon: Terminal },
            { title: 'Data Validation', desc: 'Pydantic v2 strict serialization with automatic OpenAPI/Swagger documentation.', icon: Shield },
            { title: 'Container Ready', desc: 'Multi-stage Docker builds running unprivileged user in minimal Alpine/Slim images.', icon: Layers },
          ].map((card, i) => {
            const Icon = card.icon;
            return (
              <div key={i} className="bg-slate-900/60 border border-slate-800 p-5 rounded-xl space-y-3">
                <div className="p-2 w-fit rounded-lg bg-teal-950/60 text-teal-400 border border-teal-500/20">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-white text-base">{card.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{card.desc}</p>
              </div>
            );
          })}
        </div>
      </main>

      <footer className="border-t border-slate-800 py-4 text-center text-xs text-slate-500">
        FastAPI & React Business Platform &copy; 2026 Manish Lalotra.
      </footer>
    </div>
  );
}
