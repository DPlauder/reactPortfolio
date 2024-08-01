import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "../css/SwiperLanguage.css";

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

export default function SwiperLanguages() {
  return (
    <div className="mask-container">
      <Swiper
        spaceBetween={50}
        slidesPerView={5}
        loop={true}
        autoplay={{
          delay: 800,
          disableOnInteraction: false,
        }}
        speed={600}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <FaReact size={100} color="#61DBFB" />
        </SwiperSlide>
        <SwiperSlide>
          <SiTypescript size={100} color="#3178C6" />
        </SwiperSlide>
        <SwiperSlide>
          <FaJsSquare size={100} color="#F7DF1E" />
        </SwiperSlide>
        <SwiperSlide>
          <SiDotnet size={100} color="#512BD4" />
        </SwiperSlide>
        <SwiperSlide>
          <FaGit size={100} color="#F05032" />
        </SwiperSlide>
        <SwiperSlide>
          <FaGithub size={100} color="#181717" />
        </SwiperSlide>
        <SwiperSlide>
          <FaNpm size={100} color="#CB3837" />
        </SwiperSlide>
        <SwiperSlide>
          <FaPhp size={100} color="#777BB4" />
        </SwiperSlide>
        <SwiperSlide>
          <SiMysql size={100} color="#4479A1" />
        </SwiperSlide>
        <SwiperSlide>
          <SiMongodb size={100} color="#47A248" />
        </SwiperSlide>
        <SwiperSlide>
          <SiPostgresql size={100} color="#336791" />
        </SwiperSlide>
      </Swiper>
      <div className="mask"></div>
      <div className="mask-transparent-window"></div>
    </div>
  );
}
