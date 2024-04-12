import { Link, useParams } from "react-router-dom";
import { myProjects } from "./myProjects";

export default function ProjectPage() {
  const { projectId } = useParams("react project");

  const project = myProjects.find((proj) => proj.id === parseInt(projectId));

  if (!project) {
    // Handle case where project is not found
    return <div>Project not found</div>;
  }

  return (
    <div className="pb-44 max-w-6xl mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">
          {`${project.projectTitle} - HTML, CSS, JavaScript`}
        </h1>

        <img
          className="mb-4 mx-auto w-[350px] max-w-full sm:w-[600] sm:max-w-[50%] min-h-[250px] object-cover"
          src={project.imgPath}
          alt="Project Image"
        />
        <h2 className="text-2xl font-bold mb-4">Project description</h2>
        <p className="text-gray-700 text-lg mb-4">
          {project.description}
        </p>
        <h2 className="text-2xl font-bold mb-4">Automatically</h2>
        <a
          href="#"
          className="bg-[#2A5700] hover:bg-lime-600 text-[#F0F8FF] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4 text-lg "
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Demo
        </a>
        <h2 className="text-2xl font-bold my-4">
          {`${project.projectTitle} Project Source Code (Github)`}
        </h2>
        <a
          href="#"
          className="bg-[#2424ff] hover:bg-blue-600 text-[#F0F8FF] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4 text-lg "
          target="_blank"
          rel="noopener noreferrer"
        >
          Source Code
        </a>
      </div>
    </div>
  );
}
