import React from "react";
import { Card, CardBody } from "reactstrap";
import "./Stories.scss";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";
import { Navigation } from "swiper";

const Stories = ({ stories }) => {
  return (
    <div className="mb-3 d-flex justify-content-center">
      <Card className="stories">
        <CardBody>
          <Swiper
            slidesPerView={5}
            spaceBetween={30}
            slidesPerGroup={5}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            <div className=" d-flex">
              {[1, 2, 3, 4, 5, 6, 7, 8,9,10].map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="story cursor">
                    <img
                      style={{ width: "60px", height: "60px" }}
                      src="http://www.venmond.com/demo/vendroid/img/avatar/big.jpg"
                      className="avatar-xs rounded-circle me-2 cursor-pointer"
                      alt="User"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </CardBody>
      </Card>
    </div>
  );
};

export default Stories;
