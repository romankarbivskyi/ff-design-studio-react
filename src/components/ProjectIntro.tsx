interface ProjectIntroProps {
  title?: string;
  description?: string;
  tags?: string[];
}

const ProjectIntro = ({ title, description, tags }: ProjectIntroProps) => {
  return (
    <section className="px-3.75 py-2.5 pt-6.25">
      <div className="mb-20 flex flex-col gap-7.5 sm:flex-row md:mb-40">
        <div className="mt-2.5 flex-1 space-y-5">
          <h4 className="underline">Case Study</h4>
          <h1>{title}</h1>
        </div>
        <div className="mt-0 flex-1 space-y-11 sm:mt-2.5">
          <p className="para1">{description}</p>
          <div className="flex flex-col gap-2">
            {tags?.map((tag) => (
              <span key={tag} className="text-para2 para1">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectIntro;
