import { FiStar, FiClock, FiMapPin, FiArrowRight } from 'react-icons/fi';
import { tours } from '../data/mockData';

const Tours = () => {
  return (
    <section id="tours" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Tour Packages
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Carefully crafted itineraries for unforgettable experiences
          </p>
        </div>

        {/* Tours Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {tours.map((tour) => (
            <div key={tour.id} className="card group flex flex-col lg:flex-row">
              {/* Image */}
              <div className="lg:w-1/2 h-64 lg:h-auto overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="lg:w-1/2 p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <FiMapPin className="text-primary-600 w-5 h-5" />
                      <span className="text-gray-600 font-medium">{tour.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <FiStar className="text-yellow-400 fill-yellow-400 w-4 h-4" />
                      <span className="text-sm font-semibold text-gray-900">
                        {tour.rating}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {tour.title}
                  </h3>

                  <p className="text-gray-600 mb-4">
                    {tour.description}
                  </p>

                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <FiClock className="w-4 h-4" />
                      <span className="text-sm">{tour.duration}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-6">
                    <p className="text-sm font-semibold text-gray-700 mb-2">Highlights:</p>
                    <div className="flex flex-wrap gap-2">
                      {tour.highlights.map((highlight, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div>
                    <span className="text-3xl font-bold text-primary-600">
                      {tour.price}
                    </span>
                    <span className="text-gray-500 text-sm ml-2">per person</span>
                  </div>
                  <button className="btn-primary flex items-center space-x-2">
                    <span>Book Now</span>
                    <FiArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tours;
