
const Header = ({ isDark, currentTemplate, mobileMenuOpen, setMobileMenuOpen, toggleTheme, setCurrentTemplate, navigation }) => {
  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isDark ? 'bg-black/90' : 'bg-white/90'
      } backdrop-blur-md shadow-lg ${
        currentTemplate === 'neon' ? 'shadow-cyan-500/30' : 'shadow-gray-500/30'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <h1 
            className={`text-2xl font-bold transition-all duration-300 ${
              currentTemplate === 'cyber' ? 'animate-glitch font-mono' : 'font-inter'
            } ${isDark ? 'text-cyan-400' : 'text-gray-800'} ${
              currentTemplate === 'neon' ? 'gradient-text' : ''
            }`}
          >
            {currentTemplate === 'cyber' ? '[Chanthou@Dev]' : 'Roeun Chanthou'}
          </h1>
          
          {/* Desktop Navigation */}
          <div className="hidden sm:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`transition-colors duration-300 font-medium ${
                  isDark ? 'text-cyan-300 hover:text-cyan-500' : 'text-gray-600 hover:text-gray-900'
                } ${currentTemplate === 'cyber' ? 'font-mono' : 'font-inter'}`}
              >
                {currentTemplate === 'cyber' ? item.cyberLabel : item.label}
              </a>
            ))}
          </div>
          
          {/* Controls */}
          <div className="flex items-center gap-3">
            {/* Template Selector */}
            <select
              value={currentTemplate}
              onChange={(e) => setCurrentTemplate(e.target.value)}
              className={`px-3 py-1 text-sm rounded transition-all duration-300 ${
                isDark ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-800'
              } border border-gray-300`}
            >
              <option value="modern">Modern</option>
              <option value="cyber">Cyber</option>
              <option value="neon">Neon</option>
              <option value="minimal">Minimal</option>
            </select>
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`px-4 py-2 text-sm font-semibold rounded transition-all duration-300 transform hover:scale-105 ${
                isDark ? 'bg-cyan-500 text-black hover:bg-cyan-400' : 'bg-gray-800 text-white hover:bg-gray-700'
              }`}
            >
              {isDark ? '☀️' : '🌙'}
            </button>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`sm:hidden transition-colors duration-300 ${
                isDark ? 'text-cyan-300' : 'text-gray-600'
              }`}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d={mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div 
            className={`sm:hidden absolute top-16 left-0 w-full transition-all duration-300 ${
              isDark ? 'bg-black/90' : 'bg-white/90'
            } backdrop-blur-md shadow-lg`}
          >
            <div className="flex flex-col items-center py-4 space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`transition-colors duration-300 font-medium ${
                    isDark ? 'text-cyan-300 hover:text-cyan-500' : 'text-gray-600 hover:text-gray-900'
                  } ${currentTemplate === 'cyber' ? 'font-mono' : 'font-inter'}`}
                >
                  {currentTemplate === 'cyber' ? item.cyberLabel : item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;