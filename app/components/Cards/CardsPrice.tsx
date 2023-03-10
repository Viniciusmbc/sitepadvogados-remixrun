import { useState } from "react";
import { Link } from "@remix-run/react";

export default function CardsPrice({
  title,
  description,
  price,
  payInParts,
  options,
}: {
  title: string;
  description: string;
  price: number;
  payInParts: number;
  options: string[];
}) {
  return (
    <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-secondary bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
      <h3 className="mb-4 text-2xl text-secondary font-semibold">{title}</h3>
      <p className="font-light text-secondary sm:text-lg dark:text-gray-400">
        {description}
      </p>
      <div className=" flex flex-col items-center justify-center  my-8">
        <span className="mr-2 text-5xl text-secondary font-extrabold">
          R$ {price}
        </span>
        <span className=" text-base text-quaternary ">
          ou em 10x de R$ {payInParts},00
        </span>
      </div>

      <ul className="mb-8 space-y-4 text-left">
        {options.map((option, index) => (
          <li key={index} className="flex items-center space-x-3">
            <svg
              className="flex-shrink-0 w-5 h-5  text-tercery"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="text-secondary">{option}</span>
          </li>
        ))}
      </ul>
      <Link
        to="/contato"
        className="text-white  bg-quaternary hover:bg-primary focus:ring-4 focus:ring-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        Contratar
      </Link>
    </div>
  );
}
