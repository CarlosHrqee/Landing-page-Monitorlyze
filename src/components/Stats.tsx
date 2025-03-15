const stats = [
  { number: "40%", label: "Aumento nas taxas de conversão" },
  { number: "98%", label: "Campanhas entregues com sucesso" },
  { number: "5min", label: "Tempo para configurar campanhas" },
  { number: "60%", label: "Crescimento no faturamento mensal" },
];

const Stats = () => {
  return (
    <section id="Stats" className="py-24 px-6 bg-gradient-to-r from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto">
        {/* Headline com o mesmo gradiente dos números das métricas */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
          Transforme seu ecommerce com campanhas inteligentes!
        </h2>
        <div className="grid md:grid-cols-4 gap-12 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 via-lime-300 to-emerald-500 bg-clip-text text-transparent">{stat.number}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;