
"use client";

import * as LucideIcons from 'lucide-react';
import { skillsData, Skill } from '@/lib/portfolio-data';

const iconComponents = {
  AlertCircle: LucideIcons.AlertCircle,
  python: LucideIcons.Code,
  sql: LucideIcons.Database,
  azure: LucideIcons.Activity,
  adf: LucideIcons.Factory,
  synapse: LucideIcons.SmartphoneCharging,
  spark: LucideIcons.Sparkles,
  kafka: LucideIcons.StretchHorizontal,
  databricks: LucideIcons.Layers,
  informatica: LucideIcons.BrainCircuit,
  kubernetes: LucideIcons.PocketKnife,
  datalake: LucideIcons.DatabaseZap,
  git: LucideIcons.GitPullRequestArrow,
  powerbi: LucideIcons.ChartColumnIncreasing,
  snowflake: LucideIcons.Snowflake,
  restapi: LucideIcons.Telescope,
  dbt: LucideIcons.Webhook
};

type IconName = keyof typeof iconComponents;

const SkillsSection = () => {
  const accentColor = 'hsl(var(--accent))'; // fallback color

  return (
    <section id="skills" className="bg-black text-white py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold font-headline mb-4">Skills</h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-16">
          A collection of technologies and tools I'm proficient with.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-x-8 gap-y-12 max-w-4xl mx-auto">
          {skillsData.map((skill: Skill) => {
            const IconComponent = iconComponents[skill.icon as IconName] || iconComponents.AlertCircle;
            const skillColor = skill.color || accentColor;
            return (
              <div 
                key={skill.name} 
                className="group flex flex-col items-center gap-4 transition-transform duration-300 hover:-translate-y-2"
                style={{ '--skill-color': skillColor } as React.CSSProperties}
              >
                <div className="p-5 bg-gray-900 rounded-full text-[--skill-color] transition-colors duration-300 shadow-[0_0_0px_var(--skill-color)] group-hover:shadow-[0_0_20px_var(--skill-color)] group-hover:bg-[--skill-color] group-hover:text-black">
                  <IconComponent className="h-12 w-12" />
                </div>
                <p className="text-lg font-medium text-gray-300 group-hover:text-[--skill-color] transition-colors duration-300">
                  {skill.name}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
