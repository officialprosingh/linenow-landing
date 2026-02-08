export function Integrations() {
  return (
    <section className="py-16 border-y border-ln-slate-navy/50 bg-[#030304]">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm font-semibold text-ln-subtext mb-12 uppercase tracking-[0.2em]">
          Integrating with your tech stack
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 hover:opacity-100 transition-opacity">
          {/* Shopify */}
          <div className="flex items-center justify-center transition-all duration-300">
            <svg
              className="h-8 w-auto fill-white"
              viewBox="0 0 162 186"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M141.4 153.9c-1.3 2.1-17.7 28.5-17.7 28.5h-54.8s-42-159.2-42.3-160.3c-.3-1.1-2.9-6.4 1.5-7.3 4.4-.9 38.6-8.2 38.6-8.2s3.1-6.6 4.9-6.6c1.8 0 21.6 4.3 21.6 4.3s2 1.4 2 2.8c0 1.4-1.1 5.4-1.1 5.4s47.9 14.2 49 14.6c1.1.4 6 2.3 5.4 9-.3 2.9-10.7 75.9-10.7 75.9l12 25.1c0-.1-7.1 14.9-8.4 16.9zm-38.5-49.8s0-.1 0 0l-5.6-21.5c-.1-.3-.4-.5-.7-.5-.3 0-14.7 1.8-21.3 2.5-3.3.3-5.3 3.6-4.1 6.7 1.2 3 10.9 26.9 10.9 26.9s.2.4.5.5h.1c.3 0 11.4-4.8 19.3-8.3 3.4-1.6 2.8-5.3.9-6.3z" />
            </svg>
          </div>

          {/* SAP */}
          <div className="flex items-center justify-center transition-all duration-300">
            <svg
              className="h-8 w-auto fill-white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 8.019c0-1.848 1.492-3.34 3.33-3.34h17.339c1.838 0 3.33 1.492 3.33 3.34v7.962c0 1.848-1.492 3.34-3.33 3.34H3.33c-1.838 0-3.33-1.492-3.33-3.34V8.019zm13.116 1.488c-.613 0-1.1.185-1.464.557-.363.372-.544.887-.544 1.545v.02c0 .666.183 1.183.551 1.552.368.368.854.552 1.457.552.613 0 1.1-.185 1.464-.557.363-.372.544-.887.544-1.545v-.02c0-.666-.183-1.183-.551-1.552-.368-.368-.854-.552-1.457-.552zm-5.751 3.25l-.264-.993h-1.68l-.264.993H3.655l1.861-6.108h1.657l1.86 6.108h-1.668zm-.556-2.105l-.576-2.173-.577 2.173h1.153zm11.977-4.003h-3.414v6.108h1.5v-2.115h1.914c.642 0 1.157-.184 1.545-.553.388-.369.582-.888.582-1.556v-.022c0-.667-.196-1.18-.588-1.54-.393-.36-.931-.541-1.614-.541h-.025v.019zm-.022 1.173c.27 0 .476.069.619.208.143.138.214.341.214.609v.021c0 .272-.072.476-.217.613-.145.137-.347.206-.607.206H18.79v-1.657h.024z" />
            </svg>
          </div>

          {/* Oracle */}
          <div className="flex items-center justify-center transition-all duration-300">
            <svg
              className="h-6 w-auto fill-white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 4.414C5.513 4.414 0 9.8 0 12c0 2.2 5.513 7.586 12 7.586s12-5.386 12-7.586c0-2.2-5.513-7.586-12-7.586zm0 13.064c-3.141 0-5.688-2.547-5.688-5.688S8.859 6.102 12 6.102s5.688 2.547 5.688 5.688-2.547 5.688-5.688 5.688z" />
            </svg>
          </div>

          {/* NetSuite */}
          <div className="flex items-center justify-center transition-all duration-300">
            <div className="flex items-center gap-2">
              <svg
                className="h-7 w-auto fill-white"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 0L2.4 5.5v11L12 22l9.6-5.5v-11L12 0zm0 3.3l6.4 3.7v7.4L12 18.1 5.6 14.4V7L12 3.3z" />
              </svg>
              <span className="text-white font-bold text-xl tracking-tighter">
                NETSUITE
              </span>
            </div>
          </div>

          {/* Dynamics 365 */}
          <div className="flex items-center justify-center transition-all duration-300">
            <div className="flex items-center gap-2.5">
              <svg
                className="h-7 w-auto fill-white"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11.4 24l7.9-14-13.3 4.6L11.4 24zM12.6 0L4.7 14l13.3-4.6L12.6 0z" />
              </svg>
              <span className="text-white font-semibold text-lg tracking-tight">
                Dynamics 365
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
