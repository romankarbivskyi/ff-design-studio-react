import type { Project } from "../types/project";

interface OtherProjectsProps {
  data: Project[];
}

const OtherProjects = ({ data }: OtherProjectsProps) => {
  return (
    <section className="p-3.75 pb-20">
      <div className="border-t pt-7.25">
        <h1>Other Projects</h1>
      </div>
      <div className="flex w-full flex-col gap-3.5 md:flex-row">
        {data.length > 0 &&
          data.map((proj) => (
            <ProjectItem url={proj.projectUrl} image={proj.imageUrls[0]} />
          ))}
      </div>
    </section>
  );
};

export default OtherProjects;

interface ProjectItemProps {
  image: string;
  url: string;
}

const ProjectItem = ({ image, url }: ProjectItemProps) => {
  return (
    <div className="flex flex-1 flex-col gap-2.5">
      <img src={image} alt="Project Image" />
      <a href={url} className="text-para2">
        See Project →
      </a>
    </div>
  );
};
