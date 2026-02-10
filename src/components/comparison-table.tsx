import { CheckCircle } from "lucide-react";

const rows = [
  {
    feature: "Order Entry",
    lineNow: "Instant AI Auto-fill",
    legacy: "Manual (5-10 min/order)",
  },
  {
    feature: "Data Sync",
    lineNow: "Real-time Bi-directional",
    legacy: "Batch Processing (Daily)",
  },
  {
    feature: "Collaboration",
    lineNow: "Built-in Messaging",
    legacy: "Endless Email Chains",
  },
  {
    feature: "Intelligence",
    lineNow: "Predictive Analytics",
    legacy: "Reactive Reports",
  },
];

export function ComparisonTable() {
  return (
    <section className="py-24 border-t border-ln-slate-navy">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-ln-text-color">
            LineNow vs Legacy Systems
          </h2>
          <p className="text-ln-subtext">
            Why leading enterprises are making the switch.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-ln-slate-navy">
                <th className="py-6 px-4 font-semibold text-ln-tertiary">
                  Feature
                </th>
                <th className="py-6 px-4 font-bold text-ln-primary">
                  LineNow AI
                </th>
                <th className="py-6 px-4 font-semibold text-ln-subtext/60">
                  Legacy Systems
                </th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {rows.map((row) => (
                <tr
                  key={row.feature}
                  className="border-b border-ln-slate-navy/50"
                >
                  <td className="py-6 px-4 font-medium text-ln-text-color">
                    {row.feature}
                  </td>
                  <td className="py-6 px-4">
                    <span className="flex items-center gap-2 text-ln-primary">
                      <CheckCircle className="w-[18px] h-[18px]" />
                      {row.lineNow}
                    </span>
                  </td>
                  <td className="py-6 px-4 text-ln-subtext/60">
                    {row.legacy}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
