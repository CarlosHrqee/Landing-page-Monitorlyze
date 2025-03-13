
const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center pt-24">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gray-900">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at center, rgba(255,255,255,0.05) 2px, transparent 2px)`,
          backgroundSize: '48px 48px',
          opacity: 0.3
        }}></div>
      </div>

      {/* Floating circles */}
      <div className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-gray-700 border-2 border-gray-600 animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-3 h-3 rounded-full bg-gray-700 border-2 border-gray-600 animate-float"></div>
      <div className="absolute top-1/3 right-1/3 w-3 h-3 rounded-full bg-gray-700 border-2 border-gray-600 animate-float"></div>
      
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center">
        <h1 className="text-[60px] md:text-[80px] leading-[1] font-medium tracking-[-0.02em] bg-gradient-to-r from-green-400 via-lime-300 to-emerald-500 bg-clip-text text-transparent mb-8">
          Monitorlyze<br />Suporte IA
        </h1>
        
        <div className="max-w-[700px] mx-auto mb-12">
          <p className="text-xl text-gray-200">
            Reduzindo custos e aumentando a eficiência de<br />
            resolução de problemas para o seu e-commerce.
          </p>
        </div>

        <button className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-700 text-white px-6 py-3 rounded-lg font-medium hover:from-green-600 hover:to-emerald-800 transition-all mb-12">
          <span className="w-4 h-4">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          Agendar uma demo
        </button>

        <div className="max-w-[800px] mx-auto border-4 border-gray-700 rounded-xl shadow-xl overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80" 
            alt="Monitorlyze Dashboard" 
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
