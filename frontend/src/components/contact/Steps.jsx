import React from 'react';

const ApplicationProcess = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 text-center">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Application Process</h1>
      <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
        We've designed a straightforward process to help you join our team.
      </p>

      <div className="flex flex-col md:flex-row justify-between items-start">
        {/* Step 1 */}
        <div className="flex flex-col items-center mb-12 md:mb-0 md:w-1/3 px-4">
          <div className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center mb-6">
            <span className="font-bold">1</span>
          </div>
          <div className="hidden md:block w-full h-px bg-gray-300 absolute mt-6"></div>
          <h3 className="text-xl font-bold mb-3">Apply Online</h3>
          <p className="text-gray-600 text-center">
            Submit your application through our online portal with your resume and cover letter.
          </p>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center mb-12 md:mb-0 md:w-1/3 px-4">
          <div className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center mb-6">
            <span className="font-bold">2</span>
          </div>
          <div className="hidden md:block w-full h-px bg-gray-300 absolute mt-6"></div>
          <h3 className="text-xl font-bold mb-3">Interview Process</h3>
          <p className="text-gray-600 text-center">
            Selected candidates will be invited for initial interviews, followed by a teaching demonstration for academic positions.
          </p>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center md:w-1/3 px-4">
          <div className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center mb-6">
            <span className="font-bold">3</span>
          </div>
          <h3 className="text-xl font-bold mb-3">Onboarding</h3>
          <p className="text-gray-600 text-center">
            Successful candidates will receive an offer and begin our comprehensive onboarding program.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ApplicationProcess;