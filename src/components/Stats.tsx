const stats = [
  { number: "85%", label: "Redução no tempo de resolução de chamados" },
  { number: "95%", label: "Satisfação do cliente após atendimento" },
  { number: "10min", label: "Tempo para integrar com seus sistemas" },
  { number: "30%", label: "Aumento no LTV dos clientes" },
];

const Stats = () => {
  return (
    <section id="Stats" className="py-24 px-6 bg-gradient-to-r from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto">
        {/* Headline ajustada para o contexto do Monitorlyze */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
          Revolucione seu suporte com o poder da IA!
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