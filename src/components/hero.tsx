import { PlayCircle, Sparkles, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <header className="relative pt-32 pb-20 overflow-hidden hero-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ln-slate-navy/30 border border-ln-deep-blue-gray/50 mb-6">
          <span className="flex h-2 w-2 rounded-full bg-ln-primary animate-pulse" />
          <span className="text-xs font-semibold tracking-wider uppercase text-ln-subtext">
            Powered by Neural Orders Engine
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-white">
          AI-Powered B2B <br />
          <span className="text-gradient">Order Operations</span>
        </h1>

        {/* Subheading */}
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-ln-subtext mb-10">
          Streamline procurement, eliminate manual data entry, and unify your
          supply chain with the next generation of intelligent order management.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button className="w-full sm:w-auto px-8 py-4 h-auto bg-ln-primary text-ln-bg font-bold rounded-xl hover:scale-105 transition-transform glow-accent">
            Start Free Trial
          </Button>
          <Button
            variant="ghost"
            className="w-full sm:w-auto px-8 py-4 h-auto glass text-white font-bold rounded-xl hover:bg-ln-slate-navy/40 transition-colors"
          >
            <PlayCircle className="text-ln-primary" />
            Book Demo
          </Button>
        </div>

        {/* Dashboard Preview */}
        <div className="mt-20 relative group">
          <div className="absolute inset-0 bg-ln-primary/10 blur-[100px] rounded-full scale-75 opacity-20 transition-opacity group-hover:opacity-40" />
          <div className="relative bg-ln-bg/80 border border-ln-slate-navy rounded-xl overflow-hidden shadow-2xl">
            {/* Browser Chrome */}
            <div className="flex items-center gap-1.5 px-4 py-3 bg-ln-slate-navy/30 border-b border-ln-slate-navy">
              <div className="w-3 h-3 rounded-full bg-red-500/20" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
              <div className="w-3 h-3 rounded-full bg-green-500/20" />
              <div className="ml-4 flex items-center gap-2 bg-ln-bg px-3 py-1 rounded text-[10px] text-ln-subtext border border-ln-slate-navy">
                <Lock className="w-3 h-3" /> linenow.ai/dashboard/order-insights
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="p-4 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="md:col-span-2 space-y-6">
                {/* AI Order Summary Card */}
                <div className="glass p-6 rounded-xl border-ln-primary/20 bg-gradient-to-br from-ln-primary/5 to-ln-tertiary/5">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-bold text-lg flex items-center gap-2 text-white">
                      <Sparkles className="w-5 h-5 text-ln-primary" />
                      AI Order Summary
                    </h3>
                    <span className="px-2 py-1 bg-green-500/10 text-green-400 text-xs rounded-full border border-green-500/20">
                      High Confidence
                    </span>
                  </div>
                  <p className="text-sm text-ln-subtext leading-relaxed">
                    Analyzed 4 purchase orders from{" "}
                    <span className="text-ln-primary">
                      Global Logistics Inc.
                    </span>{" "}
                    Identified 3 potential stock-outs for SKU-882. Recommended
                    reorder volume increased by 15% based on seasonal velocity.
                  </p>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="glass p-4 rounded-xl">
                    <span className="text-[10px] uppercase tracking-widest text-ln-subtext">
                      Live Accuracy
                    </span>
                    <div className="text-2xl font-bold mt-1 text-white">
                      99.98%
                    </div>
                  </div>
                  <div className="glass p-4 rounded-xl">
                    <span className="text-[10px] uppercase tracking-widest text-ln-subtext">
                      Time Saved
                    </span>
                    <div className="text-2xl font-bold mt-1 text-white">
                      14.2 hrs
                    </div>
                  </div>
                </div>
              </div>

              {/* Active Syncing Sidebar */}
              <div className="glass p-6 rounded-xl">
                <h4 className="font-bold text-sm mb-4 text-slate-200">
                  Active Syncing
                </h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-ln-primary" />{" "}
                      ERP Sync
                    </span>
                    <span className="text-ln-subtext">Just now</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-ln-secondary" />{" "}
                      WhatsApp Bot
                    </span>
                    <span className="text-ln-subtext">2m ago</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-ln-tertiary" />{" "}
                      Email Parser
                    </span>
                    <span className="text-ln-subtext">5m ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
