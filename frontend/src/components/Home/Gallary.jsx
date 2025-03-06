import React from 'react';
import image1 from '../../assets/c-1.png';
import image2 from '../../assets/c-2.png';
import image3 from '../../assets/c-3.png';
import image4 from '../../assets/c-4.png';


const ClassroomGallery = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="mb-12">
        <h1 className="text-5xl font-serif text-[#8B1744] mb-2">
          Explore Our Classrooms
        </h1>
        <div className="text-[#20B2AA] text-lg font-medium">
          DIVE IN &gt;
        </div>
      </div>

      {/* Top Row - 5 Images */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-4">
        {/* Illustration */}
        <div className="rounded-lg overflow-hidden">
          <img 
            src={image1}
            alt="Illustration of student with music notes"
            className="w-full h-64 object-cover"
          />
        </div>
        
        {/* Student with Book */}
        <div className="rounded-lg overflow-hidden">
          <img 
            src={image1}
            alt="Student holding a book"
            className="w-full h-64 object-cover"
          />
        </div>

        {/* Students Working Together */}
        <div className="rounded-lg overflow-hidden">
          <img 
            src={image1}
            alt="Students working on project"
            className="w-full h-64 object-cover"
          />
        </div>

        {/* Students on Path */}
        <div className="rounded-lg overflow-hidden">
          <img 
            src={image1}
            alt="Students walking on path"
            className="w-full h-64 object-cover"
          />
        </div>

        {/* Students at Table */}
        <div className="rounded-lg overflow-hidden">
          <img 
           src={image1}
            alt="Students at table"
            className="w-full h-64 object-cover"
          />
        </div>
      </div>

      {/* Bottom Row - 6 Images */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {/* Students Reading */}
        <div className="rounded-lg overflow-hidden">
          <img 
           src={image1}
            alt="Students reading on floor"
            className="w-full h-48 object-cover"
          />
        </div>

        {/* Student Writing */}
        <div className="rounded-lg overflow-hidden">
          <img 
           src={image1} 
            alt="Student writing"
            className="w-full h-48 object-cover"
          />
        </div>

        {/* Student in Colonial Costume */}
        <div className="rounded-lg overflow-hidden">
          <img 
            src={image1} 
            alt="Student in colonial costume"
            className="w-full h-48 object-cover"
          />
        </div>

        {/* Outside Learning */}
        <div className="rounded-lg overflow-hidden">
          <img 
            src={image1}
            alt="Outside learning"
            className="w-full h-48 object-cover"
          />
        </div>

        {/* Group Activity */}
        <div className="rounded-lg overflow-hidden">
          <img 
            src={image1}
            alt="Group activity"
            className="w-full h-48 object-cover"
          />
        </div>

        {/* Caterpillar Books */}
        <div className="rounded-lg overflow-hidden">
          <img 
            src=""
            alt="Caterpillar books display"
            className="w-full h-48 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ClassroomGallery;