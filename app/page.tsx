import { TextHoverEffect } from "./components/TextHoverEffect";
import Skill from "./components/Skill";

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main>
      <TextHoverEffect text="Colin" />
        <h2 className="text-2xl my-2">Frontend Developer</h2>
        <section className="mt-4">
          <h3 className="text-2xl">Skills</h3>
          <div className="flex gap-6">
            <Skill text="Next.js" imageSrc="/globe.svg"></Skill>
          </div>
        </section>
      </main>
    </div>
  );
}
