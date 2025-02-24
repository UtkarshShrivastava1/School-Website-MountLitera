import React from 'react';

const CommunitySection = () => {
    return (
        <div className="flex flex-col items-center justify-center bg-gray-900 text-white p-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Join Our Community?
            </h1>
            <p className="text-center mb-6">
                Take the first step towards an exceptional education. Apply now or schedule a campus visit to learn more about our programs.
            </p>
            <div className="flex flex-col md:flex-row gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition duration-300">
                    Apply Now
                </button>
                <button className="border border-white hover:bg-white hover:text-gray-900 text-white font-semibold py-2 px-4 rounded transition duration-300">
                    Schedule a Visit
                </button>
            </div>
        </div>
    );
};

export default CommunitySection;