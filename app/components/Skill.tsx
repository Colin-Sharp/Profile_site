import Image from "next/image";
import { SkillPropsInterface } from "../modals/skills";

export default function skill(props: SkillPropsInterface) {
  return (
    <div className={`${props.skillLevel} skill-wrapper` }>
      <div className="skill-background"></div>
      <div className="skill">
        <Image
          className="w-6 bg-slate-200 h-6"
          aria-hidden
          src={props.imageSrc}
          alt={props.text}
          width={0}
          height={0}
        />
        <p>{props.text}</p>
      </div>
    </div>
  );
}
