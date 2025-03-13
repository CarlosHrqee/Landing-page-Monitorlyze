
const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 px-6 py-4 bg-gray-900/80 backdrop-blur-lg">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="url(#gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <defs>
              <linearGradient id="gradient" x1="2" y1="7" x2="22" y2="7" gradientUnits="userSpaceOnUse">
                <stop stopColor="#4ADE80" />
                <stop offset="1" stopColor="#22C55E" />
              </linearGradient>
            </defs>
          </svg>
          <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">Monitorlyze</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-gray-300 hover:text-white transition-colors">Recursos</a>
          <a href="#channels" className="text-gray-300 hover:text-white transition-colors">Canais</a>
          <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Preços</a>
          <a href="#faq" className="text-gray-300 hover:text-white transition-colors">FAQ</a>
        </div>

        <button className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 font-medium hover:opacity-80 transition-colors">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
