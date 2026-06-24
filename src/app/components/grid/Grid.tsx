import Contact from "./Contact";
import Skills from "./Skills";
import { useLanguage } from "../LanguageProvider"

export default function Grid() {
    const { t } = useLanguage()

  return (
    <div className="relative text-white grid sm:grid-cols-2 gap-4 p-4 sm:p-14">
      <div className="flex flex-col justify-center rounded-3xl row-span-2 sm:col-span-2 lg:col-span-1 p-4 sm:p-14 bg-pattern bg-no-repeat bg-center border border-white/[0.1]">
        <div className="lg:text-3xl font-semibold text-lg p-4 flex justify-center">
          <h2 className="text-pink items-center">{t.whoAmI}</h2>
        </div>
        <div className="space-y-4 min-h-60">
          <p>{t.about}</p>
        </div>
      </div>

      <div className="rounded-3xl  lg:col-span-1 border border-white/[0.1] bg-darkBlue p-10">
        <Skills />
      </div>

      <div className="bg-pattern bg-no-repeat bg-center rounded-3xl border border-white/[0.1] py-28">
        <div className="flex flex-col items-center space-y-2 font-bold text-lg lg:text-2xl">
          <h2 className="text-pink">{t.connect}</h2>
          <span>{t.findMe}</span>
          <Contact />
        </div>
      </div>
    </div>
  )
}