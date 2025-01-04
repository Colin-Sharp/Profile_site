import Image from "next/image"
interface SkillPropsInterface {
    imageSrc: string
    text: string
}

export default function skill(props: SkillPropsInterface) {
  return (
    <div className="skill">
    <Image aria-hidden src={props.imageSrc} alt={props.text} width={16} height={16} />
    <p>{props.text}</p>
  </div>
  );
}


