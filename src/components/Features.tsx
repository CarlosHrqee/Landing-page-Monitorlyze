
const features = [
  {
    title: "Resolução Especializada",
    description: "Agentes específicos treinados para resolver problemas do seu e-commerce",
  },
  {
    title: "Automação Inteligente",
    description: "Resolva problemas de suporte 24/7 sem intervenção humana",
  },
  {
    title: "Análise em Tempo Real",
    description: "Monitore métricas e eficiência de resolução em tempo real",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 px-6 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Nossos Diferenciais
        </h2>
        
        <p className="text-center text-gray-300 mb-16 max-w-2xl mx-auto">
          Foco em resolução de problemas especializado no seu negócio com agentes específicos para os desafios da sua empresa
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass p-8 rounded-2xl hover:bg-white/5 transition-all duration-300 border border-gray-700"
            >
              <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
