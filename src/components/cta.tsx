import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <div className="glass p-12 md:p-20 rounded-3xl border-ln-slate-navy relative overflow-hidden bg-gradient-to-br from-ln-slate-navy/20 to-ln-bg">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-ln-primary/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-ln-tertiary/10 rounded-full blur-[100px]" />
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-ln-text-color relative">
            Dig in today.
          </h2>
          <p className="text-lg text-ln-subtext mb-10 max-w-lg mx-auto relative">
            Join thousands of high-growth businesses scaling their order
            operations with LineNow.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative">
            <Button className="w-full sm:w-auto px-10 py-4 h-auto bg-ln-primary text-ln-bg font-bold rounded-xl hover:scale-105 transition-transform glow-accent">
              Get Started
            </Button>
            <Button
              variant="outline"
              className="w-full sm:w-auto px-10 py-4 h-auto bg-ln-slate-navy/50 text-ln-text-color font-bold rounded-xl hover:bg-ln-slate-navy transition-colors border-ln-slate-navy"
            >
              Book a Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
