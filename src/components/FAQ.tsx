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
    question: "Como o Monitorlyze reduz meus custos de suporte?",
    answer: "Nosso agente IA resolve problemas de logística, trocas e devoluções automaticamente em Email, WhatsApp e Webchat, reduzindo chamados repetitivos e o tempo da sua equipe, o que corta custos operacionais significativamente.",
    icon: <FaDollarSign className="text-green-400" />,
    iconBg: "bg-green-900/20",
  },
  {
    question: "Quais canais de atendimento são suportados?",
    answer: "O Monitorlyze atua em Email, WhatsApp e Webchat, oferecendo suporte rápido e personalizado onde seus clientes estão, com integração total aos dados da sua loja.",
    icon: <FaComments className="text-emerald-400" />,
    iconBg: "bg-emerald-900/20",
  },
  {
    question: "O atendimento parece humano ou automático?",
    answer: "Nosso agente IA é treinado para responder com um tom natural e empático, refletindo a identidade da sua marca. Seus clientes terão a sensação de falar com uma pessoa real, mas com a eficiência de uma máquina.",
    icon: <FaCogs className="text-lime-400" />,
    iconBg: "bg-lime-900/20",
  },
  {
    question: "É fácil integrar com meus sistemas?",
    answer: "Sim! O Monitorlyze se conecta rapidamente ao seu CRM, ERP e sistemas de rastreio em poucos minutos, puxando dados em tempo real para resolver problemas sem complicações técnicas.",
    icon: <FaPlug className="text-green-400" />,
    iconBg: "bg-green-900/20",
  },
  {
    question: "Posso personalizar as respostas do agente?",
    answer: "Com certeza! Você pode ajustar o tom e o estilo das respostas para alinhar com a voz da sua marca, garantindo um atendimento único e consistente em todos os canais.",
    icon: <FaPaintBrush className="text-emerald-400" />,
    iconBg: "bg-emerald-900/20",
  },
  {
    question: "Como acompanho o desempenho do suporte?",
    answer: "Fornecemos métricas detalhadas, como tempo de resolução, satisfação do cliente e redução de custos, para você monitorar o impacto do Monitorlyze no seu negócio em tempo real.",
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