
import React from "react";
// import { defaultAllowedOrigins } from "vite";

// const SkillCard: React.FC<{ logo: string; name: string }> = ({ logo, name }) => {
//   return (
//     <div className="flex flex-col items-center justify-center bg-gray-900 text-white p-4 rounded-2xl shadow-lg w-32 h-32 hover:shadow-xl transition duration-300">
//       <img src={logo} alt={name} className="w-16 h-16 object-contain" />
//     </div>
//   );
// };
//
// import React from "react";

const SkillCard: React.FC<{ icon: string; name: string }> = ({ icon, name }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-900 text-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
      <img src={`https://skillicons.dev/icons?i=${icon}`} alt={name} className="w-16 h-16" />
    </div>
  );
};

const Language = () => {
  return (
    <div className="">
      <h1 className="text-5xl text-center">Language</h1>
      <div className="flex gap-4 flex-wrap justify-center">
        <SkillCard icon="python" name="Python" />
        <SkillCard icon="rust" name="Rust" />
        <SkillCard icon="javascript" name="javascript" />
        <SkillCard icon="typescript" name="typescript" />
        <SkillCard icon="java" name="java" />
        <SkillCard icon="cpp" name="cpp" />
      </div>
    </div>
  );
};
const Framework = () => {
  return (
    <div className="">
      <h1 className="text-5xl text-center">Framework</h1>
      <div className="flex gap-4 flex-wrap justify-center">
        <SkillCard icon="flask" name="Flask" />
        <SkillCard icon="react" name="react" />
        <SkillCard icon="pytorch" name="pytorch" />
        <SkillCard icon="flutter" name="flutter" />
      </div>
    </div>
  );
};
const Database = () => {
  return (
    <div className="">
      <h1 className="text-5xl text-center">Database</h1>
      <div className="flex gap-4 flex-wrap justify-center">
        <SkillCard icon="mysql" name="mysql" />
        <SkillCard icon="mongodb" name="mongodb" />
      </div>
    </div>
  );

};
const Skills = () => {
  return (
    <div className="flex flex-row justify-center justify-items-center gap-10">
      <div className="flex-1 flex justify-around">
        <Language />
      </div>
      <div className="flex-none">
        <Framework />
      </div>
      <div className="flex-1 flex justify-around">
        <Database />
      </div>
    </div>
  );
};
export default Skills
