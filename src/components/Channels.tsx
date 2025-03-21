import { CheckCircle, Brain, Zap, BarChart, DollarSign } from "lucide-react";

const features = [
  {
    icon: <Brain className="h-8 w-8 text-green-400" />,
    title: "AGENTE IA ESPECIALIZADO NA SUA LOJA",
    subtitle: "Resoluções personalizadas com base nos seus dados",
    description: "Nosso Agente IA é treinado com os dados da sua loja, entendendo cada detalhe do seu negócio – de logística a trocas e devoluções. Ele resolve problemas em Email, WhatsApp e Webchat com respostas sob medida, aumentando a satisfação do cliente e reduzindo o tempo de espera. É como ter um especialista que conhece seu ecommerce por dentro! 🙌🏻",
    image: "/images/first.png",
    buttons: [
      { text: "Iniciar teste grátis", primary: true, href: "https://tally.so/r/wLM912" },
      { text: "Fale com um especialista", primary: false, href: "https://wa.me/5565996203293" }
    ]
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-blue-400" />,
    title: "ATENDIMENTO HUMANIZADO E INTELIGENTE",
    subtitle: "Converse como gente, resolva como máquina",
    description: "Esqueça respostas robóticas. Nosso Agente IA usa um tom natural e empático para lidar com logística, fornecimento ou devoluções, enquanto resolve tudo com a rapidez de uma IA. Seus clientes se sentem ouvidos e valorizados, o que aumenta o LTV e transforma atendimentos em oportunidades de fidelização.",
    image: "/images/second.png"
  },
  {
    icon: <Zap className="h-8 w-8 text-yellow-400" />,
    title: "INTEGRAÇÃO TOTAL COM SEU ECOSSISTEMA",
    subtitle: "Conecte CRM, ERP e rastreios em minutos",
    description: "A Monitorlyze se pluga ao seu CRM, ERP e sistemas de rastreio sem complicações, unificando dados para um atendimento impecável. Problemas logísticos ou de estoque? Nosso Agente IA acessa tudo em tempo real e resolve rápido em Email, WhatsApp ou Webchat, poupando seu time de horas de trabalho manual.",
    image: "/images/raio.png"
  },
  {
    icon: <BarChart className="h-8 w-8 text-purple-400" />,
    title: "MAIS EFICIÊNCIA, MENOS CUSTOS",
    subtitle: "Otimize processos e veja resultados imediatos",
    description: "Com a Monitorlyze, seu suporte deixa de ser um custo e vira um diferencial competitivo. Nosso Agente IA reduz chamados repetitivos e erros humanos, resolvendo trocas, devoluções e dúvidas em poucos cliques. Isso significa menos despesas operacionais e mais foco no crescimento do seu negócio!",
    image: "/images/money.png"
  },
  {
    icon: <DollarSign className="h-8 w-8 text-emerald-400" />,
    title: "AUMENTO DO LTV E DA SATISFAÇÃO",
    subtitle: "Clientes felizes voltam e gastam mais",
    description: "Nosso Agente IA não só resolve problemas – ele cria experiências incríveis. Ao lidar com logística, fornecimento ou devoluções de forma ágila e personalizada em Email, WhatsApp e Webchat, seus clientes ficam mais satisfeitos e propensos a comprar novamente, elevando o LTV e fortalecendo sua marca.",
    image: "/images/data.png"
  }
];

const Features = () => {
  return (
    <section id="channels" className="py-24 px-6 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
          Recursos Exclusivos
        </h2>
        <p className="text-center text-gray-300 mb-16 max-w-2xl mx-auto">
          Resolva os problemas do seu suporte com o Agente IA especializado na sua loja ⚡
        </p>
        
        <div className="space-y-16">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center border-b border-gray-800 pb-16 ${index === features.length - 1 ? 'border-b-0 pb-0' : ''}`}
            >
              <div className="md:w-1/2">
                <div className="p-4 bg-gray-800/50 inline-block rounded-2xl mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-1 text-white">
                  {feature.title}
                </h3>
                <p className="text-lg text-gray-300 italic mb-4">
                  {feature.subtitle}
                </p>
                <p className="text-gray-300 mb-6">
                  {feature.description.split('seu').map((part, i, arr) => 
                    i < arr.length - 1 ? 
                    <span key={i}>{part}<em className="text-green-400">seu</em></span> : 
                    <span key={i}>{part}</span>
                  )}
                </p>
                
                {feature.buttons && (
                  <div className="flex flex-wrap gap-4">
                    {feature.buttons.map((button, buttonIndex) => (
                      button.href ? (
                        <a 
                          key={buttonIndex}
                          href={button.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${button.primary ? 
                            'bg-gradient-to-r from-green-500 to-emerald-700 text-white' : 
                            'bg-transparent border-2 border-green-500 text-green-400'} 
                            px-5 py-2 rounded-lg font-medium transition-all hover:shadow-lg`}
                        >
                          {button.text}
                        </a>
                      ) : (
                        <button 
                          key={buttonIndex}
                          className={`${button.primary ? 
                            'bg-gradient-to-r from-green-500 to-emerald-700 text-white' : 
                            'bg-transparent border-2 border-green-500 text-green-400'} 
                            px-5 py-2 rounded-lg font-medium transition-all hover:shadow-lg`}
                        >
                          {button.text}
                        </button>
                      )
                    ))}
                  </div>
                )}
              </div>
              
              <div className="md:w-1/2 bg-gray-800/30 p-8 rounded-2xl border border-gray-700">
                <div className="aspect-video rounded-xl overflow-hidden bg-gray-700/50 flex items-center justify-center">
                  {feature.image ? (
                    <img 
                      src={feature.image} 
                      alt={feature.title} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-gray-500 text-sm">Imagem ilustrativa do recurso</div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;