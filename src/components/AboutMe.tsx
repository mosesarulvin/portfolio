import React from 'react';

const AboutMe: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="mb-4 md:mb-0">
            <img
              src="https://media.licdn.com/dms/image/D5603AQG2DGTRGgvfcw/profile-displayphoto-shrink_800_800/0/1689232069882?e=1697068800&v=beta&t=vTDG-1nUVQuOrr40-cR5b8Hpkq2WHZGAdavJELuAMTU" // Replace with your image path
              alt="Moses Arulvin"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div>
            <p className="text-gray-700 leading-loose">
              Hey there, I'm Moses Arulvin—a passionate MERN Stack Developer with over 5 years of experience in crafting exceptional web experiences. My journey in the digital realm began with a single line of code and has since evolved into a symphony of creativity and innovation.
            </p>
            <p className="text-gray-700 mt-4 leading-loose">
              Armed with a deep love for both frontend and backend technologies, I specialize in React for building captivating user interfaces and Node.js for constructing robust server-side solutions. My dedication to staying up-to-date with the latest industry trends ensures that my projects are not just functional, but also cutting-edge.
            </p>
            <p className="text-gray-700 mt-4 leading-loose">
              Beyond the world of code, I'm an avid explorer, always seeking to learn and grow. When I'm not typing away at my keyboard, you can find me hiking, reading, or experimenting with new recipes in the kitchen.
            </p>
            <p className="text-gray-700 mt-4 leading-loose">
              Join me on this exhilarating journey of turning ideas into reality, one line of code at a time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
