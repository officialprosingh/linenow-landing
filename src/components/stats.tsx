const stats = [
  { value: "99.9%", label: "Sync Accuracy" },
  { value: "60s", label: "Setup Time" },
  { value: "40%", label: "More Efficiency" },
  { value: "12M+", label: "Orders Processed" },
];

export function Stats() {
  return (
    <section className="py-24 bg-gradient-to-r from-ln-primary to-ln-tertiary text-ln-bg">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat) => (
          <div key={stat.label}>
            <div className="text-4xl md:text-6xl font-black mb-2">
              {stat.value}
            </div>
            <div className="text-sm font-bold uppercase tracking-widest opacity-70">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
