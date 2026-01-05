import { useState, useEffect } from 'react';
import { FiMenu, FiX, FiSearch } from 'react-icons/fi';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">T</span>
            </div>
            <span className={`text-2xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              TravelWander
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className={`font-medium transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-primary-200'
              }`}
            >
              Home
            </a>
            <a
              href="#destinations"
              className={`font-medium transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-primary-200'
              }`}
            >
              Destinations
            </a>
            <a
              href="#tours"
              className={`font-medium transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-primary-200'
              }`}
            >
              Tours
            </a>
            <a
              href="#testimonials"
              className={`font-medium transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-primary-200'
              }`}
            >
              Reviews
            </a>
            <a
              href="#contact"
              className={`font-medium transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-primary-200'
              }`}
            >
              Contact
            </a>
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              className={`p-2 rounded-lg transition-colors ${
                isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
            >
              <FiSearch className="w-5 h-5" />
            </button>
            <button className="btn-primary">Book Now</button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 ${isScrolled ? 'text-gray-900' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 pt-4">
              <a href="#home" className="text-gray-700 font-medium">Home</a>
              <a href="#destinations" className="text-gray-700 font-medium">Destinations</a>
              <a href="#tours" className="text-gray-700 font-medium">Tours</a>
              <a href="#testimonials" className="text-gray-700 font-medium">Reviews</a>
              <a href="#contact" className="text-gray-700 font-medium">Contact</a>
              <button className="btn-primary w-full mt-2">Book Now</button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
