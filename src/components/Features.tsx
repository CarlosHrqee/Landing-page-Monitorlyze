import { FaShopify } from "react-icons/fa";
import { SiWoocommerce } from "react-icons/si";

const platforms = [
  {
    name: "Shopify",
    icon: <FaShopify className="h-12 w-12 text-[#96DC8C]" />,
    description: "Integração completa com todas as funcionalidades da Shopify"
  },
  {
    name: "NuvemShop",
    icon: <img src="/images/nuvem.png" alt="NuvemShop" className="h-12 w-12 object-contain" />,
    description: "Conecte sua loja NuvemShop em poucos cliques"
  },
  {
    name: "CartPanda",
    icon: <img src="/images/Cartpanda.png" alt="CartPanda" className="h-12 w-12 object-contain" />,
    description: "Suporte especializado para lojas CartPanda"
  },
  {
    name: "WooCommerce",
    icon: <SiWoocommerce className="h-12 w-12 text-[#96DC8C]" />,
    description: "Compatibilidade total com lojas WordPress/WooCommerce"
  },
  {
    name: "Magento",
    icon: <img src="/images/magento.jpeg" alt="Magento" className="h-12 w-12 object-contain" />,
    description: "Integração avançada com recursos da Magento"
  },
  {
    name: "VTEX",
    icon: <img src="/images/vtex.png" alt="VTEX" className="h-12 w-12 object-contain" />,
    description: "Funcionalidades exclusivas para plataforma VTEX"
  },
];

const IntegrationPlatforms = () => {
  return (
    <section id="integration" className="py-24 px-6 bg-gradient-to-r from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto">
        {/* Headline com o mesmo gradiente dos números das métricas */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-white">
          Integre com sua plataforma preferida
        </h2>
        <p className="text-center text-gray-300 max-w-2xl mx-auto mb-16">
          Nossa solução se conecta facilmente com as principais plataformas de e-commerce do mercado, garantindo uma experiência perfeita para você e seus clientes.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {platforms.map((platform, index) => (
            <div key={index} className="bg-gray-800/30 border border-gray-700 rounded-xl p-6 flex flex-col items-center text-center hover:bg-gray-800/50 transition-all hover:border-green-500/30 h-full">
              <div className="mb-4 flex items-center justify-center h-16">
                {platform.icon}
              </div>
              <h3 className="font-bold text-lg mb-2">{platform.name}</h3>
              <p className="text-gray-400 text-sm">{platform.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-6">E muitas outras plataformas...</p>
          <button className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-green-500 text-green-400 px-6 py-3 rounded-lg font-medium hover:bg-green-500/10 transition-all">
            Integrar ao meu ecommerce
          </button>
        </div>
      </div>
    </section>
  );
};

export default IntegrationPlatforms;