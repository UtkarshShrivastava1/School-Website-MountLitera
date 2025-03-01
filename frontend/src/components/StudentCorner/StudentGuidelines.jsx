import { motion } from "framer-motion";

const guidelines = [
  "Every student should carry the Almanac to the School daily.",
  "Students who come to the School through Private transport should arrive at the School five minutes before the bell rings",
  "Students should be habitually clean and always neatly dressed.",
  "The School uniform must be worn on all working days.",
  "Girls should not apply nail polish or mehndi during School session. Nails to be trimmed at least once a week.",
  "Girls can wear very small studs or ear rings in gold or silver.",
  "It is not advisable to bring valuable articles to the School.",
  "Students are not allowed to bring mobile phones/iPods/cameras etc. into the School campus. These gadgets, if found in possession of the students within the School campus, will be confiscated.",
  "The name, class and section of the pupil should be clearly marked on all the belongings of the student.",
  "Changing classrooms between periods, where necessary, should be done silently and in an orderly manner.",
  "Care must be taken of all School property and no student should scratch or spoil the desks or charts or damage any furniture, write or draw anything on the walls or damage things belonging to others.",
  "Damage done should be reported at once to the class teacher or Admin department. Any damage caused will have to be made good by the student(s) concerned.",
  "The School reserves the right to suspend/ expel students whose conduct is harmful to other students or to the School.",
  "Students are not permitted to buy eatables from vendors outside the School premises.",
  "The School students should be proud of their school and uphold the values and ethics. Their code of conduct is the reflection of their education in school.",
  "Senior students should be responsible to take care of the junior students within the premises and in the school bus. Bullying in any form is not acceptable.",
  "It is mandatory to wear Identity cards everyday to school."

];

function StudentGuidelines() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <motion.h1 
        className="text-4xl font-extrabold mb-6 text-center text-gray-800 drop-shadow-md"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Student Guidelines
      </motion.h1>

      <motion.p 
        className="max-w-3xl text-center text-gray-700 mb-6 text-lg"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        MLZ School is an institution for teaching and education wherein we have a set of rules to ensure discipline and safety of all members of our educational community. Every student’s enrolment at MLZ School means adhering to the defined set of rules and a commitment towards respecting them. Parents are advised to explain to their children about these rules and help them understand its virtue in establishing harmony. These rules include:
      </motion.p>

      {/* Guidelines List */}
      <motion.div
        className="bg-white shadow-lg rounded-lg p-6 max-w-3xl w-full text-gray-800 border border-gray-200"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        {guidelines.map((rule, index) => (
          <motion.div
            key={index}
            className="flex items-center space-x-4 p-4 border-b last:border-none hover:bg-gray-200 rounded-md transition duration-300"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-full text-lg font-bold shadow-md">
            →
            </div>
            <p className="text-lg font-medium">{rule}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default StudentGuidelines;