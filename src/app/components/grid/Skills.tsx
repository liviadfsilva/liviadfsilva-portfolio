import { BiLogoFlask, BiLogoPostgresql } from "react-icons/bi"
import { DiDjango, DiDocker, DiJava, DiMongodb, DiPython } from "react-icons/di"
import { SiFastapi, SiSpring, SiSpringboot } from "react-icons/si"
import { useLanguage } from "../LanguageProvider"

export const skills = [
  {
    id: "java",
    name: "Java",
    icon: <DiJava />,
    color: "text-[#e76f00]",
    hover: "hover:text-[#ff963a]"
  },
  {
    id: "spring",
    name: "Spring",
    icon: <SiSpring />,
    color: "text-[#6db33f]"
  },
  {
    id: "spring-boot",
    name: "Spring Boot",
    icon: <SiSpringboot />,
    color: "text-[#6db33f]"
  },
  {
    id: "python",
    name: "Python",
    icon: <DiPython />,
    color: "text-[#1572b6]"
  },
  {
    id: "django",
    name: "Django",
    icon: <DiDjango />,
    color: "text-[#082d1f]"
  },
  {
    id: "fast-api",
    name: "Fast API",
    icon: <SiFastapi />,
    color: "text-[#039184]"
  },
  {
    id: "flask",
    name: "Flask",
    icon: <BiLogoFlask />,
    color: "text-black"
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    icon: <BiLogoPostgresql />,
    color: "text-[#1572b6]"
  },
  {
    id: "mongodb",
    name: "MongoDB",
    icon: <DiMongodb />,
    color: "text-[#649a37]"
  },
  {
    id: "docker",
    name: "Docker",
    icon: <DiDocker />,
    color: "text-[#1572b6]"
  },
]

export default function Skills() {
  const { t } = useLanguage()

  return (
    <>
      <div className="lg:text-3xl font-semibold text-lg py-6 lg:p-10 text-center">
        <h2>{t.skills}</h2>
      </div>
      <div className="grid grid-cols-4 lg:grid-cols-5 gap-4">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className={`relative flex items-center flex-col gap-1 text-xs opacity-100 text-center ${skill.color} ${skill.hover} duration-200`}>
            <span className={`*:size-10 rounded-lg p-2 bg-pink`}>{skill.icon}</span>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </>
  )
}