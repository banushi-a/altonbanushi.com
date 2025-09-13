import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

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
  const itemRef = useRef<HTMLDivElement>(null);
  const mobileCardRef = useRef<HTMLDivElement>(null);
  const desktopCardRef = useRef<HTMLDivElement>(null);

  const cardClass =
    "bg-gray-900/50 text-white border border-gray-700 hover:border-gray-500 hover:bg-gray-800/50 hover:shadow-[0_0_20px_5px_rgba(60,166,185,0.3),0_0_30px_10px_rgba(168,85,247,0.2)]";

  useEffect(() => {
    const item = itemRef.current;
    const mobileCard = mobileCardRef.current;
    const desktopCard = desktopCardRef.current;

    if (!item) return;

    // Mobile animation - slide up and fade in
    if (mobileCard) {
      gsap.set(mobileCard, {
        y: 50,
        opacity: 0,
      });

      gsap.to(mobileCard, {
        y: 0,
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });
    }

    // Desktop animation - slide from appropriate side based on index
    if (desktopCard) {
      const isLeft = index % 2 === 0;

      gsap.set(desktopCard, {
        x: isLeft ? -100 : 100,
        opacity: 0,
        scale: 0.9,
      });

      gsap.to(desktopCard, {
        x: 0,
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: "circ.in",
        scrollTrigger: {
          trigger: item,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });
    }

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === item) {
          trigger.kill();
        }
      });
    };
  }, [index]);

  return (
    <div ref={itemRef} className="my-12">
      {/* Mobile layout: stack content in a centered card */}
      <div
        ref={mobileCardRef}
        className={`flex flex-col items-center rounded-lg px-4 py-6 md:hidden transition-all duration-500 ease-in-out ${cardClass}`}
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
                ref={desktopCardRef}
                className={`p-4 rounded-lg shadow-md inline-block transition-all duration-500 ease-in-out ${cardClass}`}
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
              <div className="w-4 h-4 rounded-full bg-gray-600 border-2 border-gray-600" />
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
              <div className="w-4 h-4 rounded-full bg-gray-600 border-2 border-gray-600" />
            </div>
            {/* Right side content */}
            <div className="w-5/12 text-left pl-4">
              <div
                ref={desktopCardRef}
                className={`p-4 rounded-lg shadow-md inline-block transition-all duration-500 ease-in-out ${cardClass}`}
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
