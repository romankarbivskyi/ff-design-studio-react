import { projects } from "../data/projects";
import { type Project } from "../types/project";

const OurWork = () => {
  return (
    <section className="my-5 px-3.75">
      <h4 className="mb-2.5 md:mb-33.25">Our work</h4>
      {projects.map((project) => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </section>
  );
};

export default OurWork;

interface ProjectItemProps {
  project: Project;
}

const ProjectItem = ({ project }: ProjectItemProps) => {
  return (
    <div className="space-y-5 px-3.75 pb-12.5">
      <div className="overflow-hidden">
        <div className="no-scrollbar flex flex-nowrap gap-5 overflow-auto">
          {project.imageUrls.map((url, index) => (
            <img key={index} src={url} alt={`${project.title} ${index + 1}`} />
          ))}
        </div>
      </div>
      <div className="flex flex-wrap justify-between gap-8">
        <div className="flex gap-4">
          <h5 className="text-para2">Project</h5>
          <div className="">
            <h5>{project.title}</h5>
            <h5 className="text-para2">{project.subtitle}</h5>
          </div>
        </div>
        <div className="max-w-79 space-y-7.5">
          <p>{project.description}</p>
          <a href={project.projectUrl} className="text-para2">
            See Project →
          </a>
        </div>
      </div>
    </div>
  );
};
