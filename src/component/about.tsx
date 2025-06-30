import profile from '/profile.jpg';
import '../style/App.css';

function About() {
  return (
    <div className="flex flex-col md:flex-row justify-around items-center gap-10 min-h-[calc(100vh-64px)] bg-gray-200 px-6 py-12">
      {/* Profile Image */}
      <div className="flex justify-center flex-shrink-0">
        <img
          src={profile}
          className="w-60 h-60 object-cover border border-gray-300 shadow rounded-full cursor-pointer"
          alt="Profile"
        />
      </div>

      {/* Text Content */}
      <div className="max-w-2xl text-center md:text-left space-y-6">
        <h1 className="font-bold text-4xl">Munis Shafiq</h1>
        <p className="text-lg text-gray-700">
          Passionate and dedicated B.Tech Computer Science student at PES University, Bangalore, India, with a strong foundation in algorithms, data structures, and software development. Enthusiastic about problem-solving, web development, and emerging technologies. Seeking opportunities to apply technical knowledge in real-world applications.
        </p>
      </div>
    </div>
  );
}

export default About;
