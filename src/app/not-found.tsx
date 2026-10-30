import Link from 'next/link';
import { Terminal, Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6 text-slate-100 font-sans">
      <div className="max-w-md w-full glass-panel p-8 rounded-2xl border border-slate-800 text-center space-y-6">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-950/80 border border-blue-900/50 flex items-center justify-center text-cyan-400">
          <Terminal className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
            ERROR_CODE: 404_PAGE_NOT_FOUND
          </span>
          <h1 className="text-3xl font-extrabold text-white">
            الصفحة غير موجودة
          </h1>
          <p className="text-sm text-slate-400">
            The requested resource could not be found or has been moved to a new route.
          </p>
        </div>

        <div className="pt-4 border-t border-slate-800">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all shadow-lg shadow-blue-600/30"
          >
            <Home className="w-4 h-4" />
            <span>العودة للرئيسية / Return to Portfolio</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
