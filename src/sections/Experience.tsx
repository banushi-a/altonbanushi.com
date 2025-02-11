import GlowingText from "../components/GlowingText";

interface TimelineItemData {
  title: string;
  company: string;
  time: string;
  description: string;
}

const timelineItems: TimelineItemData[] = [
  {
    title: "Teaching Assistant",
    company: "Khoury College",
    time: "2022 - 2025",
    description:
      "CS 3000 (Algorithms and Data) and CS2500 (Fundamentals of Computer Science)",
  },
  {
    title: "Quantitative Developer Co-op",
    company: "UBS",
    time: "2023",
    description:
      "Researched and implemented strategies for Fixed Income Emerging Markets (passive) team",
  },
  {
    title: "Software Engineering Intern",
    company: "TD Securities",
    time: "2024",
    description:
      "Developed and maintained software for automating wholesale deal processes",
  },
  {
    title: "Quantiative Risk Developer Co-op",
    company: "Nomura",
    time: "2024",
    description:
      "Researched predictive statistical models for multiple compliance mandates",
  },
];

interface TimelineItemProps {
  item: TimelineItemData;
  index: number;
}

const TimelineItem = ({ item, index }: TimelineItemProps) => {
  const hoverGlowClass =
    "hover:shadow-[0_0_20px_5px_rgba(255,182,193,0.7),0_0_30px_10px_rgba(135,206,235,0.7)] hover:outline-white outline outline-black";

  return (
    <div className="my-12">
      {/* Mobile layout: stack content in a centered card */}
      <div
        className={`flex flex-col items-center rounded-lg px-4 py-6 md:hidden transition-all duration-500 ease-in-out backdrop-blur-3xl ${hoverGlowClass}`}
      >
        <div className="text-center">
          <h3 className="text-lg font-semibold">{item.title}</h3>
          <h3 className="text-md font-semibold italic">{item.company}</h3>
          <time className="block text-sm">{item.time}</time>
          <p className="mt-2 text-base">{item.description}</p>
        </div>
      </div>

      {/* Desktop layout: alternate card position relative to a vertical timeline */}
      <div className="hidden md:flex items-center w-full p-10">
        {index % 2 === 0 ? (
          <>
            {/* Left side content */}
            <div className="w-5/12 text-right pr-4">
              <div
                className={`p-4 rounded-lg shadow-md inline-block transition-all duration-500 ease-in-out backdrop-blur-3xl ${hoverGlowClass}`}
              >
                <h3 className="text-lg lg:text-2xl font-semibold">
                  {item.title}
                </h3>
                <h3 className="text-md lg:text-lg font-semibold italic">
                  {item.company}
                </h3>
                <time className="block text-sm">{item.time}</time>
                <p className="mt-2 text-base">{item.description}</p>
              </div>
            </div>
            {/* Center timeline dot */}
            <div className="w-2/12 flex justify-center">
              <div className="w-4 h-4 rounded-full bg-black" />
            </div>
            {/* Right side empty */}
            <div className="w-5/12" />
          </>
        ) : (
          <>
            {/* Left side empty */}
            <div className="w-5/12" />
            {/* Center timeline dot */}
            <div className="w-2/12 flex justify-center">
              <div className="w-4 h-4 rounded-full bg-black" />
            </div>
            {/* Right side content */}
            <div className="w-5/12 text-left pl-4">
              <div
                className={`p-4 rounded-lg shadow-md inline-block transition-all duration-500 ease-in-out backdrop-blur-3xl ${hoverGlowClass}`}
              >
                <h3 className="text-lg lg:text-2xl font-semibold">
                  {item.title}
                </h3>
                <h3 className="text-md lg:text-lg font-semibold italic">
                  {item.company}
                </h3>
                <time className="block text-sm">{item.time}</time>
                <p className="mt-2 text-base">{item.description}</p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const Experience = (): JSX.Element => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-4">
      <GlowingText text="experience" size="H3" />
      <div className="relative w-full max-w-[69rem]">
        {/* Vertical center line for desktop timeline */}
        <div className="hidden md:block absolute w-[3px] h-full left-1/2 transform -translate-x-1/2 bg-black" />
        {timelineItems.map((item, index) => (
          <TimelineItem key={index} item={item} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
