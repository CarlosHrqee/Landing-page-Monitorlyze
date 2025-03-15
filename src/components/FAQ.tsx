import { 
  FaDollarSign, 
  FaComments, 
  FaCogs, 
  FaPlug, 
  FaPaintBrush, 
  FaChartLine 
} from 'react-icons/fa';

const faqs = [
  {
    question: "Como o seu software aumenta meu faturamento?",
    answer: "Nosso agente IA cria campanhas personalizadas em massa via SMS, Email e WhatsApp, otimizando conversões e gerando resultados instantâneos com base nos dados do seu ecommerce.",
    icon: <FaDollarSign className="text-green-400" />,
    iconBg: "bg-green-900/20",
  },
  {
    question: "Em quais canais as campanhas são enviadas?",
    answer: "Nosso software dispara campanhas em SMS, Email e WhatsApp, alcançando seus clientes onde eles estão, com mensagens personalizadas e automáticas.",
    icon: <FaComments className="text-emerald-400" />,
    iconBg: "bg-emerald-900/20",
  },
  {
    question: "As campanhas parecem humanas ou robóticas?",
    answer: "Nosso agente IA é treinado para criar mensagens naturais e envolventes, refletindo o tom da sua marca, garantindo que seus clientes sintam que estão falando com uma pessoa real.",
    icon: <FaCogs className="text-lime-400" />,
    iconBg: "bg-lime-900/20",
  },
  {
    question: "É fácil integrar com meu ecommerce?",
    answer: "Sim! Com uma integração simples e rápida, nosso software se conecta ao seu sistema em poucos minutos, puxando dados para começar as campanhas imediatamente.",
    icon: <FaPlug className="text-green-400" />,
    iconBg: "bg-green-900/20",
  },
  {
    question: "Posso personalizar as campanhas?",
    answer: "Com certeza! Você pode escolher entre diversos modelos prontos e ajustar o conteúdo para refletir a identidade do seu ecommerce, garantindo campanhas únicas para cada cliente.",
    icon: <FaPaintBrush className="text-emerald-400" />,
    iconBg: "bg-emerald-900/20",
  },
  {
    question: "Como acompanho os resultados das campanhas?",
    answer: "Oferecemos métricas detalhadas como taxas de abertura, cliques, conversões e aumento de faturamento, para você medir o sucesso de cada campanha em tempo real.",
    icon: <FaChartLine className="text-lime-400" />,
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
        
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-white">
          Dúvidas comuns
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-gray-800/50 p-8 rounded-3xl hover:shadow-lg transition-all duration-300 border border-gray-700"
            >
              <div className={`w-12 h-12 ${faq.iconBg} rounded-full mb-6 flex items-center justify-center`}>
                {faq.icon}
              </div>
              <h3 className="text-xl font-medium mb-3 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                {faq.question}
              </h3>
              <p className="text-gray-300 text-sm">{faq.answer}</p>
            </div>
          ))}
        </div>

        {/* Botão de CTA com redirecionamento */}
        <div className="mt-12 text-center">
          <a 
            href="https://tally.so/r/wLM912" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-emerald-700 text-white px-6 py-3 rounded-lg font-medium hover:from-green-600 hover:to-emerald-800 transition-all"
          >
            <span className="w-4 h-4">
              <FaPlug className="text-white" />
            </span>
            Integrar ao meu ecommerce
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;