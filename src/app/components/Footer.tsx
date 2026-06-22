import Contact from "./grid/Contact";
import {FaHeart} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative text-white pb-10 px-14 mt-12">
      <div className="flex flex-wrap sm:justify-between justify-center  items-center">
      <p className="flex md:text-base text-sm font-light gap-2">
        <FaHeart className="size-5" />
        Built with love.
      </p>

      <Contact />
      </div>
    </footer>
  )
}