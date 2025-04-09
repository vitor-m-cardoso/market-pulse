import Image from "next/image";
import Header from "./images/Header.svg"
import "@/styles/globals.css";

export default function Home() {
  return (
    <div className="h-screen">
      <div className="flex h-40 bg-blue-400"></div>
      <div className="relative w-full h-3/12">
        <Image
          src={Header}
          alt="header"
          fill
          className="object-cover"
        />
      </div>

      {/* <div className="flex w-screen h-3/5 bg-red-400 p-16">
        <div className="min-w-screen h-4/5 bg-gray-100 rotate-6">
          <text className="text-9xl text-blue-600 -rotate-6 bg-yellow-300 ">Raissa</text>
          <ul className=" text-blue-600 -rotate-6">
            <li>aa</li>
            <li>aa</li>
            <li>aa</li>
            <li>aa</li>
          </ul>
        </div>
      </div> */}

      <div className="relative w-screen h-screen overflow-hidden bg-gray-100">
        {/* Div em diagonal */}
        <div className="absolute -top-32 -left-1/2 w-[200vw] h-[400px] bg-white rotate-[-12deg] shadow-lg"></div>

        {/* Conteúdo acima */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-3xl font-bold">Conteúdo central</h1>
        </div>
      </div>
    </div>
  );
}
