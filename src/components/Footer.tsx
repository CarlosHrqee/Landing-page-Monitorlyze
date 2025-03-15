import { FaWhatsapp } from "react-icons/fa"; // Ícone do WhatsApp

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-black border-t border-gray-700  py-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          {/* Logo/texto à esquerda */}
          <div className="flex items-center gap-2 mb-4 sm:mb-0">
            <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
              <span className="text-white text-sm">M</span>
            </div>
            <p className="text-white text-sm font-medium">@monitorlyze</p>
          </div>

          {/* Texto de copyright e botão à direita */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 Monitorlyze. Todos os direitos reservados
            </p>
            <a
              href="https://wa.me/5565996203293" // Substitua pelo link real do WhatsApp
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-emerald-700 text-white px-4 py-2 rounded-full text-sm font-medium hover:from-green-600 hover:to-emerald-800 transition-all"
            >
              <FaWhatsapp className="w-5 h-5" />
              Fale com um especialista
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;