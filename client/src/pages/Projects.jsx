import CallToAction from "../components/CallToAction";
import { myProjects } from "./myProjects";
import { useState } from "react";
import './Projects.css'

export default function Projects() {

  const [currentActive, setcurrentActive] = useState("all");
  const [arr, setArr] = useState(myProjects);

  const handleClick = (buttonCategory) => {
    setcurrentActive(buttonCategory);

    const newArr = myProjects.filter((item) => {
      const ZZZ = item.category.find((myItem) => {
        return myItem === buttonCategory;
      });

      return ZZZ === buttonCategory;
    });

    setArr(newArr);
  };


  return (
    <div className=" flex flex-col md:flex-row">
      <div className="p-8 border-b md:border-r md:min-h-screen border-gray-500">
        
      <section className="flex flex-col gap-8 whitespace-nowrap font-semibold ">
        <button
          onClick={() => {
            setcurrentActive("all");
            setArr(myProjects);
          }}
          className={currentActive === "all" ? "active" : null}
        >
          all projects
        </button>

        <button
          onClick={() => {
            handleClick("css");
          }}
          className={currentActive === "css" ? "active" : null}
        >
          HTML & CSS
        </button>

        <button
          onClick={() => {
            handleClick("js");
          }}
          className={currentActive === "js" ? "active" : null}
        >
          JavaScript
        </button>
        <button
          onClick={() => {
            handleClick("react");
          }}
          className={currentActive === "react" ? "active" : null}
        >
          React & MUI
        </button>
        <button
          onClick={() => {
            handleClick("node");
          }}
          className={currentActive === "node" ? "active" : null}
        >
          Node & Express
        </button>
      </section>
      </div>
      <dev>
      <div className="pb-36 pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto gap-4 p-2">
        {arr.map((project, index) => (
          <CallToAction key={index} project={project} />
        ))}
      </div>
      </dev>
    </div>
  );
}
