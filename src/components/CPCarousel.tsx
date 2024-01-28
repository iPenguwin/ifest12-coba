import { FC } from "react";
import { Grid, Navigation, Pagination } from "swiper/modules";
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";

import CP from "./CP";

const CPCarousel: FC = () => {
  const CPdata = [
    {
      "event": "I2C",
      "bg":"#60458A",
      "person1":"Alvin",
      "person2":"Jeany",
      "no1":"87794005230",
      "no2":"82151779891"
    },
    {
      "event": "WDC",
      "bg":"#1ea64b",
      "person1":"Lisya",
      "person2":"Yonatan",
      "no1":"89503210551",
      "no2":"87753428099"
    },
    {
      "event": "WDC",
      "bg":"#1ea64b",
      "person1":"Lisya",
      "person2":"Yonatan",
      "no1":"89503210551",
      "no2":"87753428099"
    },
  ];
  return (
    <div className="flex !w-9/12 h-fit">
      <Swiper
        breakpoints={{
          1024: {
            slidesPerView: 3
          },
        }}
        className="mySwiper classes.swiper-button-prev classes.swiper-button-next"
        grid={{
          rows: 1,
          fill: "row",
        }}
        modules={[Grid, Pagination, Navigation]}
        navigation
        pagination={{
          clickable: true,
        }}
        spaceBetween={8}
      >
        {CPdata.map((data) => {
          return(
            <SwiperSlide className="h-[25rem] px-24 lg:px-10">
              <CP event={data.event} bg={data.bg} person1={data.person1} person2={data.person2} no1={data.no1} no2={data.no2}/>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default CPCarousel;
