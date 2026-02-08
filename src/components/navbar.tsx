import { Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-ln-slate-navy/50 bg-ln-bg/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-8">
            <a
              className="flex items-center gap-2 font-bold text-2xl tracking-tight"
              href="#"
            >
              <span className="p-1.5 bg-ln-primary rounded-lg">
                <Zap className="w-6 h-6 text-ln-bg" strokeWidth={2.5} />
              </span>
              <span className="text-white">
                LineNow<span className="text-ln-primary">.</span>
              </span>
            </a>
            <div className="hidden md:flex items-center gap-6 text-sm font-medium text-ln-subtext">
              <a
                className="hover:text-ln-primary transition-colors"
                href="#features"
              >
                Product
              </a>
              <a className="hover:text-ln-primary transition-colors" href="#">
                Industries
              </a>
              <a className="hover:text-ln-primary transition-colors" href="#">
                Pricing
              </a>
              <a className="hover:text-ln-primary transition-colors" href="#">
                Resources
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              className="hidden sm:block text-sm font-semibold text-ln-subtext hover:text-ln-primary"
            >
              Login
            </Button>
            <Button className="bg-ln-primary text-ln-bg font-bold text-sm px-5 py-2.5 rounded-full hover:shadow-lg hover:shadow-ln-primary/20 transition-all">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
