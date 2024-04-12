// import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
export default function CallToAction({ project }) {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl border-2 border-gray-300 hover:border-gray-400 transition-all">
      <Link to={`/projects/${project.id}`}>
        <dev className="flex justify-center items-center h-48">
          <img
            className="w-full h-full object-cover hover:scale-[102.5%] transition-transform"
            src={project.imgPath}
            alt={project.projectTitle}
            loading="lazy"
          />
        </dev>
        <div className="px-4 py-2">
          <Link
            className="text-gray-900 font-semibold hover:underline"
            to={`/projects/${project.id}`}
          >
            <h2 className="text-gray-900 font-bold text-xl mb-2 line-clamp-1">{project.projectTitle}</h2>
            <p className="text-gray-800 text-sm line-clamp-3">
            {project.description}
            </p>
          </Link>

        </div>
        <div className="flex justify-end px-4 py-2">
          <Link
            className="text-gray-900 font-semibold hover:underline"
            to={`/projects/${project.id}`}
          >
            Project Detailsa
          </Link>
        </div>
      </Link>
    </div>
  );
}
