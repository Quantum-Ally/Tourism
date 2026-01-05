import { FiStar, FiClock, FiArrowRight } from 'react-icons/fi';
import { destinations } from '../data/mockData';

const Destinations = () => {
  return (
    <section id="destinations" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Popular Destinations
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore the world's most beautiful places with our curated selection of destinations
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <div key={destination.id} className="card group">
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1">
                    <FiStar className="text-yellow-400 fill-yellow-400 w-4 h-4" />
                    <span className="text-sm font-semibold text-gray-900">
                      {destination.rating}
                    </span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {destination.name}
                  </h3>
                  <span className="text-2xl font-bold text-primary-600">
                    {destination.price}
                  </span>
                </div>

                <p className="text-gray-600 mb-4 line-clamp-2">
                  {destination.description}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2 text-gray-500">
                    <FiClock className="w-4 h-4" />
                    <span className="text-sm">{destination.days}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {destination.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-primary-50 text-primary-700 text-xs font-semibold rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full btn-primary flex items-center justify-center space-x-2 group-hover:space-x-3 transition-all">
                  <span>Explore Now</span>
                  <FiArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
