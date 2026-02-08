import { Zap, Globe, AtSign, Share2 } from "lucide-react";

const footerLinks = {
  Supplier: [
    "B2B Storefront",
    "Multi-Channel Orders",
    "AI Email Processing",
    "Team Workflow",
  ],
  Buyer: [
    "Inventory Planning",
    "Ops Workflows",
    "Supplier Management",
    "Email AI Processing",
  ],
  Company: ["About", "Careers", "Blog", "Contact"],
  Legal: ["Privacy", "Terms", "Security"],
};

export function Footer() {
  return (
    <footer className="pt-20 pb-10 border-t border-ln-slate-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 mb-16">
          {/* Brand */}
          <div className="col-span-2">
            <a
              className="flex items-center gap-2 font-bold text-2xl tracking-tight mb-6"
              href="#"
            >
              <span className="p-1.5 bg-ln-primary rounded-lg text-ln-bg">
                <Zap className="w-5 h-5" strokeWidth={2.5} />
              </span>
              <span className="text-white">LineNow</span>
            </a>
            <p className="text-sm text-ln-subtext mb-6">
              Revolutionizing B2B commerce with intelligent order flows and
              seamless integrations.
            </p>
            <div className="flex gap-4">
              <a
                className="text-ln-tertiary hover:text-ln-primary transition-colors"
                href="#"
              >
                <Globe className="w-6 h-6" />
              </a>
              <a
                className="text-ln-tertiary hover:text-ln-primary transition-colors"
                href="#"
              >
                <AtSign className="w-6 h-6" />
              </a>
              <a
                className="text-ln-tertiary hover:text-ln-primary transition-colors"
                href="#"
              >
                <Share2 className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-bold text-sm mb-6 uppercase tracking-widest text-white">
                {title}
              </h4>
              <ul className="space-y-4 text-sm text-ln-subtext">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      className="hover:text-ln-primary transition-colors"
                      href="#"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-ln-slate-navy flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-ln-tertiary">
          <p>&copy; 2024 LineNow LLC. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500/50" />
              Systems Operational
            </span>
            <span>English (US)</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
