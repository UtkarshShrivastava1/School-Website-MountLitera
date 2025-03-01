import { useState } from "react";
import { motion } from "framer-motion";

const uniforms = {
  sports: [
    { id: 1, name: "Sports T-Shirt", img: "/sports-tshirt.jpg" },
    { id: 2, name: "Sports Shorts", img: "/sports-shorts.jpg" },
  ],
  winter: [
    { id: 3, name: "Winter Jacket", img: "/winter-jacket.jpg" },
    { id: 4, name: "Woolen Pants", img: "/woolen-pants.jpg" },
  ],
  summer: [
    { id: 5, name: "Summer Shirt", img: "/summer-shirt.jpg" },
    { id: 6, name: "Cotton Shorts", img: "/cotton-shorts.jpg" },
  ],
};

function SchoolUniformPage() {
  const [category, setCategory] = useState("sports");

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-5">
      {/* Logo Section */}
      <motion.img
        src="/school-logo.png"
        alt="School Logo"
        className="w-20 h-20 mb-5"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      />
      
      <h1 className="text-3xl font-bold mb-4">School Uniforms</h1>
      
      {/* Category Buttons */}
      <div className="flex space-x-4 mb-6">
        {Object.keys(uniforms).map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded-lg ${category === cat ? "bg-blue-600 text-white" : "bg-gray-300"}`}
            onClick={() => setCategory(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Uniform Display */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {uniforms[category].map((item) => (
          <div key={item.id} className="p-4 shadow-lg rounded-lg bg-white text-center">
            <img src={item.img} alt={item.name} className="w-full h-40 object-cover rounded-lg" />
            <p className="mt-2 font-semibold">{item.name}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default SchoolUniformPage;
