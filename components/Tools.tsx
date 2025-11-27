"use client";

import {
  AfterEffectsIcon,
  PremierProIcon,
  BlenderIcon,
  CapCutIcon,
  IllustratorIcon,
} from "./software-icons";

export function ToolsSection() {
  const tools = [
    { icon: <AfterEffectsIcon />, name: "After Effects" },
    { icon: <PremierProIcon />, name: "Premiere Pro" },
    { icon: <BlenderIcon />, name: "Blender" },
    { icon: <CapCutIcon />, name: "CapCut" },
    { icon: <IllustratorIcon />, name: "Illustrator" },
  ];

  return (
    <section className="py-20 text-center bg-white">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">Tools & Software</h2>
      <p className="text-gray-500 mb-12">
        Professional software I use to bring ideas to life
      </p>

      <div className="flex flex-wrap justify-center gap-10">
        {tools.map((tool, i) => (
          <div
            key={i}
            className="bg-gray-50 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 w-48 h-48 flex flex-col items-center justify-center gap-3 hover:-translate-y-2"
          >
            <div className="w-16 h-16">{tool.icon}</div>
            <p className="text-gray-800 font-semibold">{tool.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
