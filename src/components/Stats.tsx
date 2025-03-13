
const stats = [
  { number: "85%", label: "Redução em tickets de suporte" },
  { number: "24/7", label: "Atendimento disponível" },
  { number: "3min", label: "Tempo médio de resolução" },
];

const Stats = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-r from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 text-center">
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
