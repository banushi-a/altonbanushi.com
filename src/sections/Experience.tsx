import GlowingText from "../components/GlowingText";
import TimelineItem, {
  type TimelineItemData,
} from "../components/TimelineItem";

const timelineItems: TimelineItemData[] = [
  {
    title: "Software Developer",
    company: "Epic",
    time: "2025 - now",
    description:
      "Deliver healthcare software solutions for 325 million patients worldwide",
  },
  {
    title: "Quantiative Risk Developer Co-op",
    company: "Nomura",
    time: "2024",
    description:
      "Researched predictive statistical models for multiple compliance mandates",
  },
  {
    title: "Software Engineering Intern",
    company: "TD Securities",
    time: "2024",
    description:
      "Developed and maintained software for automating wholesale deal processes",
  },
  {
    title: "Quantitative Developer Co-op",
    company: "UBS",
    time: "2023",
    description:
      "Researched and implemented strategies for Fixed Income Emerging Markets (passive) team",
  },
  {
    title: "Teaching Assistant",
    company: "Khoury College",
    time: "2022 - 2025",
    description:
      "CS 3000 (Algorithms and Data) and CS2500 (Fundamentals of Computer Science)",
  },
];

const Experience = (): JSX.Element => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-4">
      <GlowingText text="experience" size="H2" />
      <div className="relative w-full max-w-[69rem]">
        {/* Vertical center line for desktop timeline */}
        <div className="hidden md:block absolute w-[3px] h-full left-1/2 transform -translate-x-1/2 bg-gray-600" />
        {timelineItems.map((item, index) => (
          <TimelineItem key={index} item={item} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
