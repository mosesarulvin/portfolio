import React from 'react';

const Introduction: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-md p-8 bg-white rounded-lg shadow-lg md:max-w-full">
        <h1 className="text-xl md:text-2xl font-bold mb-4">Unleashing Innovation with Code: Meet Moses Arulvin 🚀</h1>
        <p className="text-gray-600 mb-6">
          Hey there, I'm Moses Arulvin—a passionate MERN Stack Developer with a knack for crafting digital magic!
          {/* ... (rest of the content) */}
        </p>
        <p className="text-gray-600 mb-6">
          What sets me apart? It's the fusion of experience and enthusiasm. Those countless lines of code that I've meticulously penned, they're not just code; they're the bricks that build digital dreams.
          {/* ... (rest of the content) */}
        </p>
        <p className="text-gray-600">
          So, whether it's crafting elegant UIs that users can't help but fall in love with, optimizing backend processes to handle a gazillion requests, or simply diving into new challenges headfirst, I'm here to take your digital aspirations and turn them into dazzling reality.
          {/* ... (rest of the content) */}
        </p>
        <p className="text-gray-600 mt-4">
          Join me in the journey of innovation, where every line of code is a brushstroke on the canvas of the digital world. Let's explore, create, and conquer the unknown, one bug fix at a time. Welcome to the adventure!
          {/* ... (rest of the content) */}
        </p>
        <div className="mt-6 text-center">
          <p className="text-gray-500">✨ Moses Arulvin ✨</p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
