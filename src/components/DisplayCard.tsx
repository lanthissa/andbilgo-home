
import React, { useEffect} from "react";

type DisplayCardProps = {
    name: string;
    description: string;
    documentation: string;
  };
  const helloer = () => {
    console.log("hello")
  };
  
  const DisplayCard = ({
    name,
    description,
    documentation,
  }: DisplayCardProps) => {
    return (
      <section className="flex flex-col justify-center p-6 duration-500 border-2 border-gray-500 rounded shadow-xl motion-safe:hover:scale-105">
        <h2 onClick={helloer} className="text-lg text-poimandres-detail-text">{name}</h2>
        <p className="text-sm text-poimandres-body-text-2">{description}</p>
        <a
          className="mt-3 text-sm underline text-violet-500 decoration-dotted underline-offset-2"
          href={documentation}
          target="_blank"
          rel="noreferrer"
        >
          Documentation
        </a>
      </section>
    );
  };

export default DisplayCard;