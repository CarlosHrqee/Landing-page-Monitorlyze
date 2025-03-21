const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center pt-24 bg-gradient-to-r from-gray-900 to-black">
      {/* Background pattern */}
      <div className="absolute inset-0">
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
        {/* Badge adicionado aqui */}
        <div className="inline-flex items-center mb-4 px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium border border-green-200">
          <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2"></span>
          Melhor Agente IA ecommerce 2025
        </div>
        <h1 className="text-[50px] md:text-[60px] leading-[1.2] font-bold tracking-[-0.02em] text-white mb-8">
          <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">Resolva</span> os problemas do seu suporte com o <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent"> Agente IA </span>especializado na sua loja ⚡
        </h1>
        <div className="max-w-[800px] mx-auto mb-12">
          <p className="text-xl text-gray-200">
          Se você ainda depende de pessoas no suporte, está perdendo dinheiro com altos custos, tempo limitado e gargalos de atendimento – conheça a Monitorlyze, Agente IA que resolve tudo no Email, WhatsApp e Webchat, poupando tempo e custos!
          </p>
        </div>
        {/* Dois botões lado a lado com redirecionamento */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <a 
            href="https://tally.so/r/wLM912" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-emerald-700 text-white px-6 py-3 rounded-lg font-medium hover:from-green-600 hover:to-emerald-800 transition-all"
          >
            <span className="w-4 h-4">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            Iniciar teste grátis
          </a>
          <a 
            href="https://wa.me/5565996203293" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-green-500 text-green-400 px-6 py-3 rounded-lg font-medium hover:bg-green-500/10 transition-all"
          >
            Falar com um especialista
          </a>
        </div>
        <div className="max-w-[800px] mx-auto border-4 border-gray-700 rounded-xl shadow-xl overflow-hidden">
          <img
            src="/images/service.png"
            alt="Dashboard do nosso agente IA"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;