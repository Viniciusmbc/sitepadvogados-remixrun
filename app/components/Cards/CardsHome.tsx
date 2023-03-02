import { useState } from "react";
import { useInView } from "react-intersection-observer";

export default function CardsHome({
  src,
  titulo,
  texto,
  alt,
}: {
  src: string;
  titulo: string;
  texto: string;
  alt: string;
}) {
  const [ref, inView] = useInView({ threshold: 0.3 });
  const [hasAnimated, setHasAnimated] = useState(false);

  const handleAnimationEnd = () => {
    setHasAnimated(true);
  };

  console.log(inView);

  return (
    <div
      className={`flex flex-col p-9 h-[412px] w-96 border border-white shadow-md bg-[#f8fafd] rounded-3xl ${
        inView && !hasAnimated ? "zoomIn" : null
      }`}
      onAnimationEnd={handleAnimationEnd}
      ref={ref}
    >
      <picture className=" shadow-md rounded-3xl mx-auto mb-6 bg-white w-28 h-28 flex justify-center items-center ">
        <img src={src} width={64} height={64} alt={alt} />
      </picture>

      <h3 className=" mb-4 text-2xl font-extrabold mx-auto text-center">
        {titulo}
      </h3>
      <p className=" text-center text-black text-lg">{texto}</p>
    </div>
  );
}
