import React from "react";
import { CardSectionInterface } from "../modals/card";

export default function CardSection(props: CardSectionInterface) {
  return (
    <section className="mb-6">
      <h2 className="text-5xl mb-2">{props.title}</h2>
      <h3 className="text-3xl mb-2">{props.subtitle}</h3>
      <ul className="list-disc my-6 ml-4">
        {props.skillList.map((skill) => {
          return (
            <li className="mb-1 text-lg" key={skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      <p className="mt-4 text-lg">{props.content}</p>
    </section>
  );
}
