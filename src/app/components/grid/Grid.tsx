import Contact from "./Contact";
import Skills from "./Skills";

export default function Grid() {
  return (
    <div className="relative text-white grid sm:grid-cols-2 gap-4 p-4 sm:p-14">
      <div className="flex flex-col justify-center rounded-3xl row-span-2 sm:col-span-2 lg:col-span-1 p-4 sm:p-14 bg-pattern bg-no-repeat bg-center border border-white/[0.1]">
        <div className="lg:text-3xl font-semibold text-lg p-4 flex justify-center">
          <h2 className="text-pink items-center">Who am I?</h2>
        </div>
        <div className="space-y-4 min-h-60">
          <p>I'm a Software Developer and Computer Science Major passionate about building backend systems.
              I'm very fond of challenging myself by learning how things work and putting my knowledge into practise.
              Challenging myself in creative ways is what I do best!
              My #1 goal is to become excellent at what I do while remaining aware that I'm a constant work in progress.</p>
        </div>
      </div>

      <div className="rounded-3xl  lg:col-span-1 border border-white/[0.1] bg-darkBlue p-10">
        <Skills />
      </div>

      <div className="bg-pattern bg-no-repeat bg-center rounded-3xl border border-white/[0.1] py-28">
        <div className="flex flex-col items-center space-y-2 font-bold text-lg lg:text-2xl">
          <h2 className="text-pink">Let's connect!</h2>
          <span>You can find me on:</span>
          <Contact />
        </div>
      </div>
    </div>
  )
}