import React from "react";

export default function ProjectCard(props) {
  const { title, func, page, video } = props;

  return (
    <div className="bg-[#697565] rounded-lg font-montserrat m-12 mx-20 border-2 border-[#697565] p-10 flex justify-between max-lg:flex max-lg:flex-col max-lg:m-1 max-lg:rounded-none max-lg:border-0 max-lg:flex-col-reverse">
      <div className="flex flex-col justify-between">
        <h1 className="text-xxl text-[#ECDFCC] max-lg:text-2xl max-lg:mb-6">{title}</h1>
        <h2 className="text-3xl text-[#ECDFCC] max-lg:text-xl">Função: {func}</h2>
        <div className="flex flex-col">
          <a href={page} target="_blank" className="underline italic decoration-1 text-2xl text-[#ECDFCC] hover:text-[#3C3D37] max-lg:text-lg">Link do projeto no Youtube</a>
        </div>
      </div>
      <iframe width="560" height="315" src={video} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"  className="w-2/4  rounded-3xl border-4 border-double border-[#1E201E] max-lg:w-full max-lg:rounded-none max-lg:mb-4"allowfullscreen></iframe>
    </div>
  );
}