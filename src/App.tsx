import AboutMe from "./components/AboutMe"
import Contact from "./components/Contact"
import Introduction from "./components/Introduction"
import Projects from "./components/Projects"

function App() {

  return (
    <div className="flex justify-center items-center">
      <h1 className="text-3xl font-bold">
        <Introduction/>
        <Projects/>
        <AboutMe/>
        <Contact/>
      {/* 🚀 "Unleashing Innovation with Code: Meet Moses Arulvin 🚀

Hey there, I'm Moses Arulvin—a passionate MERN Stack Developer with a knack for crafting digital magic! With five exhilarating years riding the technological rollercoaster, I've honed my skills and carved out a niche in the ever-evolving realm of web development.

Picture me as a digital maestro, orchestrating symphonies of seamless user experiences with React and Node.js. I'm not just a developer; I'm a storyteller who weaves intricate tales through lines of code, bringing ideas to life pixel by pixel. As the virtual architect behind dynamic web applications, I pride myself on sculpting robust backends and captivating frontends.

But it's not all about the code—it's about innovation. I thrive on transforming abstract concepts into tangible solutions that make jaws drop and eyebrows raise. My journey has been a fusion of creative problem-solving, relentless curiosity, and a dash of that magical 'aha!' moment that every developer lives for.

What sets me apart? It's the fusion of experience and enthusiasm. Those countless lines of code that I've meticulously penned, they're not just code; they're the bricks that build digital dreams. From brainstorming to deployment, I live and breathe the MERN stack, painting masterpieces of interactivity and functionality.

So, whether it's crafting elegant UIs that users can't help but fall in love with, optimizing backend processes to handle a gazillion requests, or simply diving into new challenges headfirst, I'm here to take your digital aspirations and turn them into dazzling reality.

Join me in the journey of innovation, where every line of code is a brushstroke on the canvas of the digital world. Let's explore, create, and conquer the unknown, one bug fix at a time. Welcome to the adventure!"

✨ Moses Arulvin ✨ */}





      </h1>
    </div>
  )
}

export default App
