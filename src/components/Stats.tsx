const stats = [
  {
    value: "1M+",
    description: "Users and visitors interacted with our websites",
  },
  {
    value: "36",
    description: "Active campaigns for multiple companies and brands",
  },
  {
    value: "100+",
    description: "Different clients have sought our expertise",
  },
];

interface StatsProps {
  statsOnly?: boolean;
}

const Stats = ({ statsOnly = false }: StatsProps) => {
  return (
    <section className="my-5 flex flex-col space-y-7.5 px-3.75 sm:flex-row">
      {!statsOnly && (
        <div className="flex-1">
          <h3 className="mb-20 text-balance sm:max-w-1/2">
            Frame & Form craft visual strategies that elevate your brand.
          </h3>
        </div>
      )}
      <div className="flex-1 space-y-18.25">
        <div
          className={`flex gap-5 ${statsOnly ? "flex-col md:flex-row" : "flex-col"}`}
        >
          {stats.map((stat, i) => (
            <div
              className={`flex-1 space-y-4.25 ${statsOnly ? `py-4 md:py-8 md:pr-4 ${i !== stats.length - 1 ? "border-b md:border-r md:border-b-0" : ""}` : "border-b pb-5"}`}
            >
              <span className="text-[105px] md:text-[88px] xl:text-[105px]">
                {stat.value}
              </span>
              <p>{stat.description}</p>
            </div>
          ))}
        </div>
        {!statsOnly && (
          <a href="/about" className="text-para2">
            About →
          </a>
        )}
      </div>
    </section>
  );
};

export default Stats;
