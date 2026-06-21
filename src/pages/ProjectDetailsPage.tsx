import { redirect, useParams } from "react-router";
import { ImageStack, OtherProjects, ProjectIntro } from "../components";
import { projects } from "../data/projects";

const ProjectDetailsPage = () => {
  const { id } = useParams();

  const project = projects.find((proj) => proj.id == id)?.details;
  const otherProjects = projects.filter((proj) => proj.id !== id);

  if (!id) redirect("/");

  return (
    <div>
      <ProjectIntro
        title={project?.title}
        description={project?.description}
        tags={project?.tags}
      />
      <ImageStack images={project?.imageUrls} />
      <OtherProjects data={otherProjects.slice(0, 3)} />
    </div>
  );
};

export default ProjectDetailsPage;
