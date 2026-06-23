import {BiLogoFlask, BiLogoPostgresql} from "react-icons/bi"
import {
  DiDjango,
  DiDocker,
  DiGithubBadge,
  DiJava,
  DiMysql, DiPostgresql,
  DiPython,
}

from "react-icons/di"
import {SiSpring, SiSpringboot} from "react-icons/si"

export default function Projects() {

  const projects = [
    {
      id: 1,
      title: "Book Review Blog",
      desc: "A RESTful API for managing users, books, reviews and personal blog posts, designed to support a complete book review and blogging platform.",
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
      title: "Pixel Peel",
      desc: "A RESTful API built to support a digital stickers e-commerce platform, handling products, users, admins, cart and orders.",
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
      title: "Task Matrix",
      desc: "An API deeply inspired by the Eisenhower Matrix, a tool which focuses on organising and prioritising tasks by importance and urgency.",
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
      title: "Vet Clinic",
      desc: "A RESTful API for the management of a veterinarian clinic, handling vets, users, pets, owners and appointments..",
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
        <h2 className="">
          My
          <span className="text-pink"> Projects</span>
        </h2>
      </div>

      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-14">
        {projects.map((project) => (
          <div key={project.id}
            className="flex flex-col justify-center sm:w-[570px] w-[80vw]">
            <img src={project.img} alt={project.title}
              className="rounded-3xl hover:translate-x-4 duration-200 hover:border border-white/[0.2]" />
            <h3 className="font-bold lg:text-xl md:text-xl text-base mt-4">
              {project.title}
            </h3>
            <p className="lg:text-base lg:font-normal font-light text-sm">
              {project.desc}
            </p>


            <div className="flex items-center justify-between mt-4 mb-3">
              <div className="flex items-center">
                {project.techs.map((tech, index) => (
                  <div key={tech.id}
                    className="border border-white/[0.2] rounded-full bg-pink flex justify-center items-center lg:size-10 size-8"
                    style={{ transform: `translateX(-${5 * index * 2}px)` }}
                  >
                    <span className="*:size-5">{tech.icon}</span>
                  </div>
                ))}
              </div>

              <a href={project.url}
                target="_blank">
                <div className="border flex items-center px-4 py-2 rounded-md text-pink hover:text-white gap-2">
                  <p className="flex lg:text-base md:text-xs text-sm">Go to Github repository</p>
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