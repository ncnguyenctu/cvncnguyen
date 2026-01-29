import { useState, useEffect } from 'react';
import { Menu, X, Stethoscope } from 'lucide-react';

const navLinks = [
  { href: '#about', label: 'Giới thiệu' },
  { href: '#expertise', label: 'Chuyên môn' },
  { href: '#journey', label: 'Hành trình' },
  { href: '#achievements', label: 'Thành tích' },
  { href: '#contact', label: 'Liên hệ' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-md py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
              isScrolled ? 'bg-sage-500' : 'bg-sage-500/90'
            }`}>
              <Stethoscope size={22} className="text-white" />
            </div>
            <span className={`font-playfair font-bold text-xl transition-colors ${
              isScrolled ? 'text-gray-900' : 'text-gray-900'
            }`}>
              NCN<span className="text-sage-500">.</span>
            </span>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors hover:text-sage-500 ${
                  isScrolled ? 'text-gray-700' : 'text-gray-800'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a 
              href="#contact" 
              className="bg-sage-500 hover:bg-sage-600 text-white px-5 py-2 rounded-full font-medium transition-all duration-300"
            >
              Liên hệ ngay
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-gray-700"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-white rounded-2xl shadow-xl p-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-gray-700 hover:bg-sage-50 hover:text-sage-600 rounded-xl font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a 
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block bg-sage-500 hover:bg-sage-600 text-white px-4 py-3 rounded-xl font-medium text-center transition-colors"
            >
              Liên hệ ngay
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
