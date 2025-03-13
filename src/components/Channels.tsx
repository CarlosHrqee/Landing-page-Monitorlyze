
import { MessageSquare, Instagram, Phone, Mail, Globe } from "lucide-react";

const channels = [
  {
    name: "WhatsApp",
    icon: <MessageSquare className="h-6 w-6 text-green-400" />,
    description: "Atendimento direto e pessoal via WhatsApp"
  },
  {
    name: "Instagram",
    icon: <Instagram className="h-6 w-6 text-pink-400" />,
    description: "Respostas rápidas nas DMs do Instagram"
  },
  {
    name: "Webchat",
    icon: <Globe className="h-6 w-6 text-blue-400" />,
    description: "Chat integrado ao seu site para suporte imediato"
  },
  {
    name: "Email",
    icon: <Mail className="h-6 w-6 text-yellow-400" />,
    description: "Respostas elaboradas para consultas por email"
  },
  {
    name: "Ligações",
    icon: <Phone className="h-6 w-6 text-purple-400" />,
    description: "Atendimento por voz com reconhecimento avançado"
  }
];

const Channels = () => {
  return (
    <section id="channels" className="py-24 px-6 bg-gray-900/80">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Canais de Atendimento
        </h2>
        
        <p className="text-center text-gray-300 mb-16 max-w-2xl mx-auto">
          Oferecemos suporte omnichannel para que seus clientes possam obter ajuda onde for mais conveniente
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {channels.map((channel, index) => (
            <div
              key={index}
              className="glass p-6 rounded-xl hover:bg-white/5 transition-all duration-300 border border-gray-700 flex flex-col items-center text-center"
            >
              <div className="mb-4 p-3 rounded-full bg-gray-800/80">
                {channel.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">{channel.name}</h3>
              <p className="text-gray-300 text-sm">{channel.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Channels;
