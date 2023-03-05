import { useState } from "react";
import { useInView } from "react-intersection-observer";

export default function CardsStep({
  step1,
  text1,
  step2,
  text2,
  step3,
  text3,
  step4,
  text4,
}: {
  step1: string;
  text1: string;
  step2: string;
  text2: string;
  step3: string;
  text3: string;
  step4: string;
  text4: string;
}) {
  const [ref, inView] = useInView();
  const [animation1Complete, setAnimation1Complete] = useState(false);
  const [animation2Complete, setAnimation2Complete] = useState(false);

  const handleAnimation1Complete = () => {
    setAnimation1Complete(true);
  };

  const animation2Class = animation1Complete && inView ? "scale-up-tr" : "";

  return (
    <div className=" flex justify-center items-center flex-wrap">
      <div
        className={`${
          inView ? "scale-up-tr" : null
        }   w-72 h-60 px-5 py-2 text-center border border-quaternary shadow-xl relative`}
        onAnimationEnd={handleAnimation1Complete}
        ref={ref}
      >
        <div className="  h-10 bg-quaternary border-b-primary  shadow-md absolute inset-x-0 top-0">
          <div className=" flex gap-x-4 justify-end  h-10 items-center mr-2 ">
            <span className="  bg-white w-4 h-1"></span>
            <span className="  border-white border-2 top-0 right-0 w-4 h-4"></span>
            <div className=" relative h-2 w-7">
              <span className="  bg-white absolute  top-0 left-0  w-5  h-1  rotate-45 "></span>
              <span className="  bg-white absolute  top-0 left-0  w-5   h-1  -rotate-45 "></span>
            </div>
          </div>
        </div>
        <p className=" h-full flex flex-col justify-center items-center">
          <b> {step1} </b> <br></br> {text1}
        </p>
      </div>

      <svg
        width="225"
        height="25"
        viewBox="0 0 378 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="slideInLeft"
          d="M374.071 13.0607C374.657 12.4749 374.657 11.5251 374.071 10.9393L364.525 1.3934C363.94 0.807612 362.99 0.807612 362.404 1.3934C361.818 1.97918 361.818 2.92893 362.404 3.51472L370.889 12L362.404 20.4853C361.818 21.0711 361.818 22.0208 362.404 22.6066C362.99 23.1924 363.94 23.1924 364.525 22.6066L374.071 13.0607ZM0.989258 13.5H373.011V10.5H0.989258V13.5Z"
          fill="black"
        />
      </svg>
      <div
        className={`${animation2Class} w-72 h-60 px-8 py-6 text-center border border-quaternary shadow-xl relative`}
      >
        <div className=" h-10 bg-quaternary border-b-primary  shadow-md absolute inset-x-0 top-0">
          <div className=" flex gap-x-4 justify-end  h-10 items-center mr-2 ">
            <span className="  bg-white w-4 h-1"></span>
            <span className="  border-white border-2 top-0 right-0 w-4 h-4"></span>
            <div className=" relative h-2 w-7">
              <span className="  bg-white absolute  top-0 left-0  w-5  h-1  rotate-45 "></span>
              <span className="  bg-white absolute  top-0 left-0  w-5   h-1  -rotate-45 "></span>
            </div>
          </div>
        </div>
        <p className=" h-full flex flex-col justify-center items-center">
          <b> {step2} </b> <br></br> {text2}
        </p>
      </div>
      <svg
        width="225"
        height="25"
        viewBox="0 0 378 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M374.071 13.0607C374.657 12.4749 374.657 11.5251 374.071 10.9393L364.525 1.3934C363.94 0.807612 362.99 0.807612 362.404 1.3934C361.818 1.97918 361.818 2.92893 362.404 3.51472L370.889 12L362.404 20.4853C361.818 21.0711 361.818 22.0208 362.404 22.6066C362.99 23.1924 363.94 23.1924 364.525 22.6066L374.071 13.0607ZM0.989258 13.5H373.011V10.5H0.989258V13.5Z"
          fill="black"
        />
      </svg>
      <div
        className={`scale-up-tr-1 w-72 h-60 px-8 py-6 text-center border border-quaternary shadow-xl relative `}
      >
        <div className=" h-10 bg-quaternary border-b-primary  shadow-md absolute inset-x-0 top-0">
          <div className=" flex gap-x-4 justify-end  h-10 items-center mr-2 ">
            <span className="  bg-white w-4 h-1"></span>
            <span className="  border-white border-2 top-0 right-0 w-4 h-4"></span>
            <div className=" relative h-2 w-7">
              <span className="  bg-white absolute  top-0 left-0  w-5  h-1  rotate-45 "></span>
              <span className="  bg-white absolute  top-0 left-0  w-5   h-1  -rotate-45 "></span>
            </div>
          </div>
        </div>
        <p className=" h-full flex flex-col justify-center items-center">
          <b> {step3} </b> <br></br> {text3}
        </p>
      </div>
      <svg
        width="225"
        height="24"
        viewBox="0 0 378 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M374.071 13.0607C374.657 12.4749 374.657 11.5251 374.071 10.9393L364.525 1.3934C363.94 0.807612 362.99 0.807612 362.404 1.3934C361.818 1.97918 361.818 2.92893 362.404 3.51472L370.889 12L362.404 20.4853C361.818 21.0711 361.818 22.0208 362.404 22.6066C362.99 23.1924 363.94 23.1924 364.525 22.6066L374.071 13.0607ZM0.989258 13.5H373.011V10.5H0.989258V13.5Z"
          fill="black"
          className="slideInLeft"
        />
      </svg>
      <div className="scale-up-tr-1 w-72 h-60 px-8 py-6 text-center border border-quaternary shadow-xl relative ">
        <div className="h-10 bg-quaternary border-b-primary  shadow-md absolute inset-x-0 top-0">
          <div className=" flex gap-x-4 justify-end  h-10 items-center mr-2 ">
            <span className="  bg-white w-4 h-1"></span>
            <span className="  border-white border-2 top-0 right-0 w-4 h-4"></span>
            <div className=" relative h-2 w-7">
              <span className="  bg-white absolute  top-0 left-0  w-5  h-1  rotate-45 "></span>
              <span className="  bg-white absolute  top-0 left-0  w-5   h-1  -rotate-45 "></span>
            </div>
          </div>
        </div>
        <p className=" h-full flex flex-col justify-center items-center">
          <b> {step4} </b> <br></br> {text4}
        </p>
      </div>
    </div>
  );
}
