export interface TimelineItemData {
  title: string;
  company: string;
  time: string;
  description: string;
}

interface TimelineItemProps {
  item: TimelineItemData;
  index: number;
}

const TimelineItem = ({ item, index }: TimelineItemProps) => {
  const hoverGlowClass =
    "hover:bg-slate-400/30 hover:text-white hover:shadow-[0_0_20px_5px_rgba(255,182,193,0.7),0_0_30px_10px_rgba(135,206,235,0.7)] hover:outline-white outline outline-black";

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

export default TimelineItem;
