import React from "react";
import { CardSectionInterface } from "../modals/card";

export default function CardSection(props: CardSectionInterface) {
  return (
    <section className="border-2 rounded border-slate-100 p-4 mb-6 bg-black bg-opacity-70 hover:shadow-[0_15px_100px_30px_rgba(255,255,255,0.3)] shadow-none transition-all">
      <h2 className="text-4xl mb-2">{props.title}</h2>
      <h3 className="text-2xl mb-2">{props.subtitle}</h3>
      <ul className="list-disc ml-4">
        {props.skillList.map((skill) => {
          return (
            <li className="mb-1" key={skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      <p className="mt-4">{props.content}</p>
    </section>
  );
}
