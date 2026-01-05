import { FiSearch, FiCalendar, FiMapPin } from 'react-icons/fi';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&h=1080&fit=crop"
          alt="Beautiful destination"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Discover Your Next
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">
            Adventure
          </span>
        </h1>
        <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto opacity-90">
          Explore the world's most beautiful destinations with our expertly curated travel experiences
        </p>

        {/* Search Bar */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-2 flex flex-col md:flex-row gap-2">
            <div className="flex-1 flex items-center space-x-3 p-4 bg-gray-50 rounded-xl">
              <FiMapPin className="text-primary-600 w-6 h-6" />
              <input
                type="text"
                placeholder="Where do you want to go?"
                className="flex-1 bg-transparent border-none outline-none text-gray-900 placeholder-gray-500"
              />
            </div>
            <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl">
              <FiCalendar className="text-primary-600 w-6 h-6" />
              <input
                type="date"
                className="bg-transparent border-none outline-none text-gray-900"
              />
            </div>
            <button className="btn-primary px-8 py-4 rounded-xl flex items-center justify-center space-x-2">
              <FiSearch className="w-5 h-5" />
              <span>Search</span>
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          <div>
            <div className="text-4xl font-bold mb-2">50K+</div>
            <div className="text-sm opacity-80">Happy Travelers</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">200+</div>
            <div className="text-sm opacity-80">Destinations</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">15+</div>
            <div className="text-sm opacity-80">Years Experience</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">4.9</div>
            <div className="text-sm opacity-80">Average Rating</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
