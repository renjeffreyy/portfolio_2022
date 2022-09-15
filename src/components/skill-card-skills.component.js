import * as React from "react";

export const SkillList = ({ skills }) => {
  return (
    <ul className="flex wrap gap-3">
      {skills.map((skill) => (
        <SkillEl skill={skill} />
      ))}
    </ul>
  );
};

const SkillEl = ({ skill }) => {
  return <li className="py-1">{skill}</li>;
};
