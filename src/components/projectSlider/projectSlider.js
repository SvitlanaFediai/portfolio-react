import "./projectSlider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Grid, Pagination } from "swiper/modules";
import { projects } from "../../helpers/projectsList";
import Card from "../card/card";

const ProjectSlider = () => {
  return (
    <Swiper
      breakpoints={{
        350: {
          slidesPerView: 1,
          spaceBetween: 5,
          grid: {
            rows: 1,
            fill: "row",
          },
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 20,
          grid: {
            rows: 2,
            fill: "row",
          },
        },
      }}
      pagination={{
        el: ".swiper__pagination",
        clickable: true,
      }}
      modules={[Grid, Pagination]}
    >
      {projects.map((item) => {
        return (
          <SwiperSlide key={item.id}>
            <Card item={item} />
          </SwiperSlide>
        );
      })}

      <div className="swiper__pagination"></div>
    </Swiper>
  );
};

export default ProjectSlider;
