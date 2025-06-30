
import React from "react";

const SkillCard: React.FC<{ icon: string; name: string }> = ({ icon, name }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-900 text-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300 p-4 w-32 h-32">
      <img
        src={`https://skillicons.dev/icons?i=${icon}`}
        alt={name}
        className="w-16 h-16"
      />
      <p className="mt-2 text-sm">{name}</p>
    </div>
  );
};

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <div className="flex flex-col items-center space-y-4">
    <h1 className="text-3xl font-semibold">{title}</h1>
    <div className="flex flex-wrap gap-4 justify-center">{children}</div>
  </div>
);

const Language = () => (
  <Section title="Languages">
    <SkillCard icon="python" name="Python" />
    <SkillCard icon="rust" name="Rust" />
    <SkillCard icon="javascript" name="JavaScript" />
    <SkillCard icon="typescript" name="TypeScript" />
    <SkillCard icon="java" name="Java" />
    <SkillCard icon="cpp" name="C++" />
  </Section>
);

const Framework = () => (
  <Section title="Frameworks">
    <SkillCard icon="flask" name="Flask" />
    <SkillCard icon="react" name="React" />
    <SkillCard icon="pytorch" name="PyTorch" />
    <SkillCard icon="flutter" name="Flutter" />
  </Section>
);

const Database = () => (
  <Section title="Databases">
    <SkillCard icon="mysql" name="MySQL" />
    <SkillCard icon="mongodb" name="MongoDB" />
  </Section>
);

const Skills = () => {
  return (
<div className="flex flex-wrap justify-center gap-10 py-10 px-4">
  <Language />
  <Framework />
  <Database />
</div>
  );
};

export default Skills;
