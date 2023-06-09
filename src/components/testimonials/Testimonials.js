import React from "react";
import "./testimonials.css";
import AVATAR1 from "../../assets/avatar1.jpg";
import AVATAR2 from "../../assets/avatar2.jpg";
import AVATAR3 from "../../assets/avatar3.jpg";
import AVATAR4 from "../../assets/avatar4.jpg";

import { Pagination} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default function Testimonials() {
    const testimonialObject = [
      {
        avatar: AVATAR1,
        title: "Avatar1",
        name: "Sheyda Jahanloo",
        comment:
          "Working with Samira was fantastic, a patient developer who deeply listen to you and try to reach what you have in your mind.I worked with other developers before but I wanna say that she is the besty.",
      },
      {
        avatar: AVATAR2,
        title: "Avatar1",
        name: "Reza Moradi",
        comment:
          "Working with Samira was fantastic, a patient developer who deeply listen to you and try to reach what you have in your mind.I worked with other developers before but I wanna say that she is the besty.",
      },
      {
        avatar: AVATAR3,
        title: "Avatar1",
        name: "Aydin Sabri",
        comment:
          "Working with Samira was fantastic, a patient developer who deeply listen to you and try to reach what you have in your mind.I worked with other developers before but I wanna say that she is the besty.",
      },
      {
        avatar: AVATAR4,
        title: "Avatar1",
        name: "Mona Ramezani",
        comment:
          "Working with Samira was fantastic, a patient developer who deeply listen to you and try to reach what you have in your mind.I worked with other developers before but I wanna say that she is the besty.",
      },
    ];
    return (
      <section className="testimonials">
        <h5>Review from Clients</h5>
        <h2>Testimonials</h2>
        <Swiper
          className="container testimonials__container"
          // install Swiper modules
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          {testimonialObject.map(({ avatar, title, name, comment }, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt={title} />
                </div>
                <h5 className="client__name">{name}</h5>
                <small className="client__review">{comment}</small>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    );
}