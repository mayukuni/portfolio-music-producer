import React from "react";

export default function Header(props) {
  const { home, projects, findme } = props;
  return (
    <header className="fixed w-full">
      <div className="bg-[#1E201E] h-[66px] flex justify-between items-center font-montserrat max-lg:flex-col max-lg:h-auto">
        <h1 className="font-mono mx-8 hover:bg-[#ECDFCC] hover:text-[#1E201E] text-6xl p-2 text-[#ECDFCC] font-sans font-bold max-lg:text-5xl">
          Arthur Orcy
        </h1>
        <div className="flex space-x-4 text-3xl pr-10 max-lg:text-lg max-lg:items-center max-lg:px-0 max-lg:text-[15px]">
          <a href={home} className="hover:bg-[#ECDFCC] hover:text-[#1E201E] px-2 text-[#ECDFCC]">Sobre mim</a>
          <a href={projects} className="hover:bg-[#ECDFCC] hover:text-[#1E201E] px-2 text-[#ECDFCC]">Projetos</a>
          <a href={findme} className="hover:bg-[#ECDFCC] hover:text-[#1E201E] px-2 text-[#ECDFCC]">Onde me encontrar</a>
        </div>
      </div>
      <hr className="border-[#697565]" />
    </header>
  );
}
