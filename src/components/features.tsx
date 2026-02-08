import { ListOrdered, Brain, RefreshCw, LayoutDashboard } from "lucide-react";

const features = [
  {
    icon: ListOrdered,
    title: "Automated Reordering",
    description:
      "Never run out of stock. Our AI predicts replenishment needs and generates orders automatically.",
  },
  {
    icon: Brain,
    title: "Smart Relationships",
    description:
      "Manage vendors with unified communication histories and AI-summarized interaction logs.",
  },
  {
    icon: RefreshCw,
    title: "Error-Free Sync",
    description:
      "Real-time synchronization across ERPs, spreadsheets, and storefronts with 99.9% accuracy.",
  },
  {
    icon: LayoutDashboard,
    title: "Unified Dashboard",
    description:
      "One source of truth for all buyers and suppliers. No more jumping between tools.",
  },
];

export function Features() {
  return (
    <section className="py-24" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-16 text-white">
          Built for High-Growth Operations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="glass p-8 rounded-2xl text-left border-ln-slate-navy hover:border-ln-primary/50 transition-colors group"
            >
              <div className="w-12 h-12 bg-ln-primary/10 rounded-xl flex items-center justify-center mb-6 text-ln-primary group-hover:bg-ln-primary group-hover:text-ln-bg transition-all">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">
                {feature.title}
              </h3>
              <p className="text-ln-subtext text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
