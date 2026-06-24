import Contact from "./grid/Contact";
import {FaHeart} from "react-icons/fa";
import { useLanguage } from "./LanguageProvider"

export default function Footer() {
    const { t } = useLanguage()

  return (
    <footer className="relative text-white pb-10 px-14 mt-12">
      <div className="flex flex-wrap sm:justify-between justify-center  items-center">
      <p className="flex md:text-base text-sm font-light gap-2">
        <FaHeart className="size-5" />
          {t.builtWithLove}
      </p>

      <Contact />
      </div>
    </footer>
  )
}