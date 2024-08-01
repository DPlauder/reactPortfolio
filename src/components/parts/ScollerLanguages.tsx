import { useEffect, useRef } from "react";
import "../css/ScrollerLanguage.css";
import {
  FaReact,
  FaJsSquare,
  FaGit,
  FaGithub,
  FaNpm,
  FaPhp,
} from "react-icons/fa";
import {
  SiTypescript,
  SiDotnet,
  SiMysql,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";

const items = [
  <FaReact size={100} color="#61DBFB" />,
  <SiTypescript size={100} color="#3178C6" />,
  <FaJsSquare size={100} color="#F7DF1E" />,
  <SiDotnet size={100} color="#512BD4" />,
  <FaGit size={100} color="#F05032" />,
  <FaGithub size={100} color="#181717" />,
  <FaNpm size={100} color="#CB3837" />,
  <FaPhp size={100} color="#777BB4" />,
  <SiMysql size={100} color="#4479A1" />,
  <SiMongodb size={100} color="#47A248" />,
  <SiPostgresql size={100} color="#336791" />,
];

const ScrollLanguages: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let scrollAmount = 0;
    const scrollStep = 1; // Adjust the speed of scrolling
    const intervalTime = 10; // Interval for scrolling, adjust for smoothness

    const scroll = () => {
      if (container.scrollLeft >= container.scrollWidth / 2) {
        scrollAmount = 0; // Reset scroll position to loop
      } else {
        scrollAmount += scrollStep; // Increment scroll position
      }
      container.scrollLeft = scrollAmount; // Apply new scroll position
    };

    const intervalId = setInterval(scroll, intervalTime); // Set up the scrolling interval

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="scroll-container" ref={scrollContainerRef}>
      {items.map((item, index) => (
        <div className="scroll-item" key={index}>
          {item}
        </div>
      ))}
      {/* Duplicated content for seamless scrolling */}
      {items.map((item, index) => (
        <div className="scroll-item" key={`dup-${index}`}>
          {item}
        </div>
      ))}
    </div>
  );
};

export default ScrollLanguages;
