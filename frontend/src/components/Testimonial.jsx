import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Mehwish',
      image: '/api/placeholder/48/48',
      text: 'Compliment interested discretion estimating on stimulated apartments oh.'
    },
    {
      name: 'Elizabeth Jeff',
      image: '/api/placeholder/48/48',
      text: 'Dear so sing when in find read of call. As distrusts behaviour abilities defective is.'
    },
    {
      name: 'Emily Thomas',
      image: '/api/placeholder/48/48',
      text: 'Never at water me might. On formed merits hunted unable merely by mr whence or.'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Left Section */}
        <div className="md:w-1/3">
          <h2 className="text-4xl font-bold mb-4">What Our Customers Says</h2>
          <p className="text-gray-600 mb-6">
            Relation so in confined smallest children unpacked delicate. Why sir end believe uncivil respect. Always get adisus nature day course for common.
          </p>
          <button className="bg-gradient-to-r from-purple-500 to-orange-500 text-white px-6 py-2 rounded-lg">
            View More
          </button>
        </div>

        {/* Right Section - Testimonials */}
        <div className="md:w-2/3 space-y-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-sm">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h3 className="font-semibold">{testimonial.name}</h3>
                <p className="text-gray-600">{testimonial.text}</p>
              </div>
              <span className="text-gray-300 text-2xl">"</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;