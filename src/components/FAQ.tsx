
const faqs = [
  {
    question: "Como o Monitorlyze pode reduzir meus custos de suporte?",
    answer: "Nosso agente IA automatiza a resolução de problemas comuns de e-commerce como trocas, devoluções e problemas logísticos, reduzindo a necessidade de equipes grandes de suporte.",
    iconBg: "bg-green-900/20",
  },
  {
    question: "Em quais canais o Monitorlyze funciona?",
    answer: "Nosso agente atua em diversos canais como WhatsApp, Instagram, webchat no site, e-mail e ligações telefônicas, garantindo uma experiência omnichannel.",
    iconBg: "bg-emerald-900/20",
  },
  {
    question: "O agente consegue resolver problemas complexos?",
    answer: "Sim, nossos agentes são treinados para resolver problemas específicos do seu negócio, desde questões simples até casos mais complexos de logística e atendimento.",
    iconBg: "bg-lime-900/20",
  },
  {
    question: "Como é feita a integração com meu e-commerce?",
    answer: "Oferecemos um processo de integração simplificado com as principais plataformas de e-commerce, permitindo que você esteja operacional em poucos dias.",
    iconBg: "bg-green-900/20",
  },
  {
    question: "Posso personalizar as respostas do agente?",
    answer: "Absolutamente! O Monitorlyze é totalmente personalizável para refletir o tom e a identidade da sua marca, garantindo uma experiência coesa para seus clientes.",
    iconBg: "bg-emerald-900/20",
  },
  {
    question: "Como posso medir o sucesso do Monitorlyze?",
    answer: "Nossa plataforma oferece métricas detalhadas sobre taxa de resolução, tempo médio de atendimento, satisfação do cliente e muito mais para que você possa acompanhar o ROI.",
    iconBg: "bg-lime-900/20",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-2 justify-center mb-4">
          <div className="w-6 h-6 rounded-full border border-gray-600 flex items-center justify-center">
            <span className="text-sm text-gray-300">?</span>
          </div>
          <span className="text-sm text-gray-400">Perguntas Frequentes</span>
        </div>
        
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 via-lime-300 to-emerald-500 bg-clip-text text-transparent">
          Dúvidas comuns
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-gray-800/50 p-8 rounded-3xl hover:shadow-lg transition-all duration-300 border border-gray-700"
            >
              <div className={`w-12 h-6 ${faq.iconBg} rounded-full mb-6`} />
              <h3 className="text-xl font-medium mb-3 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">{faq.question}</h3>
              <p className="text-gray-300 text-sm">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
