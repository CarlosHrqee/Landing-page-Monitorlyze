import { CheckCircle, Brain, Zap, BarChart, DollarSign } from "lucide-react";

const features = [
  {
    icon: <Brain className="h-8 w-8 text-green-400" />,
    title: "PERSONALIZAÇÃO EXCLUSIVA PARA CADA CLIENTE",
    subtitle: "Campanhas que falam diretamente com quem compra",
    description: "Diga adeus às mensagens genéricas. Nosso Agente IA cria campanhas de SMS, Email e WhatsApp sob medida para cada cliente, usando dados do seu ecommerce como histórico de compras e preferências. É como ter um marqueteiro dedicado para cada pessoa na sua base, convertendo mais com personalização de verdade! 🙌🏻",
    image: "src/components/first.png",
    buttons: [
      { text: "Iniciar teste grátis", primary: true, href: "https://tally.so/r/wLM912" },
      { text: "Fale com um especialista", primary: false, href: "https://wa.me/5565996203293" }
    ]
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-blue-400" />,
    title: "HUMANIZAÇÃO NA CAMPANHA",
    subtitle: "Comunicação que parece gente, não robô",
    description: "Nosso Agente IA é treinado para criar mensagens naturais e envolventes, com tom humano que conecta e vende. Esqueça textos frios e automáticos – suas campanhas vão soar como se fossem escritas por um especialista em vendas do seu time, conquistando a confiança dos clientes em cada palavra.",
    image: "src/components/second.png"
  },
  {
    icon: <Zap className="h-8 w-8 text-yellow-400" />,
    title: "FACILIDADE DE INTEGRAÇÃO",
    subtitle: "Conecte e comece a lucrar em minutos",
    description: "Com uma integração simples e direta, nosso software se pluga ao seu ecommerce rapidinho – sem complicações técnicas. Ele puxa dados do seu sistema e já começa a criar campanhas automáticas e personalizadas. É tão fácil que você só precisa dizer 'vai' para ver o faturamento subir!",
    image: "src/components/raio.png"
  },
  {
    icon: <BarChart className="h-8 w-8 text-purple-400" />,
    title: "AUMENTO INSTANTÂNEO DE FATURAMENTO",
    subtitle: "Resultados que aparecem logo na primeira campanha",
    description: "Nosso Agente IA não perde tempo: com campanhas otimizadas e disparos estratégicos via SMS, Email e WhatsApp, você vê o faturamento crescer desde o primeiro envio. É a solução perfeita para quem quer mais vendas agora, sem esperar semanas por resultados.",
    image: "src/components/money.png"
  },
  {
    icon: <DollarSign className="h-8 w-8 text-emerald-400" />,
    title: "DIVERSOS MODELOS DE CAMPANHAS PARA ECOMMERCES",
    subtitle: "Opções prontas para qualquer objetivo",
    description: "Seja para recuperar carrinhos abandonados, lançar promoções ou fidelizar clientes, nossa plataforma oferece vários modelos de campanhas testados e adaptados para ecommerces. O Agente IA personaliza cada um deles para o seu público, garantindo máxima conversão com o mínimo de esforço.",
    image: "src/components/data.png"
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
          Nossa plataforma foi projetada para turbinar o faturamento do seu ecommerce com campanhas inteligentes e personalizadas
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