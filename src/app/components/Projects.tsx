import { BiLogoFlask, BiLogoPostgresql } from "react-icons/bi"
import { DiDjango, DiDocker, DiGithubBadge, DiJava, DiMysql, DiPostgresql, DiPython } from "react-icons/di"
import { SiSpring, SiSpringboot } from "react-icons/si"
import { useLanguage } from "./LanguageProvider"

export default function Projects() {
  const { t } = useLanguage()

  const projects = [
    {
      id: 1,
      key: "book-review-blog",
      title: "Book Review Blog",
      img: "/projects/book-review-blog.png",
      techs: [
        { id: 1, icon: <DiPython className="text-[#1572b6]"/> },
        { id: 2, icon: <BiLogoFlask className="text-black" /> },
        { id: 3, icon: <DiDocker className="text-[#1572b6]" /> },
        { id: 4, icon: <BiLogoPostgresql className="text-[#1572b6]" /> }
      ],
      url: "https://github.com/liviadfsilva/BookReviewBlogAPI"
    },
    {
      id: 2,
      key: "pixel-peel",
      title: "Pixel Peel",
      img: "/projects/pixel-peel.png",
      techs: [
        { id: 1, icon: <DiJava className="text-[#e76f00]" /> },
        { id: 2, icon: <SiSpring className="text-[#6db33f]" /> },
        { id: 3, icon: <SiSpringboot className="text-[#6db33f]" /> },
        { id: 4, icon: <DiDocker className="text-[#1572b6]" /> },
        { id: 5, icon: <DiPostgresql className="text-[#1572b6]" /> }
      ],
      url: "https://github.com/liviadfsilva/PixelPeelAPI"
    },
    {
      id: 3,
      key: "task-matrix",
      title: "Task Matrix",
      img: "/projects/task-matrix.png",
      techs: [
        { id: 1, icon: <DiJava className="text-[#e76f00]" /> },
        { id: 2, icon: <SiSpring className="text-[#6db33f]" /> },
        { id: 3, icon: <SiSpringboot className="text-[#6db33f]" /> },
        { id: 4, icon: <DiDocker className="text-[#1572b6]" /> },
        { id: 5, icon: <DiMysql className="text-[#1572b6]" /> }
      ],
      url: "https://github.com/liviadfsilva/ToDoAPI"
    },
    {
      id: 4,
      key: "vet-clinic",
      title: "Vet Clinic",
      img: "/projects/vet-clinic.png",
      techs: [
        { id: 1, icon: <DiPython className="text-[#1572b6]"/> },
        { id: 2, icon: <DiDjango className="text-[#082d1f]" /> },
        { id: 3, icon: <DiDocker className="text-[#1572b6]" /> },
        { id: 4, icon: <BiLogoPostgresql className="text-[#1572b6]" /> }
      ],
      url: "https://github.com/liviadfsilva/VetClinicAPI"
    },
  ]


  return (
      <div className="relative text-white">
        <div className="flex justify-center items-center px-4 text-2xl font-bold py-8">
          <h2>
            {t.myProjects.split(" ").slice(0, -1).join(" ")}
            <span className="text-pink"> {t.myProjects.split(" ").slice(-1)}</span>
          </h2>
        </div>

        <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-14">
          {projects.map((project) => (
              <div key={project.id} className="flex flex-col justify-center sm:w-[570px] w-[80vw]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={project.img || "/placeholder.svg"}
                    alt={project.title}
                    className="rounded-3xl hover:translate-x-4 duration-200 hover:border border-white/[0.2]"
                />
                <h3 className="font-bold lg:text-xl md:text-xl text-base mt-4">{project.title}</h3>
                <p className="lg:text-base lg:font-normal font-light text-sm">{t.projects[project.key]}</p>

                <div className="flex items-center justify-between mt-4 mb-3">
                  <div className="flex items-center">
                    {project.techs.map((tech, index) => (
                        <div
                            key={tech.id}
                            className="border border-white/[0.2] rounded-full bg-pink flex justify-center items-center lg:size-10 size-8"
                            style={{ transform: `translateX(-${5 * index * 2}px)` }}
                        >
                          <span className="*:size-5">{tech.icon}</span>
                        </div>
                    ))}
                  </div>

                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    <div className="border flex items-center px-4 py-2 rounded-md text-pink hover:text-white gap-2">
                      <p className="flex lg:text-base md:text-xs text-sm">{t.goToRepo}</p>
                      <DiGithubBadge className="size-5" />
                    </div>
                  </a>
                </div>
              </div>
          ))}
        </div>
      </div>
  )
}
