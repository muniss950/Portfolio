
import profile from '/profile.jpg';
import '../style/App.css';

function About() {
  return (
    <div className="about flex flex-row bg-gray-200 justify-around content-center items-center gap-5 min-h-[calc(100vh-64px)]">
        <img src={profile} className="w-100 h-100  border bg-secondary-light border-ternary-light dark:border-ternary-dark shadow-sm rounded-full mb-8 cursor-pointer" alt="logo" />
        <div>
        <h1 className="font-bold text-6xl">Munis Shafiq</h1>
        <p className=" text-xl">
          Passionate and dedicated B.Tech Computer Science student at PES University,Bangalore,India, with a strong foundation in algorithms, data structures, and software development. Enthusiastic about problem-solving, web development, and emerging technologies.Seeking opportunities to apply technical knowledge in real-world applications.       </p>
          </div>
    </div>
  );
}

export default About;

